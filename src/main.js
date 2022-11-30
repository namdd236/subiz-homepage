import Vue from 'vue'
import HomePage from './home/home-page.js'

Vue.config.productionTip = false

new Vue({
  render() {
    return <HomePage />
  },
}).$mount('#app')
