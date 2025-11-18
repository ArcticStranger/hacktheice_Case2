<template>
  <div class="register-container">
    <div class="register-card">
      <div class="register-header">
        <button class="back-button" @click="goBack">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path
              d="M0.293751 7.29365C-0.0968742 7.68428 -0.0968742 8.31865 0.293751 8.70928L5.29375 13.7093C5.68438 14.0999 6.31875 14.0999 6.70938 13.7093C7.1 13.3187 7.1 12.6843 6.70938 12.2937L3.4125 8.9999H13C13.5531 8.9999 14 8.55303 14 7.9999C14 7.44678 13.5531 6.9999 13 6.9999H3.41563L6.70625 3.70615C7.09688 3.31553 7.09688 2.68115 6.70625 2.29053C6.31563 1.8999 5.68125 1.8999 5.29063 2.29053L0.290626 7.29053L0.293751 7.29365Z"
              fill="#374151"
            />
          </svg>
        </button>
      </div>

      <div class="register-content">
        <div class="intro-section">
          <div class="icon-wrapper">
            <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
              <path
                d="M3 3C1.34531 3 0 4.34531 0 6V9C0 9.4125 0.346875 9.73594 0.735937 9.87188C1.61719 10.1766 2.25 11.0156 2.25 12C2.25 12.9844 1.61719 13.8234 0.735937 14.1281C0.346875 14.2641 0 14.5875 0 15V18C0 19.6547 1.34531 21 3 21H24C25.6547 21 27 19.6547 27 18V15C27 14.5875 26.6531 14.2641 26.2641 14.1281C25.3828 13.8234 24.75 12.9844 24.75 12C24.75 11.0156 25.3828 10.1766 26.2641 9.87188C26.6531 9.73594 27 9.4125 27 9V6C27 4.34531 25.6547 3 24 3H3ZM6 8.25V15.75C6 16.1625 6.3375 16.5 6.75 16.5H20.25C20.6625 16.5 21 16.1625 21 15.75V8.25C21 7.8375 20.6625 7.5 20.25 7.5H6.75C6.3375 7.5 6 7.8375 6 8.25ZM4.5 7.5C4.5 6.67031 5.17031 6 6 6H21C21.8297 6 22.5 6.67031 22.5 7.5V16.5C22.5 17.3297 21.8297 18 21 18H6C5.17031 18 4.5 17.3297 4.5 16.5V7.5Z"
                fill="white"
              />
            </svg>
          </div>
          <h1 class="page-title">Создать аккаунт</h1>
          <p class="page-subtitle">Зарегистрируйтесь для покупки мультимодальных билетов</p>
        </div>

        <form class="register-form" @submit.prevent="handleSubmit">
          <div class="form-field">
            <label class="field-label">Имя и Фамилия</label>
            <div class="input-wrapper">
              <input
                v-model="formData.name"
                type="text"
                placeholder="Иван Петров"
                class="field-input"
              />
              <div class="input-icon">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                  <path
                    d="M7 8C8.06087 8 9.07828 7.57857 9.82843 6.82843C10.5786 6.07828 11 5.06087 11 4C11 2.93913 10.5786 1.92172 9.82843 1.17157C9.07828 0.421427 8.06087 0 7 0C5.93913 0 4.92172 0.421427 4.17157 1.17157C3.42143 1.92172 3 2.93913 3 4C3 5.06087 3.42143 6.07828 4.17157 6.82843C4.92172 7.57857 5.93913 8 7 8ZM5.57188 9.5C2.49375 9.5 0 11.9937 0 15.0719C0 15.5844 0.415625 16 0.928125 16H13.0719C13.5844 16 14 15.5844 14 15.0719C14 11.9937 11.5063 9.5 8.42813 9.5H5.57188Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="form-field">
            <label class="field-label">Электронная почта</label>
            <div class="input-wrapper">
              <input
                v-model="formData.email"
                type="email"
                placeholder="ivan@example.com"
                class="field-input"
              />
              <div class="input-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M1.5 2C0.671875 2 0 2.67188 0 3.5C0 3.97188 0.221875 4.41562 0.6 4.7L7.4 9.8C7.75625 10.0656 8.24375 10.0656 8.6 9.8L15.4 4.7C15.7781 4.41562 16 3.97188 16 3.5C16 2.67188 15.3281 2 14.5 2H1.5ZM0 5.5V12C0 13.1031 0.896875 14 2 14H14C15.1031 14 16 13.1031 16 12V5.5L9.2 10.6C8.4875 11.1344 7.5125 11.1344 6.8 10.6L0 5.5Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="form-field">
            <label class="field-label">Пароль</label>
            <div class="input-wrapper">
              <input
                v-model="formData.password"
                :type="showPassword ? 'text' : 'password'"
                @input="checkPasswordStrength"
                placeholder="Минимум 8 символов"
                class="field-input"
              />
              <div class="input-icon">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                  <path
                    d="M4.5 4.5V6H9.5V4.5C9.5 3.11875 8.38125 2 7 2C5.61875 2 4.5 3.11875 4.5 4.5ZM2.5 6V4.5C2.5 2.01562 4.51562 0 7 0C9.48438 0 11.5 2.01562 11.5 4.5V6H12C13.1031 6 14 6.89688 14 8V14C14 15.1031 13.1031 16 12 16H2C0.896875 16 0 15.1031 0 14V8C0 6.89688 0.896875 6 2 6H2.5Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </div>
              <button type="button" class="password-toggle" @click="togglePassword">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
                  <path
                    d="M9.00001 1C6.47501 1 4.45314 2.15 2.98126 3.51875C1.51876 4.875 0.540637 6.5 0.0781372 7.61562C-0.0249878 7.8625 -0.0249878 8.1375 0.0781372 8.38437C0.540637 9.5 1.51876 11.125 2.98126 12.4812C4.45314 13.85 6.47501 15 9.00001 15C11.525 15 13.5469 13.85 15.0188 12.4812C16.4813 11.1219 17.4594 9.5 17.925 8.38437C18.0281 8.1375 18.0281 7.8625 17.925 7.61562C17.4594 6.5 16.4813 4.875 15.0188 3.51875C13.5469 2.15 11.525 1 9.00001 1ZM4.50001 8C4.50001 6.80653 4.97412 5.66193 5.81803 4.81802C6.66195 3.97411 7.80654 3.5 9.00001 3.5C10.1935 3.5 11.3381 3.97411 12.182 4.81802C13.0259 5.66193 13.5 6.80653 13.5 8C13.5 9.19347 13.0259 10.3381 12.182 11.182C11.3381 12.0259 10.1935 12.5 9.00001 12.5C7.80654 12.5 6.66195 12.0259 5.81803 11.182C4.97412 10.3381 4.50001 9.19347 4.50001 8ZM9.00001 6C9.00001 7.10312 8.10314 8 7.00001 8C6.77814 8 6.56564 7.9625 6.36564 7.89687C6.19376 7.84062 5.99376 7.94688 6.00001 8.12813C6.00939 8.34375 6.04064 8.55937 6.10001 8.775C6.52814 10.375 8.17501 11.325 9.77501 10.8969C11.375 10.4688 12.325 8.82188 11.8969 7.22188C11.55 5.925 10.4031 5.05313 9.12814 5C8.94689 4.99375 8.84064 5.19062 8.89689 5.36562C8.96251 5.56562 9.00001 5.77813 9.00001 6Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </button>
            </div>

            <div class="password-strength-section">
              <div class="strength-indicator">
                <div class="strength-bar">
                  <div class="strength-fill" :style="{ width: passwordStrength + '%' }"></div>
                </div>
                <span class="strength-label">{{ strengthLabel }}</span>
              </div>

              <div class="password-requirements">
                <div class="requirement-item">
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                    <path
                      d="M3 6C3.79565 6 4.55871 5.68393 5.12132 5.12132C5.68393 4.55871 6 3.79565 6 3C6 2.20435 5.68393 1.44129 5.12132 0.87868C4.55871 0.316071 3.79565 0 3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3C0 3.79565 0.316071 4.55871 0.87868 5.12132C1.44129 5.68393 2.20435 6 3 6Z"
                      :fill="passwordLengthValid ? '#10B981' : '#6B7280'"
                    />
                  </svg>
                  <span>Минимум 8 символов</span>
                </div>
                <div class="requirement-item">
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                    <path
                      d="M3 6C3.79565 6 4.55871 5.68393 5.12132 5.12132C5.68393 4.55871 6 3.79565 6 3C6 2.20435 5.68393 1.44129 5.12132 0.87868C4.55871 0.316071 3.79565 0 3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3C0 3.79565 0.316071 4.55871 0.87868 5.12132C1.44129 5.68393 2.20435 6 3 6Z"
                      :fill="passwordHasNumber ? '#10B981' : '#6B7280'"
                    />
                  </svg>
                  <span>Содержит цифру</span>
                </div>
                <div class="requirement-item">
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                    <path
                      d="M3 6C3.79565 6 4.55871 5.68393 5.12132 5.12132C5.68393 4.55871 6 3.79565 6 3C6 2.20435 5.68393 1.44129 5.12132 0.87868C4.55871 0.316071 3.79565 0 3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3C0 3.79565 0.316071 4.55871 0.87868 5.12132C1.44129 5.68393 2.20435 6 3 6Z"
                      :fill="passwordHasSpecial ? '#10B981' : '#6B7280'"
                    />
                  </svg>
                  <span>Содержит специальный символ</span>
                </div>
              </div>
            </div>
          </div>

          <div class="terms-section">
            <input
              type="checkbox"
              v-model="formData.agreeToTerms"
              class="terms-checkbox"
              id="terms-checkbox"
            />
            <label for="terms-checkbox" class="terms-label">
              <span class="terms-text">Я согласен с</span>
              <a href="#" class="terms-link">Условиями использования</a>
              <a href="#" class="terms-link">Политикой конфиденциальности</a>
            </label>
          </div>

          <button type="submit" class="register-button">Зарегистрироваться</button>
        </form>

        <div class="divider-section">
          <div class="divider-line"></div>
          <span class="divider-text">или</span>
          <div class="divider-line"></div>
        </div>

        <div class="social-login">
          <button class="social-button" @click="loginWithGoogle">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M19.0625 10.2266C19.0625 15.7539 15.2773 19.6875 9.6875 19.6875C4.32813 19.6875 0 15.3594 0 10C0 4.64063 4.32813 0.3125 9.6875 0.3125C12.2969 0.3125 14.4922 1.26953 16.1836 2.84766L13.5469 5.38281C10.0977 2.05469 3.68359 4.55469 3.68359 10C3.68359 13.3789 6.38281 16.1172 9.6875 16.1172C13.5234 16.1172 14.9609 13.3672 15.1875 11.9414H9.6875V8.60937H18.9102C19 9.10547 19.0625 9.58203 19.0625 10.2266Z"
                fill="#374151"
              />
            </svg>
            <span>Войти через Google</span>
          </button>

          <button class="social-button" @click="loginWithApple">
            <svg width="15" height="20" viewBox="0 0 15 20" fill="none">
              <path
                d="M12.4492 10.4961C12.4414 9.0625 13.0898 7.98047 14.4023 7.18359C13.668 6.13281 12.5586 5.55469 11.0938 5.44141C9.70703 5.33203 8.19141 6.25 7.63672 6.25C7.05078 6.25 5.70703 5.48047 4.65234 5.48047C2.47266 5.51563 0.15625 7.21875 0.15625 10.6836C0.15625 11.707 0.34375 12.7643 0.71875 13.8555C1.21875 15.2891 3.02344 18.8047 4.90625 18.7461C5.89062 18.7227 6.58594 18.0469 7.86719 18.0469C9.10937 18.0469 9.75391 18.7461 10.8516 18.7461C12.75 18.7187 14.3828 15.5234 14.8594 14.0859C12.3125 12.8867 12.4492 10.5703 12.4492 10.4961ZM10.2383 4.08203C11.3047 2.81641 11.207 1.66406 11.1758 1.25C10.2344 1.30469 9.14453 1.89063 8.52344 2.61328C7.83984 3.38672 7.4375 4.34375 7.52344 5.42188C8.54297 5.5 9.47266 4.97656 10.2383 4.08203Z"
                fill="#374151"
              />
            </svg>
            <span>Войти через Apple</span>
          </button>
        </div>

        <div class="login-link-section">
          <p class="login-text">Уже есть аккаунт?</p>
          <a href="#" class="login-link" @click.prevent="goToLogin">Войти</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
        agreeToTerms: false,
      },
      showPassword: false,
      passwordStrength: 0,
      strengthLabel: 'Слабый',
      passwordLengthValid: false,
      passwordHasNumber: false,
      passwordHasSpecial: false,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    checkPasswordStrength() {
      const password = this.formData.password
      let strength = 0

      // Check length
      this.passwordLengthValid = password.length >= 8
      if (this.passwordLengthValid) strength += 33

      // Check for numbers
      this.passwordHasNumber = /\d/.test(password)
      if (this.passwordHasNumber) strength += 33

      // Check for special characters
      this.passwordHasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)
      if (this.passwordHasSpecial) strength += 34

      this.passwordStrength = strength

      if (strength <= 33) {
        this.strengthLabel = 'Слабый'
      } else if (strength <= 66) {
        this.strengthLabel = 'Средний'
      } else {
        this.strengthLabel = 'Сильный'
      }
    },
    handleSubmit() {
      if (!this.formData.agreeToTerms) {
        alert('Пожалуйста, согласитесь с условиями использования')
        return
      }
      if (!this.formData.name || !this.formData.email || !this.formData.password) {
        alert('Пожалуйста, заполните все поля')
        return
      }
      console.log('Registration form submitted:', this.formData)
    },
    loginWithGoogle() {
      console.log('Login with Google')
    },
    loginWithApple() {
      console.log('Login with Apple')
    },
    goToLogin() {
      console.log('Navigate to login')
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

.register-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #eef2ff 0%, #fff 35.36%, #fdf2f8 70.71%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
  padding: 2rem 1rem;
}

