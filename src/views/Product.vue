<template>
	<div>
		<Header />
		<div class="container">
			<div class="praduct_cards p-4 my-5 rounded">
				<div class="row align-items-center">
					<div class="col-md-5">
						<div class="card_img">
							<img src="../assets/12.png" alt="" class="card-img-top rounded" />
						</div>
					</div>
					<div class="col-md-7">
						<div class="card_about p-2">
							<div class="card_title"><p>Card title</p></div>
							<div class="card_text">
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Deleniti sapiente saepe, distinctio quaerat eius maxime ipsam,
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Soluta explicabo quod rem, quisquam quia, ipsum voluptates
									facilis deleniti tempora inventore ratione harum est
									excepturi, quae aliquid quos autem reprehenderit. Doloremque!
								</p>
							</div>
							<el-rate
								class="my-3"
								v-model="smile"
								:texts="['Oops', 'Disappointed', 'Normal', 'Good', 'Great']"
								show-text
							>
							</el-rate>
							<div class="card_price mb-3">
								<span class="price">12000 сўм</span>
							</div>
							<div class="d-flex justify-content-between">
								<el-button class="w-50">
									<span class="shop_save"
										><svg
											data-v-398c99f6=""
											width="24"
											height="22"
											viewBox="0 0 24 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											--&gt;
											<path
												data-v-398c99f6=""
												d="M20.4578 3.59133C19.9691 3.08683 19.3889 2.68663 18.7503 2.41358C18.1117 2.14054 17.4272 2 16.7359 2C16.0446 2 15.3601 2.14054 14.7215 2.41358C14.0829 2.68663 13.5026 3.08683 13.0139 3.59133L11.9997 4.63785L10.9855 3.59133C9.99842 2.57276 8.6596 2.00053 7.26361 2.00053C5.86761 2.00053 4.52879 2.57276 3.54168 3.59133C2.55456 4.6099 2 5.99139 2 7.43187C2 8.87235 2.55456 10.2538 3.54168 11.2724L4.55588 12.3189L11.9997 20L19.4436 12.3189L20.4578 11.2724C20.9467 10.7681 21.3346 10.1694 21.5992 9.51045C21.8638 8.85148 22 8.14517 22 7.43187C22 6.71857 21.8638 6.01225 21.5992 5.35328C21.3346 4.69431 20.9467 4.09559 20.4578 3.59133V3.59133Z"
												stroke="#95ABC6"
												stroke-width="2.1"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path></svg
									></span>
									Tanlanganga</el-button
								>
								<el-button class="w-50"
									><span class="me-2 shop_kar">
										<svg
											data-v-398c99f6=""
											width="21"
											height="21"
											viewBox="0 0 21 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												data-v-398c99f6=""
												d="M19 14H5C4.73478 14 4.48043 13.8946 4.29289 13.7071C4.10536 13.5196 4 13.2652 4 13C4 12.7348 4.10536 12.4804 4.29289 12.2929C4.48043 12.1054 4.73478 12 5 12H15.44C16.1087 12 16.7582 11.7767 17.2854 11.3654C17.8126 10.9542 18.1873 10.3786 18.35 9.73L20 3.24C20.0375 3.09241 20.0407 2.93821 20.0095 2.78917C19.9783 2.64013 19.9135 2.50018 19.82 2.38C19.7227 2.25673 19.5978 2.1581 19.4554 2.09208C19.3129 2.02606 19.1569 1.99452 19 2H4.76C4.55369 1.41645 4.17193 0.910998 3.66707 0.552938C3.1622 0.194879 2.55894 0.00173951 1.94 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H1.94C2.16843 1.99334 2.39226 2.06513 2.57421 2.20341C2.75615 2.34169 2.88525 2.53812 2.94 2.76L3 3.24L4.73 10C3.93435 10.0358 3.18551 10.3862 2.64822 10.9741C2.11093 11.5621 1.8292 12.3394 1.865 13.135C1.9008 13.9306 2.25121 14.6795 2.83914 15.2168C3.42707 15.7541 4.20435 16.0358 5 16H5.18C5.01554 16.4531 4.96269 16.9392 5.02593 17.4171C5.08917 17.895 5.26665 18.3506 5.54332 18.7454C5.81999 19.1401 6.18772 19.4624 6.61535 19.6849C7.04299 19.9074 7.51795 20.0235 8 20.0235C8.48205 20.0235 8.95701 19.9074 9.38465 19.6849C9.81228 19.4624 10.18 19.1401 10.4567 18.7454C10.7334 18.3506 10.9108 17.895 10.9741 17.4171C11.0373 16.9392 10.9845 16.4531 10.82 16H13.18C13.0155 16.4531 12.9627 16.9392 13.0259 17.4171C13.0892 17.895 13.2666 18.3506 13.5433 18.7454C13.82 19.1401 14.1877 19.4624 14.6154 19.6849C15.043 19.9074 15.5179 20.0235 16 20.0235C16.4821 20.0235 16.957 19.9074 17.3846 19.6849C17.8123 19.4624 18.18 19.1401 18.4567 18.7454C18.7334 18.3506 18.9108 17.895 18.9741 17.4171C19.0373 16.9392 18.9845 16.4531 18.82 16H19C19.2652 16 19.5196 15.8946 19.7071 15.7071C19.8946 15.5196 20 15.2652 20 15C20 14.7348 19.8946 14.4804 19.7071 14.2929C19.5196 14.1054 19.2652 14 19 14ZM17.72 4L16.41 9.24C16.3552 9.46188 16.2262 9.65831 16.0442 9.79659C15.8623 9.93487 15.6384 10.0067 15.41 10H6.78L5.28 4H17.72ZM8 18C7.80222 18 7.60888 17.9414 7.44443 17.8315C7.27998 17.7216 7.15181 17.5654 7.07612 17.3827C7.00043 17.2 6.98063 16.9989 7.01921 16.8049C7.0578 16.6109 7.15304 16.4327 7.29289 16.2929C7.43275 16.153 7.61093 16.0578 7.80491 16.0192C7.99889 15.9806 8.19996 16.0004 8.38268 16.0761C8.56541 16.1518 8.72159 16.28 8.83147 16.4444C8.94135 16.6089 9 16.8022 9 17C9 17.2652 8.89464 17.5196 8.70711 17.7071C8.51957 17.8946 8.26522 18 8 18ZM16 18C15.8022 18 15.6089 17.9414 15.4444 17.8315C15.28 17.7216 15.1518 17.5654 15.0761 17.3827C15.0004 17.2 14.9806 16.9989 15.0192 16.8049C15.0578 16.6109 15.153 16.4327 15.2929 16.2929C15.4327 16.153 15.6109 16.0578 15.8049 16.0192C15.9989 15.9806 16.2 16.0004 16.3827 16.0761C16.5654 16.1518 16.7216 16.28 16.8315 16.4444C16.9414 16.6089 17 16.8022 17 17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18Z"
												fill="#95ABC6"
											></path></svg></span
									>Savatchaga</el-button
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
	components: { Header, Footer },
	name: 'ProductView',
	props: ['id'],
	data() {
		return {
			smile: null,
			iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'],
		};
	},
};
</script>
<style scoped>
.praduct_cards {
	background-color: #f4f7fd;
}
.praduct_cards .card-img-top {
	width: 100%;
}
.price {
	font-size: 32px;
	line-height: 30px;
	color: #d9663b;
	font-weight: 600;
}
.card_title p {
	font-size: 2rem;
	font-weight: 600;
	color: #0dabc7;
}
.card_text p {
	font-size: 15px;
	line-height: 1.3rem;
	letter-spacing: 1.2px;
}
.card_img {
	background-color: #fff;
	border-radius: 20px;
	box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
	padding: 35px 30px;
	height: 300px;
}
.card_img img {
	height: 100%;
}
</style>
