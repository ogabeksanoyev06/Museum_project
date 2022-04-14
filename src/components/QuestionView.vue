<template>
	<div class="container">
		<p class="title_all text-start my-5">
			• {{ $t('message.home.quationss') }}
		</p>
		<el-collapse>
			<el-collapse-item
				v-for="item in object"
				:key="item.title"
				:title="titleSlice(item.title)"
				:id="item.id"
			>
				<div>
					<h6 class="text-danger">{{ item.title }} <br /></h6>
					{{ item.text }}
				</div>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>
<script>
export default {
	name: 'QuationView',
	data() {
		return {
			object: [
				{
					title: 'Oʻzbekiston tarixi davlat muzeyi qayerda joylashgan?',
					text: 'Oʻzbekiston, Toshkent, Sharof Rashidov shoh koʻchasi, 3',
					id: 1,
				},
				{
					title: 'Ekskursiyaga qanday yozilish kerak?',
					text: 'Malumotlaringizni bizga yuboring yoki biz bilan bog`laning',
					id: 2,
				},
				{
					title: 'Agar shaxsiy savolim bo`lsa, qayerga borishim kerak? ',
					text: 'Sahifamizda joylashgan manzilga tashrif buyuring',
					id: 3,
				},
				{
					title: 'Ekskursiya qaysi tillarda mavjud?',
					text: 'Hozirgi kunda O`zbek va Rus tillarida',
					id: 4,
				},
			],
		};
	},
	methods: {
		titleSlice(text) {
			if (text.length > 29) {
				return text.slice(0, 30) + '... ?';
			}
		},
	},
};
</script>
<style>
.el-collapse-item__header {
	font-size: 16px !important;
}
</style>
