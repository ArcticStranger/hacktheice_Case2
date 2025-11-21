<template>
  <div class="ticket-monitoring-container">
    <!-- Шапка с кнопкой "Назад" и навигацией -->
    <div class="monitoring-header">
      <button class="back-button" @click="goBack">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Назад
      </button>

      <h1 class="header-title">Мониторинг билета</h1>

      <div class="header-spacer"></div>
    </div>

    <!-- Основной контент -->
    <div class="monitoring-content">
      <!-- Информация о билете -->
      <div v-if="ticketInfo" class="ticket-info-card">
        <div class="ticket-header">
          <div class="ticket-route">
            <span class="route-from">{{ ticketInfo.from_city }}</span>
            <div class="route-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="route-to">{{ ticketInfo.to_city }}</span>
          </div>
          <div class="ticket-status" :class="`status-${ticketInfo.status}`">
            {{ getStatusText(ticketInfo.status) }}
          </div>
        </div>

        <div class="ticket-details">
          <div class="detail-item">
            <span class="detail-label">Дата отправления:</span>
            <span class="detail-value">{{ formatDate(ticketInfo.departure_date) }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Общая стоимость:</span>
            <span class="detail-value price">{{ formatPrice(ticketInfo.total_price) }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Время в пути:</span>
            <span class="detail-value">{{ formatDuration(ticketInfo.total_duration) }}</span>
          </div>
        </div>
      </div>

      <!-- Выбор типа маршрута -->
      <div class="route-type-selector">
        <h2 class="section-title">Тип маршрута</h2>
        <div class="type-buttons">
          <button
            v-for="type in routeTypes"
            :key="type.value"
            class="type-button"
            :class="{ active: selectedRouteType === type.value }"
            @click="selectRouteType(type.value)"
          >
            <div class="type-icon">{{ type.icon }}</div>
            <div class="type-content">
              <span class="type-title">{{ type.title }}</span>
              <span class="type-desc">{{ type.description }}</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Загрузка -->
      <div v-if="loading" class="loading-state">
        <div class="loading-spinner"></div>
        <p>Загрузка маршрута...</p>
      </div>

      <!-- Ошибка -->
      <div v-if="error" class="error-state">
        <div class="error-icon">⚠️</div>
        <p class="error-message">{{ error }}</p>
        <button class="retry-button" @click="retryLoad">Попробовать снова</button>
      </div>

      <!-- Детальная информация о маршруте -->
      <div v-if="selectedRoute && !loading" class="route-details-card">
        <h2 class="section-title">Детали маршрута</h2>

        <!-- Сегменты маршрута -->
        <div class="route-segments">
          <div
            v-for="(segment, index) in selectedRoute.segments"
            :key="index"
            class="segment-card"
            :class="`segment-${segment.transport_type}`"
          >
            <div class="segment-header">
              <div class="segment-icon">
                {{ getTransportIcon(segment.transport_type) }}
              </div>
              <div class="segment-info">
                <span class="segment-type">{{ getTransportName(segment.transport_type) }}</span>
                <span class="segment-provider">{{ segment.provider }}</span>
              </div>
              <div class="segment-duration">
                {{ formatDuration(segment.duration) }}
              </div>
            </div>

            <div class="segment-route">
              <div class="route-point">
                <span class="point-time">{{ formatTime(segment.departure_time) }}</span>
                <span class="point-name">{{ segment.from }}</span>
              </div>

              <div class="route-line">
                <div class="line"></div>
              </div>

              <div class="route-point">
                <span class="point-time">{{ formatTime(segment.arrival_time) }}</span>
                <span class="point-name">{{ segment.to }}</span>
              </div>
            </div>

            <div class="segment-price">
              {{ formatPrice(segment.price) }}
            </div>
          </div>
        </div>

        <!-- Общая информация -->
        <div class="route-summary">
          <div class="summary-item">
            <span class="summary-label">Общее время:</span>
            <span class="summary-value">{{ formatDuration(selectedRoute.total_duration) }}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Количество сегментов:</span>
            <span class="summary-value">{{ selectedRoute.segments?.length || 0 }}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Итоговая стоимость:</span>
            <span class="summary-value price">{{ formatPrice(selectedRoute.total_price) }}</span>
          </div>
        </div>
      </div>

      <!-- Кнопка обновления статуса -->
      <div v-if="ticketInfo && !loading" class="update-section">
        <button class="update-button" @click="updateStatus">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
              stroke="currentColor"
              stroke-width="2"
            />
            <path
              d="M12 7V12L15 15"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Обновить статус
        </button>
      </div>
    </div>

    <!-- Нижняя навигация -->
    <div class="bottom-navigation">
      <button class="nav-button active">
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
          <path
            d="M10 2C8.89543 2 8 2.89543 8 4C8 5.10457 8.89543 6 10 6C11.1046 6 12 5.10457 12 4C12 2.89543 11.1046 2 10 2ZM6 8C3.79086 8 2 9.79086 2 12V18C2 20.2091 3.79086 22 6 22H14C16.2091 22 18 20.2091 18 18V12C18 9.79086 16.2091 8 14 8H12V6H8V8H6Z"
            fill="#2563EB"
          />
        </svg>
        <span style="color: #2563eb">Мониторинг</span>
      </button>

      <router-link to="/" class="nav-button">
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
          <path d="M10 0L0 8H4V20H12V8H16L10 0ZM6 10V18L2 14H6V10Z" fill="#9CA3AF" />
        </svg>
        <span style="color: #9ca3af">Главная</span>
      </router-link>

      <button class="nav-button" @click="showTickets">
        <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
          <path
            d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0ZM8 5H10V13H8V5ZM6 9H12V11H6V9Z"
            fill="#9CA3AF"
          />
        </svg>
        <span style="color: #9ca3af">Билеты</span>
      </button>

      <button class="nav-button">
        <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
          <path
            d="M8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0ZM6 10H10V12H6V10ZM6 14H10V16H6V14Z"
            fill="#9CA3AF"
          />
        </svg>
        <span style="color: #9ca3af">Профиль</span>
      </button>
    </div>
  </div>
</template>

<script>
import {
  getTicketStatus,
  getRoutesByType,
  formatters,
  ROUTE_TYPES,
  TICKET_STATUSES,
} from '../../../api/ticketMonitoring.js'

export default {
  name: 'TicketMonitoring',
  data() {
    return {
      ticketId: null,
      ticketInfo: null,
      selectedRoute: null,
      selectedRouteType: ROUTE_TYPES.OPTIMAL,
      loading: false,
      error: null,
      routeTypes: [
        {
          value: ROUTE_TYPES.OPTIMAL,
          title: 'Оптимальный',
          description: 'Лучшее соотношение цены и времени',
          icon: '⚖️',
        },
        {
          value: ROUTE_TYPES.CHEAPEST,
          title: 'Дешевый',
          description: 'Минимальная стоимость',
          icon: '💰',
        },
        {
          value: ROUTE_TYPES.FASTEST,
          title: 'Быстрый',
          description: 'Минимальное время в пути',
          icon: '⚡',
        },
      ],
    }
  },
  async mounted() {
    // Получаем ID билета из URL параметров или локального хранилища
    this.ticketId = this.$route.query.ticketId || localStorage.getItem('currentTicketId')

    if (!this.ticketId) {
      this.error = 'ID билета не найден'
      return
    }

    await this.loadTicketInfo()
  },
  methods: {
    async loadTicketInfo() {
      this.loading = true
      this.error = null

      try {
        // Получаем информацию о билете
        const ticketStatus = await getTicketStatus(this.ticketId)
        this.ticketInfo = ticketStatus.ticket

        // Загружаем выбранный тип маршрута
        await this.loadRouteByType()
      } catch (error) {
        this.error = 'Не удалось загрузить информацию о билете'
        console.error('Error loading ticket info:', error)
      } finally {
        this.loading = false
      }
    },

    async loadRouteByType() {
      if (!this.ticketInfo) return

      try {
        const searchParams = {
          from: this.ticketInfo.from_city,
          to: this.ticketInfo.to_city,
          departure_date: this.ticketInfo.departure_date,
          passengers: this.ticketInfo.passengers || 1,
        }

        const routeData = await getRoutesByType(searchParams, this.selectedRouteType)

        // Берем первый маршрут из результатов
        if (routeData.routes && routeData.routes.length > 0) {
          this.selectedRoute = routeData.routes[0]
        } else {
          this.selectedRoute = null
        }
      } catch (error) {
        console.error('Error loading route:', error)
        this.error = 'Не удалось загрузить информацию о маршруте'
      }
    },

    async selectRouteType(type) {
      this.selectedRouteType = type
      await this.loadRouteByType()
    },

    async updateStatus() {
      await this.loadTicketInfo()
    },

    async retryLoad() {
      await this.loadTicketInfo()
    },

    goBack() {
      this.$router.go(-1)
    },

    showTickets() {
      this.$router.push('/tickets')
    },

    // Методы форматирования
    formatPrice(price) {
      return formatters.formatPrice(price)
    },

    formatDuration(duration) {
      return formatters.formatDuration(duration)
    },

    formatDate(dateString) {
      if (!dateString) return 'Неизвестно'
      try {
        const date = new Date(dateString)
        return date.toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
      } catch (error) {
        return dateString
      }
    },

    formatTime(timeString) {
      if (!timeString) return '--:--'
      try {
        const time = new Date(timeString)
        return time.toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
        })
      } catch (error) {
        return timeString
      }
    },

    getTransportIcon(transportType) {
      return formatters.getTransportIcon(transportType)
    },

    getTransportName(transportType) {
      const names = {
        air: 'Авиарейс',
        bus: 'Автобус',
        rail: 'Поезд',
        river: 'Речной транспорт',
        taxi: 'Такси',
        ferry: 'Паром',
      }
      return names[transportType] || 'Транспорт'
    },

    getStatusText(status) {
      const statusTexts = {
        [TICKET_STATUSES.BOOKED]: 'Забронирован',
        [TICKET_STATUSES.CONFIRMED]: 'Подтвержден',
        [TICKET_STATUSES.IN_TRANSIT]: 'В пути',
        [TICKET_STATUSES.COMPLETED]: 'Завершен',
        [TICKET_STATUSES.CANCELLED]: 'Отменен',
        [TICKET_STATUSES.DELAYED]: 'Задержан',
      }
      return statusTexts[status] || 'Неизвестно'
    },
  },
}
</script>

