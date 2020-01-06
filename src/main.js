import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// Charts
import 'chart.js'
import 'hchs-vue-charts'
import {ServerTable, ClientTable, Event} from 'vue-tables-2';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false

//use Vuetify DataTables
Vue.use(ClientTable, {
  perPage: 3
}, false);
//Vue Charts.js
Vue.use(window.VueCharts);
// Vue GoogleMaps
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAYzBB0nQXLqSSu2pgpCEcbWys39KG9Stk",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
