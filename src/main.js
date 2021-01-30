import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Search from './components/Search.vue'
import Char from './components/CharacterData.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {name: 'Home', path: '', component: Search},
    {name: 'Char', path: '/char/:id', component: Char, props: true}
  ],
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
