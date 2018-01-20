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

const app = new Vue({
  el: '#app',
  components: { App },
  template: '<app :message="message" :show="show"></app>',
  data: { message: '', show: false },
  router
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(reg => {
    reg.onupdatefound = () => {
      const sw = reg.installing;

      sw.onstatechange = () => {
        if (sw.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            app.message = 'New version is available. Reload to activate it.'
            app.show=true
          } else {
            app.message = 'Content is now available offline'
            app.show=true
          }
        }
      }
    }
  })
}