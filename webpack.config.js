var path = require('path');
var webpack = require('webpack');
var extractWebpack = require('extract-text-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'source', 'js/flexi_JS.js'),
	
	output: {
		path: path.resolve(__dirname, './assets'),
		publicPath: '/assets/',
		filename: 'js/flexi_JS.js'
	},
	module:{
		loaders: [
			{ test: /\.scss$/, loader: extractWebpack.extract("style", "css!sass")},
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=500&mimetype=application/font-woff&publicPath=../&name=fonts/[name].[ext]" },
			{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=500&mimetype=application/font-woff&publicPath=../&name=fonts/[name].[ext]" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=500&mimetype=application/octet-stream&publicPath=../&name=fonts/[name].[ext]" },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file?limit=500&publicPath=../&name=fonts/[name].[ext]" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=500&mimetype=image/svg+xml&publicPath=../&name=fonts/[name].[ext]" },
			{test: /\.(jpg|jpeg|gif|png)$/, loader: "url-loader?limit=1024&publicPath=../&name=images/[name].[ext]"},
			
		]
	},
	plugins:[
		new extractWebpack("stylesheets/flexi_style.css"),
		/*new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})*/
	]
}