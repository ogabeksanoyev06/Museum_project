<template>
	<div class="container">
		<p class="title_all text-start my-5">
			• {{ $t('message.home.quationss') }}
		</p>
		<el-collapse>
			<el-collapse-item
				v-for="item in object"
				:key="item.title"
				:title="$t(item.title)"
				:id="item.id"
			>
				<div><span class="fw-bold">Javob:</span> {{ $t(item.text) }}</div>
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
					title: 'Muzeyda ekskursiyalarni qanday turlari mavjud?',
					text: 'Muzeyda turli toifadagi davr uchun eksponatlar mavjud',
					id: 0,
				},
				{
					title:
						'Muzeyda O`zbekistonning qadimgi allomalari bo`yicha ma`lumot mavjudmi?',
					text: 'Muzeyda 1- va 2- rezenans davrida ujod qilgan ajdodlarimiz xaqida aloxida bo`limlar mavjud',
					id: 1,
				},
				{
					title:
						'Bu muzeyda qadimiy shaxarlar va qadimiy yozuv madaniyatiga oid tarixiy manbalar mavjudmi?',
					text: 'Bu Muzey O`zbekistonning qadimiy davridan bugungi kungacha bo`lgan tarixi aks ettirilgan Xorazm, Baqtriya, So`g`d, Farg`ona kabi qadimiy davlatlar va ko`plab shaxarlarning tarixi xaqida Ma`lumot olish mumkin',
					id: 2,
				},
				{
					title:
						'Muzeyda bolalar uchun maxsus ko`rgazmalar va malaka darslari tashkil etilganmi?',
					text: '2011-yilda respublikamizda ulk bora O`zbekiston Tarixi Davlat Muzeyi qoshidagi "Mo`jizalar olamida" bolalar muzeyi tashkil etilgan.Bu yerda xar seshanba va juma kunlari bolalar uchun kulolchilik, kashtachilik va tasviriy san`at yo`nalishlarida maxorat darslari bo`lib o`tadi',
					id: 3,
				},
			],
		};
	},
	methods: {
		titleSlice(text) {
			if (text.length > 34) {
				return text.slice(0, 35) + '... ';
			}
		},
	},
};
</script>
<style>
.el-collapse-item__header {
	line-height: 1;
}
</style>
