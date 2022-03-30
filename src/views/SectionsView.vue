<template>
	<div>
		<Header />
		<MuseumAllComponent />
		<div class="container my-5">
			<carusel-one @next="next" @prev="prev">
				<carusel-slide
					v-for="(slide, index) in slides"
					:key="slide"
					:index="index"
					:visibleSlide="visibleSlide"
				>
					<div
						class="row flex-md-row flex-column justify-content-center align-items-center"
					>
						<div class="col-lg-6 mb-5 mb-lg-0">
							<img
								:src="slide"
								alt=""
								class="img-fluid w-100"
								style="max-width: 600px"
							/>
						</div>
						<div class="col-lg-6 slide-img">
							<div class="row flex-column">
								<div class="d-flex justify-content-center mb-2 box">
									<img :src="slide" alt="" class="me-2 img-fluid" />
									<img :src="slide" alt="" class="img-fluid" />
								</div>
								<p class="text-primary text-center">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
									non scelerisque enim, in tincidunt leo.
								</p>
								<small class="text-center" style="color: #95abc6">
									Maecenas eu aliquet purus. Integer vel convallis felis. Cras
									eget vestibulum felis. Nulla iaculis mauris quis aliquam
									finibus. Quisque tempus nisi at vehicula ultrices. Aliquam
									sollicitudin augue ut enim venenatis, id iaculis ante ornare.
									Mauris vehicula convallis sem, ac varius quam sagittis et.
								</small>
							</div>
						</div>
					</div>
				</carusel-slide>
			</carusel-one>
		</div>

		<QuestionView />
		<Maps />
		<Footer />
	</div>
</template>
<script>
import CaruselOne from '../components/CaruselVue/CaruselOne.vue';
import CaruselSlide from '../components/CaruselVue/CaruselSlide.vue';
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
	methods: {
		next() {
			if (this.visibleSlide >= this.slidesLen - 1) {
				this.visibleSlide = 0;
			} else {
				this.visibleSlide++;
			}
		},
		prev() {
			if (this.visibleSlide <= 0) {
				this.visibleSlide = this.slidesLen - 1;
			} else {
				this.visibleSlide--;
			}
		},
	},
	components: {
		Header,
		Footer,
		MuseumAllComponent,
		Maps,
		QuestionView,
		CaruselSlide,
		CaruselOne,
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
