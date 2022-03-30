<template>
	<div class="">
		<div class="container">
			<div class="row">
				<product-card></product-card>
				<product-card></product-card>
			</div>
		</div>
	</div>
</template>

<script>
import ProductCard from '../shopCard/ProductCard.vue';
export default {
	name: 'productList',
	data() {
		return {};
	},
	components: { ProductCard },
};
</script>

<style scoped></style>
