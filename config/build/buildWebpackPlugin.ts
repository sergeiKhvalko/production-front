import path from "path";
import webpack from "webpack";
import { buildOptions } from "../types/config";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";

export const buildWebpackPlugun = (options: buildOptions): webpack.Configuration => {
	const {mode, paths} = options
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

		plugins: buildPlugins(options)
	}
}