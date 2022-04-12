<template>
	<div>
		<Header />
		<MuseumAllComponent />

		<div class="container my-5 p-5 rounded">
			<div class="row align-items-center">
				<div class="col-md-6 box">
					<el-carousel indicator-position="none" arrow="always" trigger="click">
						<el-carousel-item v-for="(item, i) in slides" :key="i">
							<img :src="item" alt="" class="w-100 h-100" />
						</el-carousel-item>
					</el-carousel>
				</div>
				<div class="col-md-6 text-end">
					<p class="title_all text-end">ИЗДАНИЯ</p>
					<p>
						Fusce at elementum nulla, vel semper metus. Curabitur et turpis eget
						ex malesuada finibus. Vestibulum ante ipsum primis in faucibus orci
						luctus et ultrices posuere cubilia curae; Proin vulputate neque non
						mollis ultrices.
					</p>
					<p>
						В короткое время с момента своего создания музей сумел пополнить не
						только свою главную экспозицию, но также и подготовил и провел ряд
						международных выставок: в Париже (в 1900 году) и в Милане (в 1906
						году). Также музей способствовал открытию музеев в Самарканде (1896
						год) и в Фергане (1899 год).
					</p>
					<p>
						Nam eu elit nec nisl faucibus dictum. Integer imperdiet sapien enim,
						eget rutrum neque mollis sit amet. In augue felis, elementum eu
						pellentesque id, condimentum non tortor. Suspendisse sit amet turpis
						vel ipsum dignissim blandit in vel risus.
					</p>
				</div>
			</div>
		</div>
		<div class="container bg-light p-5">
			<p class="title_all text-start">Title Books</p>
			<!-- <div class="d-flex flex-wrap mb-2">
				<el-button>All</el-button>
				<el-button>Exponant1</el-button>
				<el-button>Exponant2</el-button>
			</div> -->
			<form action="" class="mb-3">
				<input type="text" v-model="search" placeholder="Serach..." />
			</form>
			<div
				v-if="publications == ''"
				class="d-flex align-items-center justify-content-center h-100 w-100"
			>
				<div
					class="spinner-grow text-primary"
					style="width: 3rem; height: 3rem"
					role="status"
				></div>
			</div>
			<div class="row">
				<div
					v-for="(publication, i) in filteredBooks"
					:key="i"
					class="col-md-3 mb-4"
				>
					<div class="cards p-3">
						<div class="card_img" @click="showPublications(publication.id)">
							<img :src="publication.url" alt="" />
						</div>
						<div class="card_content">
							<el-rate
								class="my-3"
								v-model="smile"
								:texts="['Oops', 'Disappointed', 'Normal', 'Good', 'Great']"
								:key="i"
							>
							</el-rate>
							<h3>{{ publication.title }}</h3>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
								animi.
							</p>
						</div>
					</div>
				</div>
			</div>
			<!-- dialog -->

			<div v-if="publics">
				<el-dialog
					width="100%"
					title="Inner Dialog"
					:visible.sync="outerVisible"
					append-to-body
				>
					<div class="row align-items-center">
						<div class="col-md-6 mb-3 mb-md-0">
							<div class="modal_img">
								<img :src="publics.url" alt="" />
							</div>
						</div>
						<div class="col-md-6">
							<div class="modal_body">
								<h3>title books</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
									natus illum aut rem laudantium officiis omnis iusto. Doloribus
									ipsam obcaecati, quibusdam suscipit quidem iste autem rem enim
									alias veniam officia.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Quaerat alias, tempora quia cumque eum nemo quod deleniti
									reiciendis recusandae placeat ducimus facere sequi sint
									voluptas ut totam fugit consequuntur autem?
								</p>
							</div>
						</div>
					</div>
				</el-dialog>
			</div>

			<!-- dialog -->
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
	name: 'publicationView',
	components: { Header, Footer, MuseumAllComponent },
	data() {
		return {
			publications: [],
			publics: null,
			outerVisible: false,
			innerVisible: false,
			dialogVisible: false,
			slides: [
				'https://picsum.photos/id/235/600/350',
				'https://picsum.photos/id/235/600/350',
				'https://picsum.photos/id/236/600/350',
				'https://picsum.photos/id/237/600/350',
				'https://picsum.photos/id/238/600/350',
			],
			smile: null,
			iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'],
			search: '',
		};
	},
	mounted() {
		this.getPublications();
	},
	computed: {
		filteredBooks() {
			return this.publications.filter(publication =>
				publication.title.toLowerCase().includes(this.search.toLowerCase())
			);
		},
	},
	methods: {
		getPublications() {
			axios
				.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
				.then(res => {
					this.publications = res.data;
					console.log(this.publications);
				})
				.catch(error => {
					console.log(error);
				});
		},
		showPublications(id) {
			this.publications.forEach(el => {
				if (el.id == id) {
					this.publics = el;
				}
			});
			this.outerVisible = true;
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
	font-size: 1rem;
	border-radius: 5px;
	border-bottom: 3px solid #1989fa;
}
.cards {
	position: relative;
	z-index: 2;
	background-color: #fff;
	border: 1px solid #e5ecf5;
	padding: 20px;
	min-height: 222px;
	overflow: hidden;
	cursor: pointer;
	display: flex;
	flex-direction: column;
}
.cards .card_img {
	width: 100%;
	height: 200px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}
.card_img img {
	display: block;
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	transition: transform 0.2s ease-out;
	transform-origin: 50%;
}
.cards:hover .card_img img {
	transform: scale(1.2);
}
.card_content p {
	font-size: 14px;
	font-weight: 500;
	color: rgba(24, 24, 24, 0.4);
}
.card_content h3 {
	font-size: 16px;
	font-weight: 700;
	margin-bottom: 12px;
}
.modal_img {
	max-height: 300px;
	max-width: 300px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}
.modal_img img {
	width: 100%;
	border: 1px solid #e5ecf5;
	padding: 20px;
	border-radius: 16px;
}
.modal_body {
	border: 1px solid #e5ecf5;
	border-radius: 16px;
	padding: 20px;
}
</style>
