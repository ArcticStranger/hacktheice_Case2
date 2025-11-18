<template>
  <div class="mainmenu-container">
    <div class="mainmenu-card">
      <div class="mainmenu-header">
        <div class="header-top">
          <div class="app-logo">
            <img src="../images/mainlogo.png" alt="Logo" class="logo-img" />
            <span class="app-name">MagnaTrip</span>
          </div>
          <router-link to="/register" class="register-btn"> Регистрация </router-link>
        </div>

        <div class="welcome-section">
          <h1 class="welcome-title">Добро пожаловать! 👋</h1>
          <p class="welcome-subtitle">
            Планируйте мультимодальные путешествия с удобным поиском маршрутов
          </p>
        </div>
      </div>

      <div class="main-content">
        <div class="feature-section">
          <h2 class="section-title">🚆 Что мы предлагаем</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div
                class="feature-icon"
                style="background: linear-gradient(135deg, #ebf8ff, #dbeafe)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <h3 class="feature-title">Мультимодальность</h3>
              <p class="feature-desc">Комбинируйте различные виды транспорта в одном маршруте</p>
            </div>

            <div class="feature-card">
              <div
                class="feature-icon"
                style="background: linear-gradient(135deg, #faf5ff, #f3e8ff)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7V10C2 16 6 20 12 22C18 20 22 16 22 10V7L12 2ZM7 11L11 9V7L7 9V11ZM13 9V7L17 9V11L13 9ZM5 13L9 11V13L5 15V13ZM11 13L15 11V15L11 13Z"
                    fill="#8B5CF6"
                  />
                </svg>
              </div>
              <h3 class="feature-title">Единый билет</h3>
              <p class="feature-desc">Оплачивайте весь маршрут одним платежом</p>
            </div>

            <div class="feature-card">
              <div
                class="feature-icon"
                style="background: linear-gradient(135deg, #f0fdfa, #ccfbf1)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0ZM8 5H10V13H8V5ZM6 9H12V11H6V9Z"
                    fill="#14B8A6"
                  />
                </svg>
              </div>
              <h3 class="feature-title">Умный поиск</h3>
              <p class="feature-desc">Алгоритм находит лучшие варианты путешествий</p>
            </div>

            <div class="feature-card">
              <div
                class="feature-icon"
                style="background: linear-gradient(135deg, #ecfdf5, #d1fae5)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                    fill="#10B981"
                  />
                </svg>
              </div>
              <h3 class="feature-title">Онлайн поддержка</h3>
              <p class="feature-desc">Помощь на всех этапах путешествия</p>
            </div>
          </div>
        </div>

        <div class="ticket-order-section">
          <div class="ticket-order-card">
            <h3 class="ticket-order-title">🎫 Заказать маршрут</h3>
            <p class="ticket-order-description">
              Найдите и забронируйте лучшие мультимодальные маршруты с единым билетом
            </p>
            <router-link to="/ticket-order" class="order-button">
              ✈️ Начать поиск маршрутов
            </router-link>
          </div>
        </div>

        <div class="example-route-section">
          <h2 class="section-title">🗺️ Пример маршрута</h2>
          <div class="route-card">
            <div class="route-header">
              <span class="route-title">Москва → Тверь → Санкт-Петербург</span>
              <span class="route-time">Общее время: 7ч 30мин</span>
            </div>

            <div class="route-segments">
              <div class="segment">
                <div class="segment-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
                      fill="#3B82F6"
                    />
                  </svg>
                </div>
                <div class="segment-info">
                  <div class="segment-route">Москва → Тверь</div>
                  <div class="segment-details">Самолёт • 1ч 15мин</div>
                </div>
              </div>

              <div class="segment">
                <div class="segment-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7V10C2 16 6 20 12 22C18 20 22 16 22 10V7L12 2ZM7 11L11 9V7L7 9V11ZM13 9V7L17 9V11L13 9ZM5 13L9 11V13L5 15V13ZM11 13L15 11V15L11 13Z"
                      fill="#8B5CF6"
                    />
                  </svg>
                </div>
                <div class="segment-info">
                  <div class="segment-route">Тверь → Санкт-Петербург</div>
                  <div class="segment-details">Поезд • 4ч 30мин</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-navigation">
        <button class="nav-button active">
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <path d="M10 0L0 8H4V20H12V8H16L10 0ZM6 10V18L2 14H6V10Z" fill="#2563EB" />
          </svg>
          <span>Главная</span>
        </button>

        <router-link
          to="/ticket-order"
          class="nav-button"
          :class="{ active: $route.path === '/ticket-order' }"
        >
          <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
            <path
              d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0ZM8 5H10V13H8V5ZM6 9H12V11H6V9Z"
              :fill="$route.path === '/ticket-order' ? '#2563EB' : '#9CA3AF'"
            />
          </svg>
          <span :style="{ color: $route.path === '/ticket-order' ? '#2563EB' : '#9CA3AF' }">
            Поиск
          </span>
        </router-link>

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
  name: 'MainMenu',
  methods: {
    goToRegister() {
      this.$router.push('/register')
    },
    goToTicketOrder() {
      this.$router.push('/ticket-order')
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

.mainmenu-container {
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

.mainmenu-container::before {
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

.mainmenu-card {
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

.mainmenu-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 280px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  z-index: -1;
}

.mainmenu-card:hover {
  box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.15), 0 12px 20px -6px rgba(0, 0, 0, 0.1);
}

.mainmenu-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  padding: 2.5rem 1.25rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  position: relative;
  height: 280px;
}

.mainmenu-header::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 40px;
  background: white;
  border-radius: 40px 40px 0 0;
  z-index: 1;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.app-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-img {
  width: 36px;
  height: 36px;
  border-radius: 8px;
}

.app-name {
  font-size: 1.2rem;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.register-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 16px;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.register-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.welcome-section {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.welcome-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.75rem;
  line-height: 1.2;
  text-shadow: none;
}

.welcome-subtitle {
  font-size: 1rem;
  color: #2d3748;
  margin: 0;
  line-height: 1.5;
  max-width: 320px;
  text-shadow: none;
}

.main-content {
  flex: 1;
  padding: 0 1.25rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.feature-card {
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

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.feature-title {
  font-size: 0.95rem;
  color: #374151;
  font-weight: 600;
  text-align: center;
  margin: 0;
}

.feature-desc {
  font-size: 0.75rem;
  color: #6b7280;
  text-align: center;
  margin: 0;
  line-height: 1.4;
}

.ticket-order-section {
  margin-top: 1rem;
}

.ticket-order-card {
  background: white;
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.9);
  z-index: 2;
}

.ticket-order-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.ticket-order-description {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
}

.order-button {
  height: 56px;
  border: none;
  border-radius: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
}

.order-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.5);
}

.example-route-section {
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

.route-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.route-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
}

.route-time {
  font-size: 0.8rem;
  color: #6b7280;
  background: #f3f4f6;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
}

.route-segments {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.segment {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.segment-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.segment-info {
  flex: 1;
}

.segment-route {
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.25rem;
}

.segment-details {
  font-size: 0.8rem;
  color: #6b7280;
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
  color: #2563eb !important;
  font-weight: 500;
}

.nav-button span {
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 400;
  line-height: 1;
}

/* Active styles for router-link */
.nav-button.router-link-active {
  background: rgba(37, 99, 235, 0.1);
}

.nav-button.router-link-active span {
  color: #2563eb !important;
  font-weight: 500;
}

/* Desktop responsive styles */
@media (min-width: 768px) {
  .mainmenu-container {
    padding: 2rem;
  }

  .mainmenu-card {
    max-width: 600px;
  }

  .welcome-title {
    font-size: 2rem;
  }

  .welcome-subtitle {
    font-size: 1.1rem;
  }

  .features-grid {
    gap: 1.25rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .main-content {
    gap: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .mainmenu-card {
    max-width: 700px;
  }

  .mainmenu-header {
    padding: 3.5rem 2rem 0;
    height: 380px;
  }

  .mainmenu-header::after {
    height: 50px;
    border-radius: 50px 50px 0 0;
  }

  .main-content {
    padding: 0 2rem 2.5rem;
    gap: 3rem;
  }

  .ticket-order-card {
    padding: 2rem;
  }
}

/* Mobile specific adjustments */
@media (max-width: 480px) {
  .mainmenu-container {
    padding: 0.5rem;
  }

  .mainmenu-card {
    max-width: 100%;
    border-radius: 16px;
  }

  .mainmenu-header {
    padding: 1.5rem 1rem 0;
  }

  .main-content {
    padding: 0 1rem 1.5rem;
    gap: 1.5rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .feature-card {
    padding: 1rem;
  }

  .feature-icon {
    width: 50px;
    height: 50px;
  }

  .order-button {
    height: 48px;
    font-size: 0.875rem;
  }
}

/* High DPI displays (Mac Retina) */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .feature-card,
  .route-card,
  .ticket-order-card {
    border-width: 0.5px;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .mainmenu-card,
  .feature-card,
  .route-card,
  .nav-button,
  .order-button {
    transition: none;
  }

  .order-button:hover,
  .feature-card:hover {
    transform: none;
  }
}
</style>
