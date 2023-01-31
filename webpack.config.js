const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",

	entry: path.resolve(__dirname, 'src', 'index.ts'),
	output: {
		path: path.resolve(__dirname, "build"),
		filename: '[name].[contenthash].bundle.js',
		clean: true
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
					{ loader: 'sass-loader' },
				],
				exclude: /node_modules/,
			},
      {
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		]
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		})
	]
}