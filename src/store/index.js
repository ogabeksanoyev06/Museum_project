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
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {},
});
