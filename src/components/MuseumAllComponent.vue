<template>
	<div class="allComponent py-5 mt-3">
		<el-carousel :interval="0" arrow="always" height="500px">
			<el-carousel-item v-for="item in 4" :key="item">
				<div class="container p-3">
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
									style="height: auto"
									src="../assets/Rectangle 2.png"
									alt=""
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
};
</script>
<style>
.allComponent {
	background-image: url('https://shm.ru/upload/iblock/ed9/_.jpg?v=v1648790040');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}
.el-carousel__container .el-carousel__arrow {
	top: 0;
	transform: translateY(0);
	background-color: #1989fa !important;
	border-radius: 0%;
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
		width: 400px;
		height: 300px;
	}
	.allComponent {
		text-align: center;
	}
}
</style>