<style scoped>
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

/* Reset and base styles */
* {
  box-sizing: border-box;
}

.ticket-monitoring-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 35%, #e2e8f0 70%, #cbd5e1 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
  position: relative;
}

.ticket-monitoring-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
  z-index: -1;
}

/* Header */
.monitoring-header {
  background: white;
  padding: 0.75rem 1.25rem; /* Уменьшено для MacBook Air */
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(37, 99, 235, 0.1);
  border: none;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  color: #2563eb;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.back-button:hover {
  background: rgba(37, 99, 235, 0.2);
  transform: translateY(-1px);
}

.header-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.header-spacer {
  width: 80px;
}

/* Content */
.monitoring-content {
  flex: 1;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 500px; /* Уменьшено для MacBook Air 13.6 */
  margin: 0 auto;
  width: 100%;
}

/* Cards */
.ticket-info-card,
.route-details-card {
  background: white;
  border-radius: 16px; /* Уменьшено для компактности */
  padding: 1.25rem; /* Уменьшено для MacBook Air */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.9);
}

/* Ticket Info */
.ticket-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.ticket-route {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f2937;
}

.route-from,
.route-to {
  color: #1f2937;
}

.route-arrow {
  color: #2563eb;
}

.ticket-status {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-booked {
  background: rgba(59, 130, 246, 0.1);
  color: #2563eb;
}

.status-confirmed {
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
}

.status-in_transit {
  background: rgba(245, 158, 11, 0.1);
  color: #d97706;
}

.status-completed {
  background: rgba(107, 114, 128, 0.1);
  color: #6b7280;
}

.status-cancelled {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

.status-delayed {
  background: rgba(245, 158, 11, 0.1);
  color: #d97706;
}

.ticket-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-label {
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 500;
}

.detail-value {
  font-size: 0.9rem;
  color: #1f2937;
  font-weight: 600;
}

.detail-value.price {
  color: #2563eb;
  font-weight: 700;
}

/* Route Type Selector */
.route-type-selector {
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.section-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 1rem;
}

.type-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.type-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  font-family: inherit;
}

.type-button:hover {
  border-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
}

.type-button.active {
  border-color: #2563eb;
  background: rgba(37, 99, 235, 0.05);
}

.type-icon {
  font-size: 1.5rem;
  width: 2.5rem;
  text-align: center;
}

.type-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.type-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1f2937;
}

