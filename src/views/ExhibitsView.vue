<template>
	<div>
		<Header />
		<MuseumAllComponent />
		<v-main-eksponant />
		<div class="p-5 rounded my-5">
			<p class="title_all">• Экспонаты</p>

			<div
				v-if="exhibits == ''"
				class="d-flex align-items-center justify-content-center h-100 w-100"
			>
				<div
					class="spinner-grow text-primary"
					style="width: 3rem; height: 3rem"
					role="status"
				></div>
			</div>
			<div class="container">
				<div class="tabs_section">
					<div class="d-flex align-items-center flex-wrap">
						<p
							style="
								font-size: 25px;
								font-weight: 700;
								font-family: inherit;
								color: black;
							"
						>
							Bizning Eksponantlar
						</p>
					</div>
					<div class="tab__main mb-5">
						<div class="d-flex align-items-center flex-column flex-md-row">
							<label
								v-for="tab_item in tab_items"
								:key="tab_item.id"
								:class="tab_item.id === activeId ? 'activeTab' : ''"
								@click="changeTab(tab_item.id)"
							>
								<input
									type="radio"
									v-model="selectedCategory"
									:value="tab_item.name"
								/>
								{{ tab_item.name }}</label
							>
						</div>
					</div>
				</div>
				<!-- <form action="" class="mb-3">
					<input type="text" v-model="search" placeholder="Serach..." />
				</form> -->
				<div class="row ml-0 mr-0">
					<div
						v-for="(exhibit, i) in filteredProducts"
						:key="i"
						class="col-sm-12 col-md-4 col-lg-3 p-2"
					>
						<div class="cards">
							<div class="card_item card_grow w-100">
								<div class="card_img card-img-top">
									<img :src="exhibit.image" class="" alt="" />
								</div>
								<div class="card_body">
									<h5 class="card-title">{{ titleSlice(exhibit.title) }}</h5>
									<p class="card-text mb-4">
										{{
											textSlice(
												'Lorem ipsum dolor sit amet, consectetur adipisicing'
											)
										}}
									</p>
									<el-button class="w-100" @click="showExponant(exhibit.id)"
										>More</el-button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-if="exp">
					<el-dialog
						width="100%"
						title="Outer Dialog"
						:visible.sync="outerVisible"
					>
						<div class="row align-items-center">
							<div class="col-md-6 d-flex justify-content-center">
								<div class="cart_img_modal">
									<img :src="exp.image" class="w-100" alt="" />
								</div>
							</div>
							<div class="col-md-6">
								<p class="mt-2 mt-md-0">{{ exp.title }}</p>
								<p class="">
									{{ exp.description }}
								</p>
							</div>
						</div>
					</el-dialog>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import Footer from '../components/Footer.vue';
import Header from '@/components/Header.vue';
import MuseumAllComponent from '@/components/MuseumAllComponent.vue';
import axios from 'axios';
export default {
	name: 'ExhibitsView',
	components: { Header, Footer, MuseumAllComponent },

	data() {
		return {
			tab_items: [
				{ name: 'All', id: 0 },
				{ name: "men's clothing", id: 1 },
				{ name: 'jewelery', id: 2 },
				{ name: 'electronics', id: 3 },
				{ name: "women's clothing", id: 4 },
			],
			selectedCategory: 'All',
			innerVisible: false,
			outerVisible: false,
			activeId: 0,
			exhibits: [],
			sorteProducts: [],
			exp: null,
			loading: true,
			search: '',
		};
	},
	mounted() {
		this.getExponant();
	},
	computed: {
		filteredProducts: function () {
			var vm = this;
			var category = vm.selectedCategory;

			if (category === 'All') {
				return vm.exhibits;
			} else {
				return vm.exhibits.filter(function (person) {
					return person.category === category;
				});
			}
		},

		// filterEksponant() {
		// 	return this.exhibits.filter(exhibit =>
		// 		exhibit.title.toLowerCase().includes(this.search.toLowerCase())
		// 	);
		// },
	},
	methods: {
		changeTab(id) {
			this.activeId = id;
		},

		sortByCategories(category) {
			this.sorteProducts = [];
			this.exhibits.map(item => {
				if (item.category === category.name) {
					this.sorteProducts.push(item);
				}
			});
		},

		showExponant(id) {
			this.exhibits.forEach(el => {
				if (el.id == id) {
					this.exp = el;
				}
			});
			this.outerVisible = true;
		},
		titleSlice(text) {
			if (text.length > 20) {
				return text.slice(0, 12) + '...';
			}
		},
		textSlice(text) {
			if (text.length > 50) {
				return text.slice(0, 40) + '...';
			}
		},
		getExponant() {
			axios
				.get('https://fakestoreapi.com/products')
				.then(res => {
					this.exhibits = res.data;
					console.log(this.exhibits);
				})
				.catch(err => {
					console.log(err);
				});
		},
	},
};
</script>

<style scoped>
form input {
	width: 20rem;
	padding: 0.2rem;
	border: none;
	outline: none;
	font-size: 1.2rem;
	border-radius: 5px;
	border-bottom: 3px solid #1989fa;
}
.tab__main input {
	display: none;
}
.tab__main label {
	padding: 15px;
	margin: 0 15px;
	font-weight: 600;
	font-size: 16px;
	line-height: 26px;
	color: #95abc6;
	cursor: pointer;
	background-color: transparent;
}
.el-dialog {
	width: 100% !important;
}
.cards .card_item {
	padding: 1.8rem;
	transform: scale(1);
}
.card_grow {
	display: inline-block;
	vertical-align: middle;
	transform: perspective(1px) translateZ(0);
	box-shadow: 0 0 1px transparent;
	transition-duration: 0.3s;
	transition-property: transform;
}
.card_item {
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	background-color: #fff;
	box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.2);
	border-radius: 8px;
	transition: all 0.5s;
}
.card-img-top {
	width: 100%;
	height: 200px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}
.cart_img_modal {
	width: 100%;
	max-height: 250px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}
.cart_img_modal img {
	display: block;
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: contain;
}
.card-img-top img {
	display: block;
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: contain;
	transition: transform 0.2s ease-out;
	transform-origin: 50%;
}
.card_body {
	flex: 1 1 auto;
	min-height: 1px;
	padding: 1.25rem;
}
.card_body h5 {
	font-size: 22px;
	font-weight: 700;
	color: #091e42 !important;
}
.card_body .card-text {
	color: #091e42 !important;
	font-size: 0.9rem;
	max-height: 15rem;
	line-height: 20px;
	overflow: hidden;
}
.card_item:active,
.card_item:focus,
.card_item:hover {
	z-index: 1010;
	box-shadow: 2px 5px 25px -4px rgba(0, 0, 0, 0.35);
	cursor: pointer;
}
.card_item:hover .card-img-top img {
	transform: scale(1.2);
}
img {
	vertical-align: middle;
}
.tab__main .tab__item {
	padding: 0;
	margin: 0 10px;
	padding: 20px 15px;
	font-weight: 600;
	font-size: 16px;
	margin: 0 10px;
	color: #95abc6;
	cursor: pointer;
}
.tab__main .tab__item:hover {
	background-color: #e3e8ee;
	border-radius: 15px;
}
.tab__main {
	border: 1px solid #e5ecf5;
	border-radius: 16px;
	overflow: hidden;
	width: 100%;
}
.activeTab {
	color: #232c3c !important;
	border-bottom: 1px solid #008ae4;
	border-top: 1px solid #008ae4;
}
</style>
