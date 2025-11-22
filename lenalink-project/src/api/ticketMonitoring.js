/**
 * API модуль для мониторинга билетов LenaLink
 * Интеграция с бэкендом для получения данных о маршрутах
 * Для локальной разработки используются mock данные
 */

// Базовый URL API
const API_BASE_URL = 'https://lena.linkpc.net/api/v1'

// Режим разработки с mock данными
const USE_MOCK_DATA = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

/**
 * Mock данные для локальной разработки
 */
const MOCK_DATA = {
  // Данные билета
  ticketStatus: {
    ticket: {
      id: 'test-moscow-yakutsk-123',
      from_city: 'Москва',
      to_city: 'Якутск',
      departure_date: '2025-12-25',
      passengers: 1,
      total_price: 32500,
      total_duration: 28800000000000, // 8 часов в наносекундах
      status: 'confirmed',
      provider: 'S7 Airlines',
      segments: [
        {
          id: 'segment-1',
          from: 'Москва (VKO)',
          to: 'Якутск',
          transport_type: 'air',
          provider: 'S7 Airlines',
          departure_time: '2025-12-25T14:30:00',
          arrival_time: '2025-12-25T22:30:00',
          duration: 28800000000000,
          price: 32500,
          seat_info: 'Вагон 5, место 12А',
        },
      ],
    },
  },

  // Маршруты
  routes: {
    optimal: {
      routes: [
        {
          id: 'optimal-route-1',
          from_city: 'Москва',
          to_city: 'Якутск',
          departure_time: '2025-12-25T14:30:00',
          arrival_time: '2025-12-25T22:30:00',
          total_duration: 28800000000000,
          total_price: 32500,
          transport_types: ['air'],
          segments: [
            {
              id: 'seg-1',
              from: 'Москва (VKO)',
              to: 'Якутск',
              transport_type: 'air',
              provider: 'S7 Airlines',
              departure_time: '2025-12-25T14:30:00',
              arrival_time: '2025-12-25T22:30:00',
              duration: 28800000000000,
              price: 32500,
            },
          ],
        },
      ],
    },
    cheapest: {
      routes: [
        {
          id: 'cheapest-route-1',
          from_city: 'Москва',
          to_city: 'Якутск',
          departure_time: '2025-12-25T23:00:00',
          arrival_time: '2025-12-26T07:30:00',
          total_duration: 30600000000000,
          total_price: 28000,
          transport_types: ['air'],
          segments: [
            {
              id: 'seg-2',
              from: 'Москва (SVO)',
              to: 'Якутск',
              transport_type: 'air',
              provider: 'Yakutia Airlines',
              departure_time: '2025-12-25T23:00:00',
              arrival_time: '2025-12-26T07:30:00',
              duration: 30600000000000,
              price: 28000,
            },
          ],
        },
      ],
    },
    fastest: {
      routes: [
        {
          id: 'fastest-route-1',
          from_city: 'Москва',
          to_city: 'Якутск',
          departure_time: '2025-12-25T08:00:00',
          arrival_time: '2025-12-25T16:00:00',
          total_duration: 28800000000000,
          total_price: 35000,
          transport_types: ['air'],
          segments: [
            {
              id: 'seg-3',
              from: 'Москва (DME)',
              to: 'Якутск',
              transport_type: 'air',
              provider: 'Ural Airlines',
              departure_time: '2025-12-25T08:00:00',
              arrival_time: '2025-12-25T16:00:00',
              duration: 28800000000000,
              price: 35000,
            },
          ],
        },
      ],
    },
    multimodal: {
      routes: [
        {
          id: 'multimodal-route-1',
          from_city: 'Казань',
          to_city: 'Сочи',
          departure_time: '2025-12-25T06:00:00',
          arrival_time: '2025-12-27T18:00:00',
          total_duration: 158400000000000, // 44 часа в наносекундах
          total_price: 28500,
          transport_types: ['air', 'rail', 'bus'],
          segments: [
            {
              id: 'seg-m1',
              from: 'Казань',
              to: 'Волгоград',
              transport_type: 'air',
              provider: 'Utair',
              departure_time: '2025-12-25T06:00:00',
              arrival_time: '2025-12-25T08:30:00',
              duration: 9000000000000, // 2.5 часа
              price: 8500,
            },
            {
              id: 'seg-m2',
              from: 'Волгоград',
              to: 'Ростов-на-Дону',
              transport_type: 'rail',
              provider: 'РЖД',
              departure_time: '2025-12-25T12:00:00',
              arrival_time: '2025-12-25T18:30:00',
              duration: 23400000000000, // 6.5 часов
              price: 4200,
            },
            {
              id: 'seg-m3',
              from: 'Ростов-на-Дону',
              to: 'Краснодар',
              transport_type: 'bus',
              provider: 'Межгород',
              departure_time: '2025-12-25T20:00:00',
              arrival_time: '2025-12-25T23:30:00',
              duration: 12600000000000, // 3.5 часа
              price: 1500,
            },
            {
              id: 'seg-m4',
              from: 'Краснодар',
              to: 'Сочи',
              transport_type: 'bus',
              provider: 'Сочи-Экспресс',
              departure_time: '2025-12-26T08:00:00',
              arrival_time: '2025-12-26T14:30:00',
              duration: 23400000000000, // 6.5 часов
              price: 2800,
            },
          ],
        },
        {
          id: 'multimodal-route-2',
          from_city: 'Москва',
          to_city: 'Астрахань',
          departure_time: '2025-12-26T08:00:00',
          arrival_time: '2025-12-27T16:00:00',
          total_duration: 115200000000000, // 32 часа в наносекундах
          total_price: 22400,
          transport_types: ['rail', 'river', 'bus'],
          segments: [
            {
              id: 'seg-mm1',
              from: 'Москва (Казанский вокзал)',
              to: 'Волгоград',
              transport_type: 'rail',
              provider: 'РЖД',
              departure_time: '2025-12-26T08:00:00',
              arrival_time: '2025-12-26T20:00:00',
              duration: 43200000000000, // 12 часов
              price: 6800,
            },
            {
              id: 'seg-mm2',
              from: 'Волгоград',
              to: 'Астрахань',
              transport_type: 'river',
              provider: 'Волга-Лайн',
              departure_time: '2025-12-27T06:00:00',
              arrival_time: '2025-12-27T14:00:00',
              duration: 28800000000000, // 8 часов
              price: 9600,
            },
          ],
        },
      ],
    },
  },
}

