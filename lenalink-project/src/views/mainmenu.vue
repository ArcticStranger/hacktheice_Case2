<template>
  <div class="frames-container">
    <div class="frames-frames10">
      <div class="frames-frames11">
        <div class="frames-frames12">
          <div class="frames-header-section">
            <div class="frames-frames13">
              <img src="../images/mainlogo.png" alt="Frame46" class="frames-frame1" />
              <span class="frames-text10">MagnaTrip</span>
            </div>
            <button class="frames-register-button" @click="goToRegister">Регистрация</button>
          </div>
          <span class="frames-text11">Команда Goферы</span>
        </div>
        <div class="frames-search-module">
          <h2 class="frames-search-title">Заказать маршрут</h2>
          <div class="frames-search-description">
            <p class="frames-search-text">
              Удобное планирование маршрутов с несколькими видами транспорта и покупка единого
              билета
            </p>
            <router-link to="/ticket-order" class="frames-search-link">
              Перейти к заказу билетов
            </router-link>
          </div>
        </div>
        <div class="frames-frames14">
          <div class="frames-frames15">
            <span class="frames-text12">
              LenaLink — мобильное приложение для удобного планирования маршрутов с несколькими
              видами транспорта и покупки единого билета.
            </span>
          </div>
          <div class="frames-frames16"></div>
          <div class="frames-frames17">
            <div class="frames-frames18"></div>
          </div>
          <div class="frames-frames20">
            <span class="frames-text14">Пример маршрута</span>
            <div class="frames-frames21">
              <div class="frames-frames22">
                <div class="frames-frames23">
                  <div class="frames-frames24">
                    <img src="../images/airplane.png" alt="Frame436" class="frames-frame2" />
                  </div>
                  <div class="frames-frames25"></div>
                </div>
                <div class="frames-frames26">
                  <span class="frames-text15"> Москва (SVO) → Санкт-Петербург (LED) </span>
                  <span class="frames-text16"> Самолёт • 1ч 30мин </span>
                  <span class="frames-text17"> Вылет: 10:00 • Прибытие: 11:30 </span>
                </div>
              </div>
              <div class="frames-frames27">
                <div class="frames-frames28">
                  <div class="frames-frames29">
                    <img src="../images/train.png" alt="Frame446" class="frames-frame3" />
                  </div>
                  <div class="frames-frames30"></div>
                </div>
                <div class="frames-frames31">
                  <span class="frames-text18"> Санкт-Петербург → Великий Новгород </span>
                  <span class="frames-text19"> Поезд • 3ч 45мин </span>
                  <span class="frames-text20"> Отправление: 12:00 • Прибытие: 15:45 </span>
                </div>
              </div>
              <div class="frames-frames32">
                <div class="frames-frames33">
                  <div class="frames-frames34">
                    <img src="../images/boat.png" alt="Frame456" class="frames-frame4" />
                  </div>
                  <div class="frames-frames35"></div>
                </div>
                <div class="frames-frames36">
                  <span class="frames-text21"> Великий Новгород → Тверь </span>
                  <span class="frames-text22"> Речной круиз • 5ч 20мин </span>
                  <span class="frames-text23"> Отправление: 16:30 • Прибытие: 21:50 </span>
                </div>
              </div>
              <div class="frames-frames37">
                <div class="frames-frames38">
                  <div class="frames-frames39">
                    <img src="../images/bus.png" alt="Frame466" class="frames-frame5" />
                  </div>
                  <div class="frames-frames40"></div>
                </div>
                <div class="frames-frames41">
                  <span class="frames-text24"> Тверь → Москва </span>
                  <span class="frames-text25"> Автобус • 2ч 15мин </span>
                  <span class="frames-text26"> Отправление: 22:30 • Прибытие: 00:45 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="frames-frames42">
          <span class="frames-text27"> © 2025 LenaLink — Команда Goферы </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'Frames',
  components: {
    RouterLink,
  },
  methods: {
    goToTicketOrder() {
      this.$router.push('/ticket-order')
    },
    goToRegister() {
      this.$router.push('/register')
    },
  },
}
</script>

<style scoped src="./mainmenu.css"></style>
