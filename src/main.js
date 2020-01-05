import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// Charts
import 'chart.js'
import 'hchs-vue-charts'
import {ServerTable, ClientTable, Event} from 'vue-tables-2';

Vue.use(ClientTable, {
  perPage: 3
}, false);

Vue.config.productionTip = false

Vue.use(window.VueCharts);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
