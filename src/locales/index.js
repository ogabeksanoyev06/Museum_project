import Vue from 'vue';
import VueI18n from 'vue-i18n';
import uz from './uz/index';
import en from './en/index';
Vue.use(VueI18n);
const messages = {
	uz: uz,
	en: en,
};


export default new VueI18n({
	locale: localStorage.getItem('lang'), // locall
	messages, 
});
