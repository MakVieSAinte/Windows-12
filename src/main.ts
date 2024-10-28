import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './main.css'
import initializeAnalytics from './analytics';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Appelle la fonction pour injecter Vercel Analytics
initializeAnalytics();

app.mount('#app')
