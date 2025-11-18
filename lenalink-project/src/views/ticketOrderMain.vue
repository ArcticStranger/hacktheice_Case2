<template>
  <div class="ticket-order-container">
    <div class="ticket-order-card">
      <div class="ticket-order-header">
        <router-link to="/" class="back-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="white" />
          </svg>
        </router-link>

        <div class="user-profile">
          <div class="user-avatar">
            <img src="../images/mainlogo.png" alt="Profile" class="user-avatar-img" />
          </div>
          <div class="user-info">
            <span class="user-greeting">Добро пожаловать!</span>
            <span class="user-name">Анна Иванова</span>
          </div>
        </div>
      </div>

      <div class="main-content">
        <div class="search-intro">
          <h1 class="search-title">Добро пожаловать! 🌊</h1>
          <p class="search-subtitle">
            Давайте найдём для вас идеальный путь. Просто скажите, куда хотите отправиться!
          </p>
        </div>

        <div class="search-card">
          <div class="search-fields">
            <div class="input-group">
              <input
                v-model="searchForm.from"
                type="text"
                placeholder="Укажите город отправления"
                class="search-input"
              />
              <div class="input-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                    fill="#6B7280"
                  />
                </svg>
              </div>
            </div>

            <button class="swap-btn">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 7H11V5L16 10L11 15V13H7V11H11V9L16 4L11 -1V1H7V3H3V7H7ZM17 17H13V19L8 14L13 9V11H17V13H13V15L8 20L13 25V21H17V19H21V15H17V17Z"
                  fill="#6B7280"
                />
              </svg>
            </button>

            <div class="input-group">
              <input
                v-model="searchForm.to"
                type="text"
                placeholder="Укажите город назначения"
                class="search-input"
              />
              <div class="input-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                    fill="#6B7280"
                  />
                </svg>
              </div>
            </div>

            <div class="date-passenger-group">
              <div class="input-group">
                <input
                  v-model="searchForm.date"
                  type="text"
                  placeholder="Дата поездки"
                  class="search-input-small"
                />
                <div class="input-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3ZM19 19H5V8H19V19ZM7 10H17V12H7V10Z"
                      fill="#6B7280"
                    />
                  </svg>
                </div>
              </div>

              <div class="input-group">
                <input
                  v-model="searchForm.passengers"
                  type="text"
                  placeholder="Количество пассажиров"
                  class="search-input-small"
                />
                <div class="input-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM16 14C18.67 14 29 15.34 29 18V20H3V18C3 15.34 13.33 14 16 14ZM8 8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8C12 9.1 11.1 10 10 10C8.9 10 8 9.1 8 8ZM14 8C14 6.9 14.9 6 16 6C17.1 6 18 6.9 18 8C18 9.1 17.1 10 16 10C14.9 10 14 9.1 14 8Z"
                      fill="#6B7280"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <button class="search-button">Найти лучшие варианты путешествия</button>
        </div>

        <div class="transport-types">
          <h2 class="section-title">Доступные виды транспорта</h2>
          <p class="transport-description">
            Мы работаем с проверенными партнёрами, чтобы предложить вам самые удобные варианты
            передвижения
          </p>
          <div class="transport-grid">
            <div class="transport-card">
              <div
                class="transport-icon"
                style="background: linear-gradient(135deg, #ebf8ff, #dbeafe)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <span class="transport-name">Самолёт</span>
              <span class="transport-desc">Быстро и комфортно</span>
            </div>

            <div class="transport-card">
              <div
                class="transport-icon"
                style="background: linear-gradient(135deg, #faf5ff, #f3e8ff)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C12 1.45 12.45 1 13 1H14C14.55 1 15 1.45 15 2V3H16V5H15V7H14V8H15V10H14V12H15V14H14V16H15V18H14C14.55 18 15 18.45 15 19V20H13C12.45 20 12 19.55 12 19V18H10V16H9V14H10V12H9V10H10V8H9V7H10V5H9V3H10V2C10 1.45 10.45 1 11 1H12C12.55 1 13 1.45 13 2V3H12V2Z"
                    fill="#8B5CF6"
                  />
                </svg>
              </div>
              <span class="transport-name">Поезд</span>
              <span class="transport-desc">Надёжность и комфорт</span>
            </div>

            <div class="transport-card">
              <div
                class="transport-icon"
                style="background: linear-gradient(135deg, #f0fdfa, #ccfbf1)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 16V6C4 4.9 4.9 4 6 4H7V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H18C19.1 4 20 4.9 20 6V16C20 17.1 19.1 18 18 18H17V20H15V18H9V20H7V18H6C4.9 18 4 17.1 4 16ZM6 6H18V14H6V6ZM6 16V16H18V16H6ZM9 8H11V10H9V8ZM13 8H15V10H13V8ZM9 12H11V14H9V12ZM13 12H15V14H13V12Z"
                    fill="#14B8A6"
                  />
                </svg>
              </div>
              <span class="transport-name">Автобус</span>
              <span class="transport-desc">Экономично и удобно</span>
            </div>

            <div class="transport-card">
              <div
                class="transport-icon"
                style="background: linear-gradient(135deg, #ecfdf5, #d1fae5)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2 15L12 11L22 15V19C22 19.55 21.55 20 21 20H3C2.45 20 2 19.55 2 19V15ZM12 11L22 7V10H2V7L12 11Z"
                    fill="#10B981"
                  />
                </svg>
              </div>
              <span class="transport-name">Речной транспорт</span>
              <span class="transport-desc">Романтика моря</span>
            </div>
          </div>
        </div>

        <div class="recent-routes">
          <h2 class="section-title">Ваши последние поездки</h2>
          <p class="route-description">
            Вспомним ваши прошлые маршруты - возможно, они вдохновят на новое путешествие?
          </p>
          <div class="route-card">
            <div class="route-path">
              <span class="route-city">Москва</span>
              <div class="route-path-details">
                <svg width="16" height="12" viewBox="0 0 24 24" fill="none" class="route-arrow">
                  <path
                    d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                    fill="#F59E0B"
                  />
                </svg>
              </div>
              <span class="route-city">Владивосток</span>
            </div>
            <div class="route-info">
              <div class="route-segments">
                <span class="segment-tag">2 пересадки</span>
                <span class="segment-tag">Мультимодальный</span>
              </div>
              <div class="route-details">
                <span class="route-detail">5 декабря 2025</span>
                <span class="route-detail">2 дня в пути</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-navigation">
        <router-link to="/" class="nav-button active">
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <path d="M10 0L0 8H4V20H12V8H16L10 0ZM6 10V18L2 14H6V10Z" fill="#2563EB" />
          </svg>
          <span>Главная</span>
        </router-link>

        <button class="nav-button">
          <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
            <path
              d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0ZM8 5H10V13H8V5ZM6 9H12V11H6V9Z"
              fill="#9CA3AF"
            />
          </svg>
          <span>Поиск</span>
        </button>

        <button class="nav-button">
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <path
              d="M10 2C8.89543 2 8 2.89543 8 4C8 5.10457 8.89543 6 10 6C11.1046 6 12 5.10457 12 4C12 2.89543 11.1046 2 10 2ZM6 8C3.79086 8 2 9.79086 2 12V18C2 20.2091 3.79086 22 6 22H14C16.2091 22 18 20.2091 18 18V12C18 9.79086 16.2091 8 14 8H12V6H8V8H6Z"
              fill="#9CA3AF"
            />
          </svg>
          <span>Билеты</span>
        </button>

        <button class="nav-button">
          <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
            <path
              d="M8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0ZM6 10H10V12H6V10ZM6 14H10V16H6V14Z"
              fill="#9CA3AF"
            />
          </svg>
          <span>Профиль</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketOrderMain',
  data() {
    return {
      userName: 'Анна Иванова',
      searchForm: {
        from: '',
        to: '',
        date: '',
        passengers: '',
      },
    }
  },
  methods: {
    swapLocations() {
      const temp = this.searchForm.from
      this.searchForm.from = this.searchForm.to
      this.searchForm.to = temp
    },
    searchRoutes() {
      console.log('Поиск маршрутов:', this.searchForm)
    },
  },
}
</script>

