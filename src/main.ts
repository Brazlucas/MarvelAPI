import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import PageLoader from './components/PageLoader.vue';

Vue.config.productionTip = false

Vue.component('PageLoader', PageLoader)

new Vue({
  router,
  vuetify,
  components: {
  PageLoader
},
  render: h => h(App)
}).$mount('#app')
