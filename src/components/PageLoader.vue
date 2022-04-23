<template>
	<div v-if="!isloaded">
		<div class="page-loader"></div>
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
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 999999999999999999;
	background-color: #ffffff;
	background-position: center center;
	background-repeat: no-repeat;
	background-image: url('http://st.ourhtmldemo.com/new/Crystalo/images/icon/preloader.gif');
}
</style>
