import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import { buildOptions } from "./types/config"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export const buildPlugins = ({paths}: buildOptions): webpack.WebpackPluginInstance[] => {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		})
	]
}