/**
 * Универсальная функция для выполнения POST запросов к API
 * @param {string} endpoint - эндпоинт API
 * @param {Object} data - данные для отправки
 * @returns {Promise<Object>} - ответ от сервера
 */
async function apiRequest(endpoint, data) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

/**
 * Поиск маршрутов
 * @param {Object} searchParams - параметры поиска
 * @param {string} searchParams.from - город отправления
 * @param {string} searchParams.to - город назначения
 * @param {string} searchParams.departure_date - дата отправления (YYYY-MM-DD)
 * @param {number} searchParams.passengers - количество пассажиров
 * @returns {Promise<Object>} - найденные маршруты
 */
export async function searchRoutes(searchParams) {
  const endpoint = '/routes/search'
  return apiRequest(endpoint, searchParams)
}

/**
 * Получение детальной информации о конкретном маршруте
 * @param {string} routeId - ID маршрута
 * @returns {Promise<Object>} - детальная информация о маршруте
 */
export async function getRouteDetails(routeId) {
  const endpoint = `/routes/${routeId}`
  return apiRequest(endpoint, { routeId })
}

/**
 * Забронировать маршрут
 * @param {Object} bookingData - данные для бронирования
 * @param {string} bookingData.routeId - ID маршрута
 * @param {Object[]} bookingData.passengers - данные пассажиров
 * @param {Object} bookingData.contactInfo - контактная информация
 * @returns {Promise<Object>} - информация о бронировании
 */
export async function bookRoute(bookingData) {
  const endpoint = '/routes/book'
  return apiRequest(endpoint, bookingData)
}

/**
 * Получение информации о забронированном билете
 * @param {string} ticketId - ID билета
 * @returns {Promise<Object>} - информация о билете
 */
export async function getTicketInfo(ticketId) {
  const endpoint = '/tickets/info'
  return apiRequest(endpoint, { ticketId })
}

/**
 * Получение статуса билета (мониторинг)
 * @param {string} ticketId - ID билета
 * @returns {Promise<Object>} - статус билета и сегментов
 */
export async function getTicketStatus(ticketId) {
  // В разработке возвращаем mock данные
  if (USE_MOCK_DATA) {
    console.log('🔧 Using mock data for ticket status:', ticketId)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_DATA.ticketStatus)
      }, 500) // Имитация задержки сети
    })
  }

  const endpoint = '/tickets/status'
  return apiRequest(endpoint, { ticketId })
}

/**
 * Получение реального времени для сегментов маршрута
 * @param {string} ticketId - ID билета
 * @returns {Promise<Object>} - актуальная информация о времени
 */
