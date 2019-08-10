import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
//import '@/firebase/';
//import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

import Vuetify from 'vuetify'

Vue.config.productionTip = false;

Vue.use(Vuetify)
export default new Vuetify({ })

const app = new Vue({
    router,
    store,
    vuetify: new Vuetify(),
    render: h => h(App)
}).$mount('#app');
if (window.Cypress) {
    window.app = app;
}
