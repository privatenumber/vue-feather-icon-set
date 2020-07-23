const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { getIconEntries } = require('./utils');

module.exports = {
	mode: 'production',

	// optimization: {
	// 	minimize: false,
	// },

	entry: {
		'lib/icon-layer': 'vue-svg-icon-set/icons-layer.vue',
		'lib/icon-register': 'vue-svg-icon-set/icon-register',
		...getIconEntries('icons/'),
	},

	output: {
		path: path.resolve(__dirname, '../'),
		libraryTarget: 'commonjs2',
	},

	externals: [
		function(from, req, cb) {
			if (req.endsWith('icon-register.js')) {
				return cb(null, '../lib/icon-register.js');
			}
			cb();
		},
	],

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.svg$/,
				use: [
					'vue-loader',
					{
						loader: 'vue-svg-icon-set/loader',
						options: {
							generateId(resourcePath) {
								const id = this.kebabBaseName(resourcePath);
								return `feather-icons-${id}`;
							},
						},
					},
				],
			},
		],
	},

	plugins: [
		new VueLoaderPlugin(),
	],
};
