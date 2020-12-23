const path = require('path')
const HtmlWebpackPugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
	entry: "./src/main.js",

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/app.js"
	},

	devServer: {
		contentBase: "./dist"
	},

	optimization: {
		minimizer: [
			new optimizeCssAssetsWebpackPlugin({})
		]
	},
	
	plugins: [
		new HtmlWebpackPugin({
			filename: "index.html",
			template: "src/index.html",
			favicon : "src/assets/img/favicon.ico"
		}),

		new MiniCssExtractPlugin({
			filename: 'css/app.css'
		})
	],

	module: {
		rules: [
			{
				test: /\.(c|sa|sc)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif|ico)$/,
				use: ['file-loader']
			}
		]
	}
}
