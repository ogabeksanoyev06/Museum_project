import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
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
	{
		path: '/product/:id',
		name: 'products',
		component: () => import('../views/Product.vue'),
		props: true,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