.register-card {
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 650px;
  transition: all 0.3s ease;
}

.register-card:hover {
  box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.15), 0 12px 20px -6px rgba(0, 0, 0, 0.1);
}

.register-header {
  padding: 2rem 2rem 0;
  display: flex;
  justify-content: flex-start;
}

.back-button {
  display: flex;
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  background: #f9fafb;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: #f3f4f6;
  transform: translateX(-2px);
}

.register-content {
  padding: 0 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
}

.intro-section {
  text-align: center;
  margin-bottom: 1.5rem;
}

.icon-wrapper {
  display: flex;
  width: 96px;
  height: 96px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
  margin: 0 auto 2rem;
  box-shadow: 0 8px 16px rgba(99, 102, 241, 0.3);
}

.page-title {
  color: #111827;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 1rem;
}

.page-subtitle {
  color: #6b7280;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.field-label {
  color: #374151;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.4;
}

.input-wrapper {
  position: relative;
}

.field-input {
  width: 100%;
  height: 64px;
  padding: 1.25rem 1.25rem 1.25rem 3.5rem;
  border-radius: 16px;
  border: 2px solid #e5e7eb;
  background: #fff;
  color: #111827;
  font-family: inherit;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  outline: none;
  transition: all 0.3s ease;
}

.field-input::placeholder {
  color: #9ca3af;
}