<style scoped>
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Reset and base styles */
* {
  box-sizing: border-box;
}

.ticket-order-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 35%, #e2e8f0 70%, #cbd5e1 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
  padding: 1rem;
  position: relative;
}

.ticket-order-container::before {
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

.ticket-order-card {
  background: white;
  border-radius: 28px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 520px;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.ticket-order-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 260px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  z-index: -1;
}

.ticket-order-card:hover {
  box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.15), 0 12px 20px -6px rgba(0, 0, 0, 0.1);
}

.ticket-order-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  padding: 2.5rem 1.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: relative;
  height: 260px;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 20px;
  padding: 0.5rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateX(-2px);
}

.back-button svg {
  flex-shrink: 0;
}

.ticket-order-header::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 35px;
  background: white;
  border-radius: 35px 35px 0 0;
  z-index: 1;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  flex-shrink: 0;
}

.user-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-greeting {
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.user-name {
  font-size: 1.1rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.notifications-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.notifications-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.main-content {
  flex: 1;
  padding: 0 1.25rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.search-intro {
  text-align: center;
  margin-top: 1.5rem;
}

.search-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.75rem;
  line-height: 1.2;
  text-shadow: none;
}

.search-subtitle {
  font-size: 1.1rem;
  color: #2d3748;
  margin: 0;
  line-height: 1.5;
  max-width: 300px;
  text-shadow: none;
}

.search-card {
  background: white;
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.9);
  margin: 0 1rem;
  z-index: 2;
}

.search-fields {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-group {
  position: relative;
  width: 100%;
}

.search-input,
.search-input-small {
  width: 100%;
  height: 52px;
  padding: 0.875rem 0.875rem 0.875rem 3.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  background: #f9fafb;
  color: #374151;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.3s ease;
  font-family: inherit;
}

.search-input:focus,
.search-input-small:focus {
  background: white;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.search-input::placeholder,
.search-input-small::placeholder {
  color: #9ca3af;
  font-weight: 400;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #9ca3af;
}

.swap-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: 2px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.swap-btn:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
  transform: translate(-50%, -50%) scale(1.05);
}

.date-passenger-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.search-button {
  height: 64px;
  border: none;
  border-radius: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  font-family: inherit;
}

.search-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.5);
}

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.75rem;
}

