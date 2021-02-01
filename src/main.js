import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import Char from './pages/CharacterData.vue'
import Film from './pages/FilmData.vue'
import { store } from './store/store.js'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {name: 'Home', path: '', component: HomePage},
    {name: 'Character', path: '/char/:id', component: Char, props: true},
    {name: 'Film', path: '/film/:id', component: Film, props: true}
  ],
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
