import 'vuetify/dist/vuetify.min.css'

// Register and initialize Firebase
import './db'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Details from './components/Details'
import Images from './components/Images'
import Vuetify from 'vuetify'
import VueFire from 'vuefire'

Vue.use(VueFire)
Vue.use(VueRouter)
Vue.use(Vuetify)

const router = new VueRouter({
  routes: [
    { path: '/images', component: Images },
    { path: '/images/:id', component: Details, props: true },
    { path: '/', redirect: '/images' }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

const prod = process.env.NODE_ENV === 'production'
const shouldSW = 'serviceWorker' in navigator && prod

if (shouldSW) {
  navigator.serviceWorker.register('/service-worker.js').then(function() {
    console.log('Service Worker Registered');
  })
}
