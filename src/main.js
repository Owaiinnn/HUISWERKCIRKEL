import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createRouter, createWebHashHistory } from 'vue-router'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1565C0',
          secondary: '#FFA726',
          accent: '#0D47A1',
          success: '#2E7D32',
          info: '#0277BD',
          warning: '#F57F17',
          error: '#C62828',
          background: '#FAFAFA',
          surface: '#FFFFFF',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      style: 'font-family: Inter, sans-serif; letter-spacing: 0.5px;',
    },
  },
})

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('./pages/Home.vue') },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

createApp(App).use(vuetify).use(router).mount('#app')
