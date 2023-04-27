import { createApp } from 'vue'
import { store } from '@/stores'
import { VChart } from './directive/VChart'
import { VDrag } from './directive/VDrag'
import App from './App.vue'
import router from './router'
import '@/style/index.less'
const app = createApp(App)
app.directive('chart', VChart)
app.directive('drag', VDrag)
app.use(store)
app.use(router)

app.mount('#app')
