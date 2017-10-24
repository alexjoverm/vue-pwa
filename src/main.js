import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Vuetify from 'vuetify'

Vue.use(VueRouter)
Vue.use(Vuetify)

const router = new VueRouter({
  routes: [{ path: '/', component: Home }]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
