<template>
	<div>
		<Header />
		<MuseumAllComponent />
		<div class="my-5 pt-5" style="background-color: #435b71">
			<el-carousel :interval="0" arrow="always" height="600px">
				<el-carousel-item v-for="(item, index) in slides" :key="index">
					<div class="h-100 container d-flex align-items-center">
						<div class="mt-3 row justify-content-center align-items-center">
							<div class="col-lg-6 mb-2 mb-lg-0">
								<img
									:src="item"
									alt=""
									class="img-fluid w-100"
									style="max-width: 600px; max-height: 350px"
								/>
							</div>
							<div class="col-lg-6 slide-img">
								<div class="row flex-column">
									<div class="d-flex justify-content-center mb-2 box">
										<img :src="item" alt="" class="me-2 img-fluid" />
										<img :src="item" alt="" class="img-fluid" />
									</div>
									<p class="text-white text-center">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Morbi non scelerisque enim, in tincidunt leo.
									</p>
									<small class="text-center" style="color: #95abc6">
										Maecenas eu aliquet purus. Integer vel convallis felis. Cras
										eget vestibulum felis. Nulla iaculis mauris quis aliquam
										finibus. Quisque tempus nisi at vehicula ultrices. Aliquam
										sollicitudin augue ut enim venenatis, id iaculis ante
										ornare. Mauris vehicula convallis sem, ac varius quam
										sagittis et.
									</small>
								</div>
							</div>
						</div>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>

		<QuestionView />
		<Maps />
		<Footer />
	</div>
</template>
<script>
import QuestionView from '../components/QuestionView.vue';
import Maps from '../components/Maps.vue';
import Footer from '../components/Footer.vue';
import Header from '@/components/Header.vue';
import MuseumAllComponent from '@/components/MuseumAllComponent.vue';
export default {
	name: 'sectionsView',
	data() {
		return {
			slides: [
				'https://picsum.photos/id/234/600/350',
				'https://picsum.photos/id/235/600/350',
				'https://picsum.photos/id/236/600/350',
				'https://picsum.photos/id/237/600/350',
				'https://picsum.photos/id/238/600/350',
			],
			visibleSlide: 0,
		};
	},
	computed: {
		slidesLen() {
			return this.slides.length;
		},
	},

	components: {
		Header,
		Footer,
		MuseumAllComponent,
		Maps,
		QuestionView,
	},
};
</script>

<style scoped>
.box > img {
	width: 250px;
}
@media (max-width: 768px) {
	.slide-img img {
		max-width: 160px !important;
	}
}
</style>
