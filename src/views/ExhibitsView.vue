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
				<div class="row ml-0 mr-0">
					<div
						v-for="(exhibit, i) in exhibits"
						:key="i"
						class="col-sm-12 col-md-4 col-lg-3 p-2"
					>
						<div class="cards">
							<div class="card_item card_grow w-100">
								<div class="card_img">
									<img :src="exhibit.url" class="card-img-top" alt="" />
								</div>
								<div class="card_body">
									<h5 class="card-title">{{ exhibit.title }}</h5>
									<p class="card-text mb-4">
										Lorem ipsum dolor sit amet, consectetur adipisicing
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
								<img
									style="width: 200px; height: 200px"
									:src="exp.url"
									class="card-img-top"
									alt=""
								/>
							</div>
							<div class="col-md-6">
								<p class="mt-2 mt-md-0">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Repellendus necessitatibus ab, commodi facilis delectus cum
									quia minima repudiandae, quo assumenda, distinctio iste dolore
									fugiat ad architecto quod itaque molestias natus?
								</p>
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
			exp: null,
			exhibits: [],
			loading: true,
		};
	},
	mounted() {
		this.getExhibits();
	},
	methods: {
		showExponant(id) {
			this.exhibits.forEach(el => {
				if (el.id == id) {
					this.exp = el;
				}
			});
			this.outerVisible = true;
		},

		getExhibits() {
			axios
				.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
				.then(res => {
					this.exhibits = res.data;
					console.log(this.exhibits);
				})
				.catch(error => {
					console.log(error);
				});
		},
	},
};
</script>

<style scoped>
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
}
.card-img-top {
	flex-shrink: 0;
	width: 100%;
}
.card_body {
	flex: 1 1 auto;
	min-height: 1px;
	padding: 1.25rem;
}
.card_body h5 {
	font-size: 1.28rem;
	color: #201e1e;
}
.card_body .card-text {
	color: #b3b5c2;
	font-size: 0.9rem;
	height: 55px;
	overflow: hidden;
}
.card_item:active,
.card_item:focus,
.card_item:hover {
	transform: scale(1.05);
	z-index: 1010;
	border: 0;
	box-shadow: 0 2px 36px rgb(0 0 0 / 19%);
	cursor: pointer;
}
img {
	vertical-align: middle;
}
</style>