export async function getRealTimeUpdates(ticketId) {
  const endpoint = '/tickets/realtime'
  return apiRequest(endpoint, { ticketId })
}

/**
 * Получение вариантов маршрута по типу
 * @param {Object} searchParams - параметры поиска
 * @param {string} searchParams.from - город отправления
 * @param {string} searchParams.to - город назначения
 * @param {string} searchParams.departure_date - дата отправления
 * @param {number} searchParams.passengers - количество пассажиров
 * @param {string} searchParams.routeType - тип маршрута ('optimal', 'cheapest', 'fastest')
 * @returns {Promise<Object>} - отфильтрованные маршруты
 */
export async function getRoutesByType(searchParams, routeType) {
  // В разработке возвращаем mock данные
  if (USE_MOCK_DATA) {
    console.log('🔧 Using mock data for route type:', routeType, searchParams)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const mockData = MOCK_DATA.routes[routeType]
          if (mockData) {
            resolve(mockData)
          } else {
            reject(new Error('Unknown route type: ' + routeType))
          }
        } catch (error) {
          reject(error)
        }
      }, 800) // Имитация задержки сети
    })
  }

  const endpoint = '/routes/search'
  const data = {
    ...searchParams,
    route_type: routeType,
  }
  return apiRequest(endpoint, data)
}

/**
 * Утилиты для форматирования данных
 */
export const formatters = {
  /**
   * Форматирует длительность из наносекунд в читаемый формат
   * @param {number} nanoseconds - длительность в наносекундах
   * @returns {string} - отформатированная длительность
   */
  formatDuration(nanoseconds) {
    if (!nanoseconds || nanoseconds < 0) return 'Неизвестно'

    const hours = Math.floor(nanoseconds / 3600000000000)
    const minutes = Math.floor((nanoseconds % 3600000000000) / 60000000000)

    if (hours === 0) {
      return `${minutes}мин`
    }
    if (minutes === 0) {
      return `${hours}ч`
    }
    return `${hours}ч ${minutes}мин`
  },

  /**
   * Форматирует цену с разделителями
   * @param {number} price - цена
   * @returns {string} - отформатированная цена
   */
  formatPrice(price) {
    if (!price && price !== 0) return 'Неизвестно'
    return `${price.toLocaleString('ru-RU')}₽`
  },

  /**
   * Форматирует дату и время
   * @param {string} isoString - ISO строка времени
   * @returns {string} - отформатированная дата и время
   */
  formatDateTime(isoString) {
    if (!isoString) return 'Неизвестно'

    try {
      const date = new Date(isoString)
      return date.toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    } catch (error) {
      return isoString
    }
  },

  /**
   * Получает иконку для типа транспорта
   * @param {string} transportType - тип транспорта
   * @returns {string} - эмодзи иконка
   */
  getTransportIcon(transportType) {
    const icons = {
      air: '✈️',
      bus: '🚌',
      rail: '🚂',
      river: '⛴️',
      taxi: '🚕',
      ferry: '⛴️',
    }
    return icons[transportType] || '🚗'
  },

  /**
   * Форматирует сегменты маршрута
   * @param {Array} segments - массив сегментов
   * @returns {string} - форматированное описание сегментов
   */
  formatRouteSegments(segments) {
    if (!segments || !Array.isArray(segments)) return 'Неизвестно'

    return segments
      .map(
        (segment) =>
          `${formatters.getTransportIcon(segment.transport_type)} ${segment.from} → ${
            segment.to
          } (${segment.provider})`
      )
      .join('\n')
  },
}

/**
 * Константы для типов маршрутов
 */
export const ROUTE_TYPES = {
  OPTIMAL: 'optimal', // Оптимальный маршрут
  CHEAPEST: 'cheapest', // Самый дешевый
  FASTEST: 'fastest', // Самый быстрый
  MULTIMODAL: 'multimodal', // Мультимодальный маршрут
}

/**
 * Константы для статусов билета
 */
export const TICKET_STATUSES = {
  BOOKED: 'booked', // Забронирован
  CONFIRMED: 'confirmed', // Подтвержден
  IN_TRANSIT: 'in_transit', // В пути
  COMPLETED: 'completed', // Завершен
  CANCELLED: 'cancelled', // Отменен
  DELAYED: 'delayed', // Задержан
}

// Экспорт по умолчанию для удобства использования
export default {
  searchRoutes,
  getRouteDetails,
  bookRoute,
  getTicketInfo,
  getTicketStatus,
  getRealTimeUpdates,
  getRoutesByType,
  formatters,
  ROUTE_TYPES,
  TICKET_STATUSES,
}
