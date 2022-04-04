<template>
	<div>
		<Header />
		<MuseumAllComponent />
		<div class="container my-5 p-5 rounded">
			<div class="row align-items-center">
				<div class="col-md-6">
					<p class="title_all text-start">
						<span class="text-primary">Выставки</span> музея истории Узбекистана
					</p>
					<p>
						<span class="fw-bold"
							>Государственный Музей Истории Узбекистана</span
						>
						был основан 12 июля 1876 года в качестве Народного Музея Туркестана.
					</p>
					<p>
						В короткое время с момента своего создания музей сумел пополнить не
						только свою главную экспозицию, но также и подготовил и провел ряд
						международных выставок: в Париже (в 1900 году) и в Милане (в 1906
						году). Также музей способствовал открытию музеев в Самарканде (1896
						год) и в Фергане (1899 год).
					</p>
				</div>
				<div class="col-md-6 box">
					<el-carousel indicator-position="none" arrow="always" trigger="click">
						<el-carousel-item v-for="(item, index) in slides" :key="index">
							<img :src="item" alt="" class="w-100 h-100" />
						</el-carousel-item>
					</el-carousel>
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
export default {
	name: 'ImpressionsView',
	components: { Header, Footer, MuseumAllComponent },
	data() {
		return {
			slides: [
				'https://picsum.photos/id/235/600/350',
				'https://picsum.photos/id/235/600/350',
				'https://picsum.photos/id/236/600/350',
				'https://picsum.photos/id/237/600/350',
				'https://picsum.photos/id/238/600/350',
			],
			visibleSlide: 0,
		};
	},
};
</script>
<style scoped>
.el-carousel__container img {
	width: 100%;
	height: 100%;
}
@media (max-width: 400px) {
	.el-carousel__container {
		height: 250px !important;
	}
}
</style>
