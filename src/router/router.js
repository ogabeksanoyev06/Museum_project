import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue'),
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
		},
		{
			path: '/exhibits',
			name: 'exhibits',
			component: () => import('../views/ExhibitsView.vue'),
		},
		{
			path: '/sections',
			name: 'sections',
			component: () => import('../views/SectionsView.vue'),
		},
		{
			path: '/publications',
			name: 'publications',
			component: () => import('../views/PublicationsView.vue'),
		},
		{
			path: '/impressions',
			name: 'impressions',
			component: () => import('../views/ImpressionsView.vue'),
		},
	],
});