.transport-description {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0 0 1.25rem;
}

.transport-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.transport-card {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  border: 1px solid #f3f4f6;
}

.transport-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.transport-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.transport-name {
  font-size: 0.95rem;
  color: #374151;
  font-weight: 600;
  text-align: center;
}

.transport-desc {
  font-size: 0.75rem;
  color: #6b7280;
  text-align: center;
}

.recent-routes {
  flex: 1;
}

.route-card {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #f3f4f6;
}

.route-description {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0 0 1rem;
}

.route-path {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.route-city {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f2937;
}

.route-path-details {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 1px;
  position: relative;
}

.route-path-details::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: #667eea;
  border-radius: 50%;
  box-shadow: 0 0 0 2px white;
}

.route-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.route-segments {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.segment-tag {
  background: #ebf8ff;
  color: #1e40af;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.route-details {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.route-detail {
  font-size: 0.85rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.bottom-navigation {
  background: white;
  border-top: 1px solid #f3f4f6;
  padding: 0.75rem 1.25rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
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

.nav-button.active span {
  color: #2563eb;
  font-weight: 500;
}

.nav-button span {
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 400;
  line-height: 1;
}

.nav-button.active span {
  color: #2563eb;
}

/* Desktop responsive styles */
@media (min-width: 768px) {
  .ticket-order-container {
    padding: 2rem;
  }

  .ticket-order-card {
    max-width: 600px;
  }

  .search-title {
    font-size: 1.75rem;
  }

  .search-subtitle {
    font-size: 1rem;
  }

  .transport-grid {
    gap: 1rem;
  }

  .transport-card {
    padding: 1.25rem;
  }

  .transport-icon {
    width: 56px;
    height: 56px;
  }

  .main-content {
    gap: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .ticket-order-card {
    max-width: 700px;
  }

  .ticket-order-header {
    padding: 3.5rem 2rem 0;
    height: 360px;
  }

  .ticket-order-header::after {
    height: 45px;
    border-radius: 45px 45px 0 0;
  }

  .main-content {
    padding: 0 2rem 2.5rem;
    gap: 3rem;
  }

  .search-card {
    padding: 1.5rem;
  }
}

/* Mobile specific adjustments */
@media (max-width: 480px) {
  .ticket-order-container {
    padding: 0.5rem;
  }

  .ticket-order-card {
    max-width: 100%;
    border-radius: 16px;
  }

  .ticket-order-header {
    padding: 1.5rem 1rem 0;
  }

  .main-content {
    padding: 0 1rem 1.5rem;
    gap: 1.5rem;
  }

  .transport-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .transport-card {
    padding: 0.75rem;
  }

  .transport-icon {
    width: 40px;
    height: 40px;
  }

  .search-button {
    height: 48px;
    font-size: 0.875rem;
  }
}

/* High DPI displays (Mac Retina) */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .transport-card,
  .route-card {
    border-width: 0.5px;
  }

  .search-input,
  .search-input-small {
    border-width: 0.5px;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .ticket-order-card,
  .transport-card,
  .route-card,
  .nav-button,
  .search-button,
  .swap-btn {
    transition: none;
  }

  .search-button:hover,
  .transport-card:hover {
    transform: none;
  }
}
</style>
