import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: [],
		items: [
			{ title: 'О нас', name: 'about' },
			{ title: 'Экспонаты', name: 'exhibits' },
			{ title: 'Отделы', name: 'sections' },
			{ title: 'Издания', name: 'publications' },
			{ title: 'Выставки', name: 'impressions' },
		],
	
		eksponant: [
			{
				image: '1.jpg',
				title: 'lorem eksponant ipsum1',
				text: '',
				name: 'eksponant1',
				id: 0,
			},
			{
				image: '2.jpg',
				title: 'lorem eksponant ipsum2',
				text: '',
				name: 'eksponant1',
				id: 1,
			},
			{
				image: '3.jpg',
				title: 'lorem eksponant ipsum1',
				text: '',
				name: 'eksponant1',
				id: 2,
			},
			{
				image: '4.jpg',
				title: 'lorem eksponant ipsum1',
				text: '',
				name: 'eksponant1',
				id: 3,
			},
			{
				image: '5.jpg',
				title: 'lorem eksponant ipsum1',
				text: '',
				name: 'eksponant2',
				id: 4,
			},
			{
				image: '6.jpg',
				title: 'lorem eksponant ipsum1',
				text: '',
				name: 'eksponant1',
				id: 5,
			},
			{
				image: '7.jpg',
				title: 'lorem eksponant ipsum1',
				text: '',
				name: 'eksponant3',
				id: 6,
			},
			{
				image: '8.jpg',
				title: 'lorem eksponant ipsum1',
				text: '',
				name: 'eksponant1',
				id: 7,
			},
			{
				image: '9.jpg',
				title: 'lorem eksponant ipsum1',
				text: '',
				name: 'eksponant3',
				id: 8,
			},
			{
				image: '10.jpg',
				title: 'lorem eksponant ipsum1',
				text: '',
				name: 'eksponant1',
				id: 9,
			},
			{
				image: '11.jpg',
				title: 'lorem eksponant ipsum1',
				text: '',
				name: 'eksponant1',
				id: 10,
			},
			{
				image: '12.jpg',
				title: 'lorem eksponant ipsum1',
				text: '',
				name: 'eksponant1',
				id: 11,
			},
			{
				image: '13.jpg',
				title: 'lorem eksponant ipsum1',
				text: '',
				name: 'eksponant1',
				id: 12,
			},
			{
				image: '14.jpg',
				title: 'lorem eksponant ipsum1',
				text: '',
				name: 'eksponant1',
				id: 13,
			},
			{
				image: '15.jpg',
				title: 'lorem eksponant ipsum1',
				text: '',
				name: 'eksponant1',
				id: 14,
			},
		],
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {},
});
