<template>
  <div class="mainmenu-container">
    <div class="mainmenu-card">
      <div class="mainmenu-header">
        <div class="header-top">
          <div class="app-logo">
            <img src="../images/mainlogoW.png" alt="Logo" class="logo-img" />
            <span class="app-name">LenaLink</span>
          </div>
          <router-link to="/register" class="register-btn"> Регистрация </router-link>
        </div>

        <div class="welcome-section">
          <div class="welcome-background">
            <!-- Векторный фон с городом и транспортом -->
            <svg class="city-background" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
              <!-- Силуэт города -->
              <g class="city-silhouette" fill="rgba(255, 255, 255, 0.1)">
                <!-- Здания -->
                <rect x="10" y="80" width="40" height="120" rx="2" />
                <rect x="60" y="60" width="35" height="140" rx="2" />
                <rect x="105" y="90" width="45" height="110" rx="2" />
                <rect x="160" y="70" width="30" height="130" rx="2" />
                <rect x="200" y="85" width="55" height="115" rx="2" />
                <rect x="265" y="65" width="40" height="135" rx="2" />
                <rect x="315" y="95" width="35" height="105" rx="2" />
                <rect x="355" y="75" width="30" height="125" rx="2" />

                <!-- Высотки -->
                <rect x="35" y="40" width="25" height="160" rx="3" />
                <rect x="140" y="45" width="20" height="155" rx="3" />
                <rect x="285" y="35" width="28" height="165" rx="3" />

                <!-- Окна в зданиях -->
                <g fill="rgba(255, 255, 255, 0.3)">
                  <rect x="15" y="100" width="8" height="12" rx="1" />
                  <rect x="25" y="100" width="8" height="12" rx="1" />
                  <rect x="15" y="120" width="8" height="12" rx="1" />
                  <rect x="25" y="120" width="8" height="12" rx="1" />

                  <rect x="70" y="85" width="6" height="10" rx="1" />
                  <rect x="78" y="85" width="6" height="10" rx="1" />
                  <rect x="70" y="100" width="6" height="10" rx="1" />
                  <rect x="78" y="100" width="6" height="10" rx="1" />

                  <rect x="110" y="115" width="10" height="14" rx="1" />
                  <rect x="125" y="115" width="10" height="14" rx="1" />
                  <rect x="110" y="135" width="10" height="14" rx="1" />
                  <rect x="125" y="135" width="10" height="14" rx="1" />
                </g>
              </g>

              <!-- Транспорт (размещен рандомно) -->
              <g class="transport-vehicles" fill="rgba(255, 255, 255, 0.8)">
                <!-- Самолет -->
                <g transform="translate(50, 40)">
                  <ellipse cx="0" cy="0" rx="20" ry="4" />
                  <ellipse cx="8" cy="-6" rx="8" ry="2" />
                  <ellipse cx="8" cy="6" rx="8" ry="2" />
                  <rect x="-2" y="-1" width="4" height="2" rx="1" />
                </g>

                <!-- Поезд -->
                <g transform="translate(200, 160)">
                  <rect x="-15" y="-8" width="30" height="16" rx="2" />
                  <circle cx="-10" cy="10" r="3" />
                  <circle cx="10" cy="10" r="3" />
                  <rect x="-12" y="-4" width="8" height="6" rx="1" />
                  <rect x="-2" y="-4" width="8" height="6" rx="1" />
                </g>

                <!-- Автобус -->
                <g transform="translate(320, 80)">
                  <rect x="-12" y="-6" width="24" height="12" rx="2" />
                  <circle cx="-8" cy="8" r="2.5" />
                  <circle cx="8" cy="8" r="2.5" />
                  <rect x="-8" y="-3" width="16" height="4" rx="1" />
                  <rect x="-10" y="-1" width="4" height="2" rx="1" />
                  <rect x="6" y="-1" width="4" height="2" rx="1" />
                </g>

                <!-- Лодка/Корабль -->
                <g transform="translate(150, 180)">
                  <path d="M-8,5 Q0,10 8,5 L6,5 Q0,8 -6,5 Z" />
                  <rect x="-3" y="-5" width="6" height="10" rx="1" />
                  <rect x="-1" y="-12" width="2" height="7" rx="1" />
                </g>
              </g>

              <!-- Декоративные элементы -->
              <g class="decorative-elements">
                <!-- Облака -->
                <g fill="rgba(255, 255, 255, 0.2)">
                  <ellipse cx="50" cy="25" rx="15" ry="8" />
                  <ellipse cx="60" cy="25" rx="10" ry="6" />
                  <ellipse cx="45" cy="25" rx="8" ry="5" />

                  <ellipse cx="220" cy="20" rx="12" ry="6" />
                  <ellipse cx="230" cy="20" rx="8" ry="4" />
                  <ellipse cx="215" cy="20" rx="6" ry="3" />
                </g>

                <!-- Волнистые линии (дороги/реки) -->
                <path
                  d="M0,180 Q50,175 100,180 T200,180 T300,180 T400,180"
                  stroke="rgba(255, 255, 255, 0.1)"
                  stroke-width="2"
                  fill="none"
                />
                <path
                  d="M0,170 Q30,165 60,170 T120,170 T180,170 T240,170 T300,170 T360,170 T400,170"
                  stroke="rgba(255, 255, 255, 0.05)"
                  stroke-width="1.5"
                  fill="none"
                />
              </g>
            </svg>
          </div>

          <!-- Модальное окно для текста -->
          <div class="text-modal">
            <div class="modal-overlay">
              <h1 class="welcome-title">Добро пожаловать!</h1>
              <p class="welcome-subtitle">
                Планируйте мультимодальные путешествия с удобным поиском маршрутов
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="main-content">
        <div class="feature-section">
          <h2 class="section-title">💡 Что мы предлагаем</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div
                class="feature-icon"
                style="background: linear-gradient(135deg, #ebf8ff, #dbeafe)"
              >
                <img src="../images/mainlogoW.png" alt="Logo" class="logo-img" />
              </div>
              <h3 class="feature-title">Мультимодальность</h3>
              <p class="feature-desc">Комбинируйте различные виды транспорта в одном маршруте</p>
            </div>

            <div class="feature-card">
              <div
                class="feature-icon"
                style="background: linear-gradient(135deg, #faf5ff, #f3e8ff)"
              >
                <img src="../images/QRCode.png" alt="Logo" class="logo-img" />
              </div>
              <h3 class="feature-title">Единый билет</h3>
              <p class="feature-desc">Оплачивайте весь маршрут одним платежом</p>
            </div>

            <div class="feature-card">
              <div
                class="feature-icon"
                style="background: linear-gradient(135deg, #f0fdfa, #ccfbf1)"
              >
                <img src="../images/smartSearch.png" alt="Logo" class="logo-img" />
              </div>
              <h3 class="feature-title">Умный поиск</h3>
              <p class="feature-desc">Алгоритм находит лучшие варианты путешествий</p>
            </div>

            <div class="feature-card">
              <div
                class="feature-icon"
                style="background: linear-gradient(135deg, #ecfdf5, #d1fae5)"
              >
                <img src="../images/techsupport.png" alt="Logo" class="logo-img" />
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
  position: relative;
}