.type-desc {
  font-size: 0.8rem;
  color: #6b7280;
}

/* Loading and Error States */
.loading-state,
.error-state {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f4f6;
  border-top: 4px solid #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.error-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.error-message {
  color: #6b7280;
  margin-bottom: 1rem;
}

.retry-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.retry-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

/* Route Segments */
.route-segments {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
}

.segment-card {
  background: white;
  border-radius: 12px; /* Уменьшено для MacBook Air */
  padding: 1rem; /* Компактнее */
  border-left: 4px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.segment-air {
  border-left-color: #2563eb;
  background: rgba(37, 99, 235, 0.02);
}

.segment-bus {
  border-left-color: #059669;
  background: rgba(5, 150, 105, 0.02);
}

.segment-rail {
  border-left-color: #7c3aed;
  background: rgba(124, 58, 237, 0.02);
}

.segment-river {
  border-left-color: #0ea5e9;
  background: rgba(14, 165, 233, 0.02);
}

.segment-header {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Уменьшено для компактности */
  margin-bottom: 0.75rem;
}

.segment-icon {
  font-size: 1rem; /* Уменьшено */
  width: 1.75rem;
  text-align: center;
}

.segment-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.125rem; /* Уменьшено */
}

.segment-type {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1f2937;
}

.segment-provider {
  font-size: 0.8rem;
  color: #6b7280;
}

