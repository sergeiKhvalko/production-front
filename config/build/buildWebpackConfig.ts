import webpack from "webpack";
import { buildOptions } from "../types/config";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";

export const buildWebpackConfig = (options: buildOptions): webpack.Configuration => {
	const { mode, paths, isDev } = options;
	
	return {
		mode: mode,
	
		entry: paths.entry,
		output: {
			path: paths.build,
			filename: '[name].[contenthash].bundle.js',
			clean: true
		},

		module: {
			rules: buildLoaders()
		},

		resolve: buildResolvers(),

		plugins: buildPlugins(options),

		devtool: isDev ? 'inline-source-map' : undefined,

		devServer: isDev ? buildDevServer(options) : undefined,
	}
}