const fs = require('fs');
const path = require('path');

const featherIconsDir = path.dirname(require.resolve('feather-icons/package.json'));
const featherIconsAssetsDir = path.resolve(featherIconsDir, 'dist/icons/');

function getIconEntries(dir) {
	const iconPaths = fs.readdirSync(featherIconsAssetsDir)
		.filter(f => f.endsWith('.svg'));

	const entries = {};
	iconPaths.forEach(file => {
		entries[path.join(dir, path.basename(file, '.svg'))] = path.join('feather-icons/dist/icons/', file);
	});
	return entries;
}

module.exports = {
	getIconEntries,
};
