import Vue from 'vue'
import App from './App.vue'
import utils from '@/utils';


console.dir(utils)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
