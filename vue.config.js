const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
});
module.exports = {
	runtimeCompiler: true,
	pluginOptions: {
		i18n: {
			locale: 'en',
			fallbackLocale: 'ru',
			localeDir: 'locales',
			enableInSFC: false,
		},
	},
};