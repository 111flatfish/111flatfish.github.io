import Vue from 'vue'
import App from './App.vue'
import Vue_Resource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(Vue_Resource)
new Vue({
  render: h => h(App),
}).$mount('#app')
