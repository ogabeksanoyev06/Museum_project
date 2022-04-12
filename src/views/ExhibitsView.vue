<template>
	<div>
		<Header />
		<MuseumAllComponent />
		<div style="background-color: #f5f9fd" class="p-5 rounded my-5">
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
				<form action="" class="mb-3">
					<input type="text" v-model="search" placeholder="Serach..." />
				</form>
				<div class="row ml-0 mr-0">
					<div
						v-for="(exhibit, i) in filterEksponant"
						:key="i"
						class="col-sm-12 col-md-4 col-lg-3 p-2"
					>
						<div class="cards">
							<div class="card_item card_grow w-100">
								<div class="card_img card-img-top">
									<img :src="exhibit.url" class="" alt="" />
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
							<div
								class="col-md-6 d-flex justify-content-center cart_img_modal"
							>
								<img :src="exp.url" class="w-100" alt="" />
							</div>
							<div class="col-md-6">
								<p class="mt-2 mt-md-0">{{ exp.title }}</p>
								<p class="">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Repellendus necessitatibus ab, commodi facilis delectus cum
									quia minima repudiandae, quo assumenda, distinctio iste dolore
									fugiat ad architecto quod itaque molestias natus?
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
			dialogVisible: false,
			outerVisible: false,
			innerVisible: false,
			exhibits: [],
			exp: null,
			loading: true,
			search: '',
		};
	},
	mounted() {
		this.getExponant();
	},
	computed: {
		filterEksponant() {
			return this.exhibits.filter(exhibit =>
				exhibit.title.toLowerCase().includes(this.search.toLowerCase())
			);
		},
		// 	filteredProducts() {
		// 		if (this.sorteProducts.length > 0) {
		// 			return this.sorteProducts;
		// 		} else {
		// 			return this.$store.state.eksponant;
		// 		}
		// 	},
	},
	methods: {
		// sortByCategories(category) {
		// 	this.sorteProducts = [];
		// 	this.sorteProducts = this.$store.state.eksponant.map(item => {
		// 		if (category.name == item.name) {
		// 			this.sorteProducts.push(item);
		// 		}
		// 	});
		// },
		filteredEksponant() {
			return this.$store.state.eksponant.filter(exhibit =>
				exhibit.title.toLowerCase().includes(this.search.toLowerCase())
			);
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
				.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
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
	max-height: 300px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}
.cart_img_modal img {
	height: 100%;
}
.card-img-top img {
	display: block;
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
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
</style>
