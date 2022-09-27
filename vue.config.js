const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,

	// 关闭语法检查
	lintOnSave: false,

	// 调试配置
	devServer: {
		// build自动打开网页
		open: true,
		host: 'localhost',
		port: '8080',
	},
});
