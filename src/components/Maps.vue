<template>
	<div class="container">
		<p class="title_all text-black my-5">
			<span class="text-primary">•</span> {{ $t('message.mapsAmail.title') }}
		</p>
		<p style="font-size: 15px; text-align: center">
			{{ $t('message.mapsAmail.text') }}
		</p>
		<div class="row align-items-center">
			<div class="col-md-6">
				<form v-on:submit.prevent="submit">
					<div class="col-12 form-group">
						<label class="col-form-label"
							>Email: <span class="text-danger">*</span></label
						>
						<input
							v-model.trim="$v.email.$model"
							type="email"
							class="form-control"
							:class="{ 'is-invalid': validationStatus($v.email) }"
						/>
						<div v-if="!$v.email.required" class="invalid-feedback">
							{{ $t('message.mapsAmail.validateEmail1') }}
						</div>
						<div v-if="!$v.email.email" class="invalid-feedback">
							{{ $t('message.mapsAmail.validateEmail2') }}
						</div>
					</div>
					<div class="col-12 form-group">
						<label class="col-form-label">
							{{ $t('message.mapsAmail.inputNum') }}:
							<span class="text-danger">*</span></label
						>
						<input
							v-model.trim="$v.number.$model"
							placeholder="+998930819140"
							type="tel"
							class="form-control"
							:class="{ 'is-invalid': validationStatus($v.number) }"
						/>
						<div v-if="!$v.number.required" class="invalid-feedback">
							{{ $t('message.mapsAmail.validateNumber1') }}
						</div>
						<div v-if="!$v.number.minLength" class="invalid-feedback">
							{{ $t('message.mapsAmail.validateNumber2') }}
						</div>
						<div v-if="!$v.number.maxLength" class="invalid-feedback">
							{{ $t('message.mapsAmail.validateNumber3') }}
						</div>
					</div>
					<div class="col-12 form-group">
						<label class="col-form-label">
							{{ $t('message.mapsAmail.inputName') }}
							<span class="text-danger">*</span></label
						>
						<input
							v-model.trim="$v.fullname.$model"
							type="text"
							class="form-control"
							:class="{ 'is-invalid': validationStatus($v.fullname) }"
						/>
						<div v-if="!$v.fullname.required" class="invalid-feedback">
							{{ $t('message.mapsAmail.validateFio1') }}
						</div>
						<div v-if="!$v.fullname.maxLength" class="invalid-feedback">
							{{ $t('message.mapsAmail.validateFio2') }}
						</div>
						<div v-if="!$v.fullname.minLength" class="invalid-feedback">
							{{ $t('message.mapsAmail.validateFio3') }}
						</div>
					</div>
					<div class="form-check col-12 my-2">
						<input class="form-check-input" type="checkbox" value="" />
						<label class="form-check-label" for="flexCheckDefault">
							{{ $t('message.mapsAmail.input') }}
						</label>
					</div>
					<div class="form-group">
						<button class="my-2 mb-5 btn btn-primary" type="primary">
							{{ $t('message.mapsAmail.btn') }}
						</button>
					</div>
				</form>
			</div>
			<div class="col-md-6">
				<div style="position: relative; overflow: hidden">
					<a
						href="https://yandex.uz/maps/org/9115334674/?utm_medium=mapframe&utm_source=maps"
						style="color: #eee; font-size: 12px; position: absolute; top: 0px"
						>Государственный музей истории Узбекистана</a
					>
					<a
						href="https://yandex.uz/maps/10335/tashkent/category/museum/184105894/?utm_medium=mapframe&utm_source=maps"
						style="color: #eee; font-size: 12px; position: absolute; top: 14px"
						>Музей в Ташкенте</a
					>
					<iframe
						src="https://yandex.uz/map-widget/v1/-/CCUByQuHSC"
						width="100%"
						height="400"
						frameborder="1"
						allowfullscreen="true"
						style="position: relative"
					>
					</iframe>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {
	required,
	email,
	minLength,
	maxLength,
} from 'vuelidate/lib/validators';
export default {
	name: 'MapsAmail',
	data: function () {
		return {
			checked: false,
			fullname: '',
			email: '',
			number: '',
		};
	},
	validations: {
		fullname: {
			required,
			$autoDirty: true,
			minLength: minLength(4),
			maxLength: maxLength(40),
		},
		number: {
			required,
			$autoDirty: true,
			minLength: minLength(12),
			maxLength: maxLength(13),
		},
		email: { required, $autoDirty: true, email },
	},

	methods: {
		validationStatus(validation) {
			return typeof validation != 'undefined' ? validation.$error : false;
		},
		submit() {
			this.$v.$touch();
			if (this.$v.$pendding || this.$v.$error) return;
			alert('Muvaffaqiyatli yuborishni tasdiqlash');
			this.fullname = '';
			this.email = '';
			this.number = '';
		},
	},
};
</script>
<style scoped></style>
