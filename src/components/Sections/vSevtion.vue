<template>
	<div>
		<Header />
		<Footer />
		{{ this.sectionId }}
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
