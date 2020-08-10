const path = require('path');
const babel = require('@babel/core');
const {camelCase, upperFirst} = require('lodash');
const pascal = string => upperFirst(camelCase(string));

class EntryFile {
	apply(compiler) {
		compiler.hooks.emit.tapAsync('webpack-distsize-plugin', (compilation, cb) => {
			const iconExports = Array.from(compilation.entrypoints.keys())
				.filter(p => p.startsWith('icons/'))
				.map(p => {
					const basename = path.basename(p);
					const exportAs = pascal(basename + '-icon');
					return `export { default as ${exportAs} } from './${p}'`;
				});

			iconExports.push('export { default } from \'./lib/icon-layer\'');

			const source = iconExports.join('\n');

			// ESM
			compilation.assets['index.esm.js'] = {
				source() {
					return source;
				},
				size() {
					return source.length;
				},
			};

			// CJS
			babel.transform(source, {
				presets: [
					['@babel/preset-env', {
						targets: {
							node: true,
						},
					}],
				],
			}, (err, {code}) => {
				if (err) {
					return cb(err);
				}

				compilation.assets['index.js'] = {
					source() {
						return code;
					},
					size() {
						return code.length;
					},
				};
			});

			cb();
		});
	}
}

module.exports = EntryFile;
