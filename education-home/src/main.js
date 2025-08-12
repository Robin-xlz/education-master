import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
// main.js
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css' // 从原项目复制过来的CSS
import './assets/vendor/bootstrap/css/bootstrap.min.css' // 从原项目复制过来的CSS
import './assets/vendor/slick/slick/slick.css' // 从原项目复制过来的CSS
import './assets/vendor/slick/slick/slick-theme.css'
const app = createApp(App)

app.use(router)

app.mount('#app')
