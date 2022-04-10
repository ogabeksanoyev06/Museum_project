import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/router.js';
import store from './store/index.js';
import { Vuelidate } from 'vuelidate';
import i18n from './locales/index';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(ElementUI);

new Vue({
	router,
	store,
	i18n,
	render: h => h(App),
}).$mount('#app');
