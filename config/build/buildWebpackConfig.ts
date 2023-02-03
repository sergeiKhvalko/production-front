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
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options)
		},
		resolve: buildResolvers(),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}