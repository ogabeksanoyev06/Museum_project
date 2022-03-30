<template>
	<div>
		<Header />
		<MuseumAllComponent />
		<div class="container my-5 p-5 rounded">
			<div class="row align-items-center">
				<div class="col-md-6 box">
					<el-carousel indicator-position="none" arrow="always" trigger="click">
						<el-carousel-item v-for="item in slides" :key="item">
							<img :src="item" alt="" class="" />
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
		<div class="container">
			<div class="product"><product-list></product-list>ain</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import Footer from '../components/Footer.vue';
import Header from '@/components/Header.vue';
import MuseumAllComponent from '@/components/MuseumAllComponent.vue';
import ProductList from '../components/shopCard/ProductList.vue';
export default {
	components: { Header, Footer, MuseumAllComponent, ProductList },
	data() {
		return {
			slides: [
				'https://picsum.photos/id/235/600/350',
				'https://picsum.photos/id/235/600/350',
				'https://picsum.photos/id/236/600/350',
				'https://picsum.photos/id/237/600/350',
				'https://picsum.photos/id/238/600/350',
			],
		};
	},
};
</script>
<style scoped></style>
