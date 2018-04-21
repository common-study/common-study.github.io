const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: [ 'babel-polyfill', './src/main.js' ],

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env'],
					plugins: [
						['transform-react-jsx', { pragma: 'h' }]
					]
				}
			}
		]
	},

	plugins: [new UglifyJSPlugin()]
};