.segment-duration {
  font-size: 0.8rem;
  color: #6b7280;
  background: #f3f4f6;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
}

.segment-route {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.route-point {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  min-width: 80px;
}

.point-time {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1f2937;
}

.point-name {
  font-size: 0.8rem;
  color: #6b7280;
  text-align: center;
}

.route-line {
  flex: 1;
  display: flex;
  align-items: center;
}

.line {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  border-radius: 1px;
}

.segment-price {
  font-size: 0.9rem;
  font-weight: 700;
  color: #2563eb;
  text-align: right;
}

/* Route Summary */
.route-summary {
  background: #f8fafc;
  border-radius: 12px;
  padding: 1rem;
  margin-top: 1rem;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.summary-item:last-child {
  border-bottom: none;
}

.summary-label {
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 500;
}

.summary-value {
  font-size: 0.9rem;
  color: #1f2937;
  font-weight: 600;
}

.summary-value.price {
  color: #2563eb;
  font-weight: 700;
}

/* Update Section */
.update-section {
  text-align: center;
}

.update-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: 2px solid #2563eb;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  color: #2563eb;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.update-button:hover {
  background: #2563eb;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
}

/* Bottom Navigation */
.bottom-navigation {
  background: white;
  border-top: 1px solid #f3f4f6;
  padding: 0.5rem 1rem; /* Уменьшено для MacBook Air */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.25rem; /* Уменьшено */
}

.nav-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.nav-button:hover {
  background: rgba(37, 99, 235, 0.1);
}

.nav-button.active {
  background: rgba(37, 99, 235, 0.1);
}

.nav-button span {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1;
}

/* Desktop responsive styles */
@media (min-width: 768px) {
  .monitoring-content {
    padding: 2rem;
    gap: 2rem;
    max-width: 600px; /* Увеличено для десктопа */
  }

  .type-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .segment-route {
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .monitoring-content {
    padding: 2.5rem;
    gap: 2.5rem;
    max-width: 700px;
  }

  .type-buttons {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Mobile specific adjustments */
@media (max-width: 480px) {
  .monitoring-header {
    padding: 0.75rem 1rem;
  }

  .monitoring-content {
    padding: 1rem;
    gap: 1rem;
  }

  .ticket-info-card,
  .route-details-card,
  .route-type-selector {
    padding: 1rem;
  }

  .header-title {
    font-size: 1.1rem;
  }

  .back-button {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
  }
}
</style>
