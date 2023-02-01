import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import webpack from "webpack"
import { buildOptions } from "../types/config"

export const buildPlugins = ({paths}: buildOptions): webpack.WebpackPluginInstance[] => {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html
		})
	]
}