<template>
	<div>
		<Header />
		<h1 class="text-center">Bo'lim:{{ this.sectionId }}</h1>
		<Footer />
	</div>
</template>
<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
export default {
	name: 'vSection',
	components: { Header, Footer },
	data() {
		return { sectionId: this.$route.params.id };
	},
};
</script>
<style scoped></style>
