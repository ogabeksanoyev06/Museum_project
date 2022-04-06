<template>
	<div id="app">
		<page-loader></page-loader>
		<router-view></router-view>
	</div>
</template>
<script>
import PageLoader from './components/PageLoader.vue';
export default {
	components: { PageLoader },
	name: 'App',
};
</script>

<style>
.shop_kar svg path {
	fill: #1989fa;
}
.shop_save svg path {
	stroke: #ff5454;
}
* {
	margin: 0;
	padding: 0;
}
a,
a:hover {
	text-decoration: none;
}
ul {
	list-style: none;
	padding: 0;
	margin-bottom: 0;
}
.title_all {
	font-size: 35px;
	font-weight: 700;
	color: #1989fa;
	text-align: center;
}

#app {
	@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap');
	font-weight: 500;
	font-size: 16px;
	color: #2c3e50;
}
@media (max-width: 768px) {
	.title_all {
		font-size: 26px;
	}
}
</style>
