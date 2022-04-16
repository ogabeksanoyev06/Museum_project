<template>
	<div class="vSections">
		<VueSlickCarousel v-bind="settings" class="container vSectionCard">
			<div class="vCards" v-for="(item, i) in sectionImg" :key="i">
				<div class="vCards_hover">
					<div class="content">
						<a href="#">
							<div class="content_overlay"></div>
							<img
								:src="require('@/assets/MuseumPicture/' + item.url)"
								alt=""
							/>
							<div class="content-details">
								<p>Earth drawing andekseks design</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</VueSlickCarousel>
	</div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
	name: 'DepartamentsView',
	components: { VueSlickCarousel },
	data() {
		return {
			settings: {
				arrows: true,
				dots: true,
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 4000,
				cssEase: 'linear',
			},
			sectionImg: [
				{ url: '11.jpg' },
				{ url: '12.jpg' },
				{ url: '13.jpg' },
				{ url: '14.jpg' },
				{ url: '15.jpg' },
				{ url: '16.jpg' },
				{ url: '17.jpg' },
				{ url: '18.jpg' },
			],
		};
	},
	methods: {},
	computed: {},
	watch: {},
};
</script>
<style scoped>
.vSections {
	background-color: #243c52;
	padding: 30px 0;
	overflow: hidden;
}
.vSectionCard {
	display: flex;
	justify-content: center;
	align-items: center;
	transform: skew(-7deg);
}
.vCards {
	position: relative;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
	transition: all 1s ease-in-out;
	height: 200px;
	max-width: 350px;
	position: relative;
}

.vSectionCard .vCards_hover {
	width: 100%;
	height: 100%;
}
.vSectionCard .content {
	position: relative;
	width: 100%;
	height: 100%;
	margin: auto;
	overflow: hidden;
}
.content_overlay {
	background: rgba(0, 0, 0, 0.5);
	position: absolute;
	transform: translateY(-100%);
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	opacity: 0;
	-webkit-transition: all 0.4s ease-in-out 0s;
	-moz-transition: all 0.4s ease-in-out 0s;
	transition: all 0.4s ease-in-out 0s;
}
.vSectionCard .vCards .content img {
	width: 100%;
	height: 100%;
	transition: all 1s ease-in-out;
	object-fit: cover;
}
.content-details {
	position: absolute;
	text-align: center;
	padding-left: 1em;
	padding-right: 1em;
	width: 100%;
	top: 0%;
	left: 50%;
	opacity: 0;
	transform: translate(-50%, -50%);
	transition: all 0.3s ease-in-out 0s;
	color: #fff;
}
.content:hover .content_overlay {
	opacity: 1;
	transform: translateY(0%);
}
.content:hover .content-details {
	top: 50%;
	opacity: 1;
}
</style>