.field-input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.input-icon {
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #9ca3af;
}

.password-toggle {
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: #9ca3af;
  transition: color 0.3s ease;
}

.password-toggle:hover {
  color: #6b7280;
}

.password-strength-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.strength-indicator {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.strength-bar {
  flex: 1;
  height: 6px;
  background: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
}

.strength-fill {
  height: 100%;
  border-radius: 9999px;
  background: #d1d5db;
  transition: all 0.3s ease;
  width: 0%;
}

.strength-fill.low {
  background: #ef4444;
}

.strength-fill.medium {
  background: #f59e0b;
}

.strength-fill.high {
  background: #10b981;
}

.strength-label {
  color: #6b7280;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.3;
  white-space: nowrap;
}

.password-requirements {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.requirement-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.terms-section {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.terms-checkbox {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid #d1d5db;
  background: #fff;
  margin-top: 2px;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.terms-checkbox:checked {
  background: #6366f1;
  border-color: #6366f1;
}

.terms-label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  cursor: pointer;
}

.terms-text {
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4;
}

.terms-link {
  color: #6366f1;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;
  transition: color 0.3s ease;
}

.terms-link:hover {
  color: #4f46e5;
  text-decoration: underline;
}

.register-button {
  height: 64px;
  border-radius: 16px;
  border: none;
  background: linear-gradient(90deg, #6366f1 0%, #ec4899 100%);
  color: #fff;
  font-family: inherit;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.4;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(99, 102, 241, 0.3);
}

.register-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(99, 102, 241, 0.4);
}

.register-button:active {
  transform: translateY(0);
}

.divider-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: #e5e7eb;
}

.divider-text {
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-button {
  height: 64px;
  border-radius: 16px;
  border: 2px solid #e5e7eb;
  background: #fff;
  color: #374151;
  font-family: inherit;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
}

.social-button:hover {
  border-color: #d1d5db;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transform: translateY(-1px);
}

.login-link-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}

.login-text {
  color: #6b7280;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
}

.login-link {
  color: #6366f1;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  text-decoration: none;
  transition: color 0.3s ease;
}

.login-link:hover {
  color: #4f46e5;
  text-decoration: underline;
}

/* Desktop responsive breakpoints */

/* Extra large displays (4K and above) */
@media (min-width: 2560px) {
  .register-container {
    padding: 5rem 3rem;
  }

  .register-card {
    max-width: 800px;
  }

  .register-content {
    padding: 0 4rem 4rem;
    gap: 3rem;
  }

  .page-title {
    font-size: 3.5rem;
  }

  .page-subtitle {
    font-size: 1.5rem;
  }

  .icon-wrapper {
    width: 128px;
    height: 128px;
    margin-bottom: 3rem;
  }

  .field-input,
  .register-button,
  .social-button {
    height: 80px;
    font-size: 1.375rem;
  }

  .back-button {
    width: 72px;
    height: 72px;
  }

  .register-form {
    gap: 2.5rem;
  }
}

/* Large desktop and Mac Retina displays */
@media (min-width: 1440px) {
  .register-container {
    padding: 4rem 2rem;
  }

  .register-card {
    max-width: 750px;
  }

  .register-content {
    padding: 0 3rem 3rem;
    gap: 2.75rem;
  }

  .page-title {
    font-size: 3rem;
  }

  .page-subtitle {
    font-size: 1.375rem;
  }

  .icon-wrapper {
    width: 112px;
    height: 112px;
    margin-bottom: 2.75rem;
  }

  .field-input,
  .register-button,
  .social-button {
    height: 72px;
    font-size: 1.25rem;
  }

  .register-content .intro-section {
    margin-bottom: 2rem;
  }

  .register-form {
    gap: 2.25rem;
  }

  .back-button {
    width: 64px;
    height: 64px;
  }
}

/* Standard desktop */
@media (max-width: 1024px) {
  .register-card {
    max-width: 600px;
  }

  .register-content {
    padding: 0 2.75rem 2.75rem;
    gap: 2.25rem;
  }

  .page-title {
    font-size: 2.75rem;
  }

  .page-subtitle {
    font-size: 1.375rem;
  }

  .icon-wrapper {
    width: 104px;
    height: 104px;
  }

  .field-input,
  .register-button,
  .social-button {
    height: 68px;
    font-size: 1.1875rem;
  }

  .register-form {
    gap: 2rem;
  }

  .back-button {
    width: 60px;
    height: 60px;
  }
}

/* Small desktop and landscape tablet */
@media (max-width: 768px) {
  .register-card {
    max-width: 520px;
  }

  .register-content {
    padding: 0 2.25rem 2.25rem;
    gap: 2rem;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .page-subtitle {
    font-size: 1.25rem;
  }

  .field-input,
  .register-button,
  .social-button {
    height: 64px;
    font-size: 1.125rem;
  }

  .icon-wrapper {
    width: 96px;
    height: 96px;
  }

  .back-button {
    width: 56px;
    height: 56px;
  }

  .register-form {
    gap: 1.75rem;
  }
}

/* Mobile devices */
@media (max-width: 640px) {
  .register-container {
    padding: 1.5rem 1rem;
  }

  .register-card {
    max-width: 100%;
    border-radius: 20px;
  }

  .register-header {
    padding: 2rem 1.5rem 0;
  }

  .register-content {
    padding: 0 1.5rem 2rem;
    gap: 1.75rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1.125rem;
  }

  .icon-wrapper {
    width: 80px;
    height: 80px;
  }

  .field-input,
  .register-button,
  .social-button {
    height: 56px;
    font-size: 1rem;
  }

  .back-button {
    width: 48px;
    height: 48px;
  }

  .register-form {
    gap: 1.5rem;
  }
}

/* High DPI displays (Mac Retina) */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .field-input,
  .register-button,
  .social-button {
    border-width: 1px;
  }

  .strength-bar {
    height: 5px;
  }

  .terms-checkbox {
    border-width: 1px;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .register-card,
  .back-button,
  .field-input,
  .register-button,
  .social-button,
  .strength-fill,
  .password-toggle {
    transition: none;
  }

  .register-button:hover,
  .social-button:hover,
  .back-button:hover {
    transform: none;
  }
}
</style>
