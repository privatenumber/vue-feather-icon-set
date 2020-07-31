const path = require('path');
const {camelCase, upperFirst} = require('lodash');
const pascal = string => upperFirst(camelCase(string));

class EntryFile {
	apply(compiler) {
		compiler.hooks.done.tapAsync('webpack-distsize-plugin', (stats, cb) => {
			const iconExports = Array.from(stats.compilation.entrypoints.keys())
				.filter(p => p.startsWith('icons/'))
				.map(p => {
					const basename = path.basename(p);
					const exportAs = pascal(basename + '-icon');
					return `export { default as ${exportAs} } from './${p}'`;
				});

			iconExports.push('export { default } from \'./lib/icon-layer\'');

			const {outputPath, outputFileSystem: fs} = compiler;
			fs.writeFile(path.join(outputPath, 'index.js'), iconExports.join('\n'), cb);
		});
	}
}

module.exports = EntryFile;
