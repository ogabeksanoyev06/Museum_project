<template>
	<div class="container">
		<p class="title_all text-start my-5">
			• {{ $t('message.home.quationss') }}
		</p>
		<el-collapse>
			<el-collapse-item
				v-for="item in $store.state.object"
				:key="item.title"
				:title="item.title"
				:name="item.name"
			>
				<div>
					{{ item.title }} <br />
					{{ item.text }}
				</div>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>
<script>
export default {
	name: 'QuationView',
	methods: {},
};
</script>
<style></style>
