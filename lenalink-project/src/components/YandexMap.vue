<template>
  <div class="yandex-map-container" :style="{ height: height }">
    <div ref="mapContainer" class="map-container" :style="{ height: height }"></div>

    <!-- Индикатор загрузки -->
    <div v-if="loading" class="map-loading">
      <div class="loading-spinner"></div>
      <p>Загрузка карты...</p>
    </div>

    <!-- Ошибка загрузки карты -->
    <div v-if="error" class="map-error">
      <div class="error-icon">⚠️</div>
      <p>{{ error }}</p>
      <button @click="initializeMap" class="retry-button">Попробовать снова</button>
    </div>

    <!-- Информация о маршруте для отладки -->
    <div v-if="!loading && !error && debugInfo" class="debug-info">
      <small>Debug: {{ debugInfo }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YandexMap',
  props: {
    // Данные маршрута
    route: {
      type: Object,
      required: true,
    },
    // Высота карты
    height: {
      type: String,
      default: '400px',
    },
    // Масштаб карты по умолчанию
    defaultZoom: {
      type: Number,
      default: 8,
    },
    // API ключ Yandex Maps (опционально)
    apiKey: {
      type: String,
      default: '', // Если пустой, будет использоваться demo ключ
    },
  },
  data() {
    return {
      map: null,
      loading: true,
      error: null,
      routePlacemarks: [],
      routeLine: null,
      yandexReady: false,
      debugInfo: null,
    }
  },
  mounted() {
    this.initializeMap()
  },
  beforeUnmount() {
    if (this.map) {
      this.map.destroy()
    }
  },
  watch: {
    // Перерисовка карты при изменении маршрута
    route: {
      handler() {
        this.updateMap()
      },
      deep: true,
    },
  },
  methods: {
    async initializeMap() {
      this.loading = true
      this.error = null

      try {
        await this.loadYandexMaps()
        this.createMap()
        this.updateMap()
      } catch (error) {
        this.error = 'Не удалось загрузить карту. Проверьте подключение к интернету.'
        console.error('Map initialization error:', error)
      } finally {
        this.loading = false
      }
    },

    loadYandexMaps() {
      return new Promise((resolve, reject) => {
        if (window.ymaps) {
          resolve()
          return
        }

        const script = document.createElement('script')
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU&load=package.full'
        script.onload = () => {
          // Инициализация API
          window.ymaps.ready(() => {
            this.yandexReady = true
            resolve()
          })
        }
        script.onerror = reject

        document.head.appendChild(script)
      })
    },

    createMap() {
      if (!window.ymaps || !this.$refs.mapContainer) return

      // Определяем центральную точку (если есть сегменты, берем первую)
      const centerPoint = this.getCenterPoint()

      this.map = new window.ymaps.Map(this.$refs.mapContainer, {
        center: centerPoint,
        zoom: this.defaultZoom,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl'],
      })

      // Добавляем обработчики событий
      this.map.events.add('boundschange', this.onBoundsChange)
    },

    getCenterPoint() {
      if (!this.route.segments || this.route.segments.length === 0) {
        // Москва по умолчанию
        return [55.751244, 37.618423]
      }

      // Если есть координаты, используем первую точку
      const firstSegment = this.route.segments[0]
      if (firstSegment.from_coordinates) {
        return [firstSegment.from_coordinates.lat, firstSegment.from_coordinates.lon]
      }

      // Попытка получить координаты через геокодирование или fallback
      const coords = this.getCityCoordinates(firstSegment.from)
      if (coords) {
        return coords
      }

      // Финальный fallback на Москву
      console.warn('Using fallback center point for:', firstSegment.from)
      return [55.751244, 37.618423]
    },

    async getCityCoordinates(cityName) {
      // Сначала проверяем fallback координаты для известных городов
      const fallbackCoords = this.getFallbackCoordinates(cityName)
      if (fallbackCoords) {
        console.log('Using fallback coordinates for:', cityName, fallbackCoords)
        return fallbackCoords
      }

      try {
        if (!window.ymaps) return null

        console.log('Attempting geocoding for city:', cityName)
        const geocoder = window.ymaps.geocode(cityName)
        const result = await geocoder
        const firstGeoObject = result.geoObjects.get(0)

        if (firstGeoObject) {
          const coords = firstGeoObject.geometry.getCoordinates()
          console.log('Geocoding successful for:', cityName, coords)
          return coords
        } else {
          console.warn('No geocoding results for city:', cityName)
        }
      } catch (error) {
        console.warn('Geocoding failed for city:', cityName, error)
      }
      return null
    },

    getFallbackCoordinates(cityName) {
      // Fallback координаты для основных городов России
      const cityCoords = {
        Москва: [55.751244, 37.618423],
        'Москва (VKO)': [55.603718, 37.289481], // Внуково
        'Москва (SVO)': [55.972642, 37.414581], // Шереметьево
        'Москва (DME)': [55.408611, 37.906544], // Домодедово
        Якутск: [62.035452, 129.675481],
        'Санкт-Петербург': [59.931058, 30.360911],
        Новосибирск: [55.008352, 82.935729],
        Екатеринбург: [56.838926, 60.605702],
        'Нижний Новгород': [56.296504, 43.936059],
        Казань: [55.83043, 49.06608],
        Челябинск: [55.164391, 61.436843],
        Омск: [54.98848, 73.324236],
        Самара: [53.20006, 50.150008],
        'Ростов-на-Дону': [47.235713, 39.701505],
        Уфа: [54.738756, 55.972056],
        Красноярск: [56.015286, 92.893251],
        Воронеж: [51.675496, 39.208882],
      }

      // Поиск точного совпадения
      if (cityCoords[cityName]) {
        return cityCoords[cityName]
      }

      // Поиск частичного совпадения
      for (const [key, coords] of Object.entries(cityCoords)) {
        if (cityName.includes(key) || key.includes(cityName)) {
          console.log(`Found partial match: ${cityName} -> ${key}`)
          return coords
        }
      }

      console.log('No fallback coordinates found for:', cityName)
      return null
    },

    async updateMap() {
      if (!this.map || !window.ymaps || !this.route.segments) {
        console.log('Skipping map update - missing data:', {
          hasMap: !!this.map,
          hasYandex: !!window.ymaps,
          hasSegments: !!this.route.segments,
        })
        return
      }

      try {
        console.log('Updating map with route:', this.route)
        this.debugInfo = `Сегментов: ${this.route.segments.length}`

        // Очищаем предыдущие элементы
        this.clearMapElements()

        // Добавляем точки маршрута
        await this.addRoutePoints()

        // Добавляем линию маршрута
        await this.addRouteLine()

        // Фит карту по маршруту
        this.fitMapToRoute()

        console.log('Map update completed successfully')
      } catch (error) {
        console.error('Route update error:', error)
        this.debugInfo = `Ошибка: ${error.message}`
      }
    },

    clearMapElements() {
      // Удаляем предыдущие метки
      this.routePlacemarks.forEach((placemark) => {
        this.map.geoObjects.remove(placemark)
      })
      this.routePlacemarks = []

      // Удаляем предыдущую линию
      if (this.routeLine) {
        this.map.geoObjects.remove(this.routeLine)
        this.routeLine = null
      }
    },

    async addRoutePoints() {
      for (let i = 0; i < this.route.segments.length; i++) {
        const segment = this.route.segments[i]

        // Точка отправления
        if (i === 0) {
          await this.addPoint(segment.from, 'start')
        }

        // Точка назначения
        if (i === this.route.segments.length - 1) {
          await this.addPoint(segment.to, 'end')
        } else {
          // Промежуточная точка для пересадки
          await this.addPoint(segment.to, 'transfer')
        }
      }
    },

    async addPoint(cityName, type) {
      try {
        const coordinates = await this.getCityCoordinates(cityName)
        if (!coordinates) return

        let iconContent = ''
        let bgColor = '#2563eb'
        let textColor = '#ffffff'

        switch (type) {
          case 'start':
            iconContent = 'Отправление'
            bgColor = '#059669'
            break
          case 'end':
            iconContent = 'Прибытие'
            bgColor = '#dc2626'
            break
          case 'transfer':
            iconContent = 'Пересадка'
            bgColor = '#f59e0b'
            textColor = '#000000'
            break
        }

        const placemark = new window.ymaps.Placemark(
          coordinates,
          {
            balloonContent: `
              <div style="padding: 8px;">
                <strong>${cityName}</strong><br>
                <small>${iconContent}</small>
              </div>
            `,
            hintContent: `${iconContent}: ${cityName}`,
          },
          {
            preset: 'islands#circleIcon',
            iconColor: bgColor,
            iconContent: '',
            iconSize: [30, 30],
            iconContentSize: [20, 20],
            iconContentOffset: [0, 0],
          }
        )

        this.map.geoObjects.add(placemark)
        this.routePlacemarks.push(placemark)
      } catch (error) {
        console.warn('Failed to add point:', cityName, error)
      }
    },

    async addRouteLine() {
      const coordinates = []

      // Собираем уникальные координаты в правильном порядке
      for (let i = 0; i < this.route.segments.length; i++) {
        const segment = this.route.segments[i]

        // Добавляем точку отправления для первого сегмента
        if (i === 0) {
          const fromCoords = await this.getCityCoordinates(segment.from)
          if (fromCoords) {
            coordinates.push(fromCoords)
            console.log('Added start point:', segment.from, fromCoords)
          }
        }

        // Добавляем точку назначения для каждого сегмента
        const toCoords = await this.getCityCoordinates(segment.to)
        if (toCoords) {
          // Избегаем дублирования последней точки
          const lastCoord = coordinates[coordinates.length - 1]
          if (!lastCoord || lastCoord[0] !== toCoords[0] || lastCoord[1] !== toCoords[1]) {
            coordinates.push(toCoords)
            console.log('Added destination point:', segment.to, toCoords)
          }
        }
      }

      console.log('Total coordinates for route:', coordinates)

      if (coordinates.length > 1) {
        try {
          this.routeLine = new window.ymaps.Polyline(
            coordinates,
            {
              balloonContent: 'Маршрут',
            },
            {
              strokeColor: '#dc2626',
              strokeWidth: 5,
              strokeOpacity: 0.8,
              strokeStyle: 'solid',
            }
          )

          this.map.geoObjects.add(this.routeLine)
          console.log('Route line created successfully')
        } catch (error) {
          console.error('Failed to create route line:', error)
        }
      } else {
        console.warn('Not enough coordinates to create route line')
      }
    },

    fitMapToRoute() {
      if (!this.routePlacemarks.length && !this.routeLine) return

      const bounds = []

      // Добавляем границы меток
      this.routePlacemarks.forEach((placemark) => {
        bounds.push(placemark.geometry.getCoordinates())
      })

      // Добавляем границы линии
      if (this.routeLine) {
        this.routeLine.geometry.getCoordinates().forEach((coord) => {
          bounds.push(coord)
        })
      }

      if (bounds.length > 0) {
        try {
          this.map.setBounds(bounds, {
            checkZoomRange: true,
            zoomMargin: 20,
          })
        } catch (error) {
          console.warn('Failed to fit bounds:', error)
        }
      }
    },

    onBoundsChange(event) {
      // Можно добавить логику обработки изменения масштаба/центра
      this.$emit('bounds-changed', {
        center: this.map.getCenter(),
        zoom: this.map.getZoom(),
      })
    },
  },
}
</script>

<style scoped>
.yandex-map-container {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: #f8fafc;
}

.map-container {
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: 16px;
}

/* Индикаторы состояния */
.map-loading,
.map-error {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  z-index: 10;
  border-radius: 16px;
}

.map-loading {
  color: #6b7280;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f4f6;
  border-top: 4px solid #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.map-error {
  text-align: center;
  color: #6b7280;
}

.error-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.retry-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  margin-top: 1rem;
}

.retry-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

/* Debug информация */
.debug-info {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  z-index: 5;
}

/* Адаптивность */
@media (max-width: 768px) {
  .map-container {
    min-height: 250px;
  }
}

@media (max-width: 480px) {
  .map-container {
    min-height: 200px;
  }
}
</style>
