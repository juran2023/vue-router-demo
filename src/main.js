import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import { createPinia } from 'pinia'

const app = createApp(App)
router.beforeEach((to, from) => {
  console.log(`[global] before each, ${from.path} to ${to.path}`)
})

router.beforeResolve((to, from) => {
  console.log(`[global] before resolbe, ${from.path} to ${to.path}`)
})

router.afterEach((from, to) => {
  console.log(`[global] after each, ${from.path} to ${to.path}`)
})
app.use(router)
app.use(createPinia())

app.mount('#app')
