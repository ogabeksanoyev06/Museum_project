import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/router.js';
import store from './store/index.js';
import { Vuelidate } from 'vuelidate';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
