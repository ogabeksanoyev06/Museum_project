<template>
	<div class="allComponent py-5">
		<el-carousel :interval="3000" arrow="always" height="500px">
			<el-carousel-item v-for="(item, index) in museumAll" :key="index">
				<div class="container p-3 d-flex align-items-center">
					<div class="row align-items-center">
						<div class="col-md-6">
							<div>
								<p class="title">{{ $t('message.allMuseum.name') }}</p>
								<p class="name">{{ $t('message.allMuseum.title') }}</p>
								<p class="text">{{ $t('message.allMuseum.text') }}</p>
							</div>
						</div>
						<div class="col-md-6">
							<div class="img_museum">
								<img
									class="rounded img-fluid"
									:src="require('../assets/MuseumPicture/' + item.url)"
									alt="img"
								/>
							</div>
						</div>
					</div>
				</div>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>
<script>
export default {
	name: 'museumAllComponent',
	data() {
		return {
			museumAll: [{ url: '1.jpg' }, { url: '2.jpg' }, { url: '3.jpg' }],
		};
	},
};
</script>
<style scoped>
.allComponent {
	background-image: url('../assets/photo_2022-04-09_11-59-07.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center end;
	background-attachment: fixed;
}
.el-carousel__item {
	display: flex;
	align-items: center;
}

.allComponent .title {
	font-size: 30px;
	font-weight: 700;
	letter-spacing: 0.05em;
	color: #fff;
}
.allComponent .name {
	font-size: 65px;
	font-weight: 700;
	font-style: normal;
	color: #fff;
}
.allComponent .text {
	font-size: 16px;
	font-weight: 500;
	line-height: 1.3;
	color: #fff;
	letter-spacing: 1.2px;
}
@media (max-width: 768px) {
	.allComponent .title {
		font-size: 20px;
	}
	.allComponent .name {
		font-size: 25px;
	}
	.allComponent .text {
		font-size: 16px;
	}
	.img_museum img {
		width: 100%;
	}
	.allComponent {
		text-align: center;
	}
}
</style>
