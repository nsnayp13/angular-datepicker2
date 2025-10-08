const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const libDir = path.join(root, 'projects', 'angular-datepicker2');

function copy(src, dest) {
	fs.copyFileSync(src, dest);
}

function main() {
	const rootReadme = path.join(root, 'README.md');
	const rootLicense = path.join(root, 'LICENSE');
	const libReadme = path.join(libDir, 'README.md');
	const libLicense = path.join(libDir, 'LICENSE');

	if (!fs.existsSync(rootReadme)) {
		console.error('Root README.md not found');
		process.exit(1);
	}
	if (!fs.existsSync(rootLicense)) {
		console.error('Root LICENSE not found');
		process.exit(1);
	}

	copy(rootReadme, libReadme);
	copy(rootLicense, libLicense);
	console.log('Copied README.md and LICENSE into library directory');
}

main();