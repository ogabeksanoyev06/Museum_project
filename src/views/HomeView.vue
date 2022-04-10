<template>
	<div class="">
		<Header />
		<MuseumAllComponent />
		<panaroma-view />
		<div class="mt-4 box">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-md-6">
						<div class="d-flex flex-wrap justify-content-center py-5">
							<img
								class="img-fluid m-1"
								src="../assets/Rectangle 45.png"
								alt=""
							/>
							<img
								class="img-fluid m-1"
								src="../assets/Rectangle 46.png"
								alt=""
							/>
							<img
								class="img-fluid m-1"
								src="../assets/Rectangle 47.png"
								alt=""
							/>
							<img
								class="img-fluid m-1"
								src="../assets/Rectangle 48.png"
								alt=""
							/>
						</div>
					</div>
					<div class="col-md-6 mt-5 mt-md-0">
						<p>
							{{ $t('message.home.title') }}
							<!-- Немного <span class="text-primary">о нашей истории</span> и в
							целом
							<span class="text-primary">о нас</span> -->
						</p>

						<p class="text-center">
							{{ $t('message.home.text') }}
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- carusel photo -->
		<div class="container my-5">
			<p class="title_all">• Галерея</p>
		</div>
		<!-- carusel photo -->

		<!-- question savollar -->
		<div class="my-5 container"><Question /></div>
		<!-- question savollar -->

		<!-- email and maps -->
		<div class="container">
			<Maps />
		</div>
		<Footer />
	</div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import MuseumAllComponent from '../components/MuseumAllComponent.vue';
import Question from '@/components/QuestionView.vue';
import Maps from '../components/Maps.vue';
import PanaromaView from '../components/PanaromaView.vue';
export default {
	name: 'HomeView',
	data() {
		return {
			activeNames: [],
		};
	},

	components: {
		Header,
		Footer,
		MuseumAllComponent,
		Question,
		Maps,
		PanaromaView,
	},
};
</script>
<style scoped>
.box p:nth-child(1) {
	font-size: 35px;
	font-weight: 700;
}
.box p:nth-child(2) {
	font-size: 18px;
	font-weight: 500;
}
.box p:nth-child(3) {
	font-size: 18px;
	font-weight: 500;
}
@media (max-width: 768px) {
	.box p:nth-child(1) {
		font-size: 22px;
	}
	.box p:nth-child(2) {
		font-size: 14px;
	}
	.box p:nth-child(3) {
		font-size: 14px;
	}
} ;
</style>
