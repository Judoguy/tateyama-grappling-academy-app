import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ja from './locales/ja.json'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ja
  }
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
