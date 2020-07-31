const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const {getIconEntries} = require('./utils');
const EntryFile = require('./entry-file');

module.exports = {
	mode: 'production',

	entry: {
		'lib/icon-layer': 'vue-svg-icon-set/icon-layer.vue',
		'lib/icon-register': 'vue-svg-icon-set/icon-register',
		...getIconEntries('icons/'),
	},

	output: {
		path: path.resolve(__dirname, '../'),
		libraryTarget: 'commonjs2',
	},

	externals: [
		function (from, request, cb) {
			if (request.endsWith('icon-register.js')) {
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
		new EntryFile(),
	],
};
