//

const fs = require('fs');

function getFiles(dir) {
	// const obj = { folder: { name: dir, files: [], jpgs: [], folders: [] } };
	const index = folders.length;
	const obj = { folder: { index, dir, folders: [] } };
	folders[index] = { name: dir, files: [], jpgs: [] };

	fs.readdirSync(dir).forEach(file => {
		const pathname = `${dir}/${file}`;
		console.log('pathname :', pathname, ':');
		const stats = fs.statSync(pathname);
		if (stats.isDirectory()) {
			const sub = getFiles(pathname);
			obj.folder.folders.push(sub);
		}

		if (stats.isFile()) {
			if (file.search(/\.jpg$/) > -1) {
				folders[index].jpgs.push(file);
				// obj.folder.jpgs.push(file);
			}

			if (file.search(/\.mp3$/) > -1) {
				const sub = { file };
				folders[index].files.push(sub);
				// obj.folder.files.push(sub);
			}
		}
	});

	// console.log('obj ', obj);
	return obj;
}

module.exports = { getFiles };
