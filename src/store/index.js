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
		object: [
			{
				title: 'Где находится музей истории Узбекистана?',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum quia dolorem dolores sint, repellendus error quos architecto blanditiis impedit!',
				name: 1,
			},
			{
				title: 'Когда музей окртыт для посещений?',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum quia dolorem dolores sint, repellendus error quos architecto blanditiis impedit!',
				name: 2,
			},
			{
				title: 'Сколько стоит билет? ',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum quia dolorem dolores sint, repellendus error quos architecto blanditiis impedit!',
				name: 3,
			},
			{
				title: 'Как записаться на экскурсию?',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum quia dolorem dolores sint, repellendus error quos architecto blanditiis impedit!',
				name: 4,
			},
			{
				title: 'Куда обращаться если возникли личные вопросы?',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum quia dolorem dolores sint, repellendus error quos architecto blanditiis impedit!',
				name: 5,
			},
			{
				title: 'Как можно приобрести электронный билет?',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum quia dolorem dolores sint, repellendus error quos architecto blanditiis impedit!',
				name: 6,
			},
			{
				title: 'На каких языках проводится экскурсия?',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum quia dolorem dolores sint, repellendus error quos architecto blanditiis impedit!',
				name: 7,
			},
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
				name: 'eksponant1',
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
				name: 'eksponant1',
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
				name: 'eksponant1',
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
