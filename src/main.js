import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Details from './components/Details'
import Images from './components/Images'
import Vuetify from 'vuetify'

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
