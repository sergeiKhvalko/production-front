import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {
	const tsLoader = {
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			}
	const cssLoader = {
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
			}

	return [cssLoader, tsLoader];
}