.welcome-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.city-background {
  width: 100%;
  height: 100%;
  opacity: 0.4;
}

.city-silhouette {
  animation: cityPulse 4s ease-in-out infinite alternate;
}

.transport-vehicles {
  animation: transportFloat 6s ease-in-out infinite;
}

.decorative-elements {
  animation: floatUp 12s ease-in-out infinite;
}

/* Анимации */
@keyframes cityPulse {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.7;
  }
}

@keyframes transportFloat {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-3px);
  }
}

@keyframes airplaneFly {
  0% {
    transform: translateX(-20px) translateY(0px);
  }
  100% {
    transform: translateX(420px) translateY(-5px);
  }
}

@keyframes trainMove {
  0% {
    transform: translateX(-30px) translateY(0px);
  }
  50% {
    transform: translateX(200px) translateY(-2px);
  }
  100% {
    transform: translateX(430px) translateY(0px);
  }
}

@keyframes busDrive {
  0% {
    transform: translateX(-25px) translateY(0px);
  }
  50% {
    transform: translateX(100px) translateY(-1px);
  }
  100% {
    transform: translateX(425px) translateY(0px);
  }
}

@keyframes boatSail {
  0% {
    transform: translateX(-20px) translateY(0px) rotate(-2deg);
  }
  50% {
    transform: translateX(150px) translateY(-3px) rotate(2deg);
  }
  100% {
    transform: translateX(420px) translateY(0px) rotate(-1deg);
  }
}

@keyframes floatUp {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-2px);
  }
}

/* Модальное окно для текста */
.text-modal {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.modal-overlay {
  background: rgba(255, 102, 0, 0.4); /* ярко-оранжевый полупрозрачный фон */
  backdrop-filter: blur(12px) saturate(1.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem 2.5rem;
  box-shadow: 0 8px 32px rgba(255, 102, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  text-align: center;
  max-width: 400px;
  animation: modalPulse 4s ease-in-out infinite;
}

@keyframes modalPulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 8px 32px rgba(255, 102, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 12px 40px rgba(255, 102, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.25);
  }
}

.welcome-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.75rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.welcome-subtitle {
  font-size: 1rem;
  color: #f7fafc;
  margin: 0 auto;
  line-height: 1.5;
  max-width: 320px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  text-align: center;
  font-weight: 500;
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
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    text-align: center;
  }

  .welcome-subtitle {
    font-size: 1.1rem;
    color: #f7fafc;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    text-align: center;
    font-weight: 500;
    margin: 0 auto;
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

  .welcome-title {
    font-size: 1.5rem;
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    text-align: center;
  }

  .welcome-subtitle {
    font-size: 0.9rem;
    color: #f7fafc;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    text-align: center;
    font-weight: 500;
    margin: 0 auto;
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
