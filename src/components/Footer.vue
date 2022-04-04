<template>
	<div class="footer">
		<div class="top_window">
			<el-button
				type="primary"
				icon="el-icon-caret-top"
				circle
				@click="TopWindow"
			></el-button>
		</div>
		<div class="container footer_menu">
			<div @click="goTo('home')" class="header_logo" style="cursor: pointer">
				<div class="d-flex align-items-center">
					<img src="../assets/logo.png" alt="logo" class="me-2" />
					<span>MUSEUM</span>
				</div>
			</div>
			<ul class="d-md-flex footer_items">
				<li
					class="me-0 me-md-3"
					v-for="(item, index) in items"
					:class="$route.name === item.name ? 'activeClass' : ''"
					:key="index"
				>
					<router-link
						@click="$route.name === item.name"
						:to="{ name: item.name }"
						>{{ item.title }}</router-link
					>
				</li>
			</ul>
			<ul class="d-flex align-items-center footer_t">
				<li>
					<a href="#"><img src="../assets/Vector.png" alt="telegram" /></a>
				</li>
				<li class="mx-2">
					<a href="#"><img src="../assets/Vector (1).png" alt="instagram" /></a>
				</li>
				<li>
					<a href="#"><img src="../assets/Vector (2).png" alt="facebook" /></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FooterView',
	data() {
		return {
			items: this.$store.state.items,
		};
	},

	methods: {
		goTo(page) {
			page === 'home' ? this.$router.push('/') : '';
		},
		TopWindow() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		},
	},
};
</script>

<style scoped>
.footer {
	background-color: #fafafa;
	padding: 10px 0;
}
.top_window {
	position: fixed;
	bottom: 30px;
	right: 30px;
	z-index: 999;
}
.footer_menu {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.footer_items li a {
	position: relative;
	height: 100%;
	font-size: 17px;
	font-weight: 600;
	color: #95abc6;
	letter-spacing: 1.2px;
}
.footer_items li a:hover::before {
	position: absolute;
	content: '';
	left: 50%;
	bottom: -10px;
	width: 4px;
	height: 4px;
	border-radius: 50%;
	transform: translate(-50%, -50%);
	background-color: #1989fa;
}
.footer_items li a:hover {
	color: #1989fa;
	opacity: 1;
}
.footer .footer_t li {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5f8fd;
	width: 32px;
	height: 32px;
	border-radius: 50%;
}
.footer .footer_t li a {
	display: flex;
	justify-content: center;
	width: 100%;
}
@media (max-width: 768px) {
	.footer_menu {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
	}
	.footer_items {
		margin-top: 20px;
	}
	.footer_items li {
		margin-right: 0 !important;
		margin-bottom: 10px;
	}
}
</style>
