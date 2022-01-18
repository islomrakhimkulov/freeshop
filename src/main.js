import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/store';

// plugins
import "@/plugins/firebase";
import "@/plugins/bootstrap-vue";
import "@/plugins/font-awesome";

Vue.config.productionTip = false;

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')


// isUserLogined: state => !!state.user
