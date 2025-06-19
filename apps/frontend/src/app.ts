import { createApp, registerElement } from 'nativescript-vue'
import { createPinia } from 'pinia'
import Home from './views/Home.vue'
import { MapboxView } from '@nativescript-community/ui-mapbox'

const pinia = createPinia()
const app = createApp(Home)

registerElement('Mapbox', () => MapboxView)

app.use(pinia)
app.start()
