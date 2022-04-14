<template>
	<div v-if="!isloaded">
		<div class="page-loader">
			<div class="wave"></div>
			<div class="wave"></div>
			<div class="wave"></div>
			<div class="wave"></div>
			<div class="wave"></div>
			<div class="wave"></div>
			<div class="wave"></div>
			<div class="wave"></div>
			<div class="wave"></div>
			<div class="wave"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'pageLoader',
	data: () => {
		return {
			isloaded: false,
		};
	},
	mounted() {
		document.onreadystatechange = () => {
			if (document.readyState == 'complete') {
				this.isloaded = true;
			}
		};
	},
};
</script>

<style lang="scss" scoped>
// -----------------------------------------------------
.page-loader {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(255, 255, 255, 0.3);
	z-index: 999999;
}
// -----------------------------------------------------
.wave {
	width: 8px;
	height: 100px;
	background: linear-gradient(50deg, #1989fa, #fff);
	margin: 10px;
	animation: wave 1s linear infinite;
	border-radius: 20px;
}
.wave:nth-child(2) {
	animation-delay: 0.1s;
}
.wave:nth-child(3) {
	animation-delay: 0.2s;
}
.wave:nth-child(4) {
	animation-delay: 0.3s;
}
.wave:nth-child(5) {
	animation-delay: 0.4s;
}
.wave:nth-child(6) {
	animation-delay: 0.5s;
}
.wave:nth-child(7) {
	animation-delay: 0.6s;
}
.wave:nth-child(8) {
	animation-delay: 0.7s;
}
.wave:nth-child(9) {
	animation-delay: 0.8s;
}
.wave:nth-child(10) {
	animation-delay: 0.9s;
}

@keyframes wave {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1);
	}
	100% {
		transform: scale(0);
	}
}
</style>
