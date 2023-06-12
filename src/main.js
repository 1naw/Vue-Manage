import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/index.scss'
import 'element-plus/dist/index.css'
import '@/router/permission'
import * as ELIcons from '@element-plus/icons-vue'

const app = createApp(App)
for (const iconName in ELIcons) {
  app.component(iconName, ELIcons[iconName])
}
app.use(store).use(router).mount('#app')
