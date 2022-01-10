import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/store';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAssDtKfEhl0YIOnhZeGQ4Nlgu5WadoefU",
  authDomain: "freeshop-6c9e1.firebaseapp.com",
  projectId: "freeshop-6c9e1",
  storageBucket: "freeshop-6c9e1.appspot.com",
  messagingSenderId: "260074984131",
  appId: "1:260074984131:web:4b4757adcf1541157c4876",
  measurementId: "G-WGKK6HERJN"
};
const app = initializeApp(firebaseConfig);
export {app}

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
