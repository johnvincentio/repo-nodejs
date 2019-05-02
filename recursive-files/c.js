//

const fs = require('fs');

// const ROOT_DIRECTORY = `/Users/jv/Desktop/MyDocs/JV_Music`;
// const ROOT_DIRECTORY = `/Users/jv/Desktop/MyDocs/JV_MUSIC/Other`;
const ROOT_DIRECTORY = `/Users/jv/tmp/music/1`;

const folders = [];

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

function topDir(dir) {
	console.log('--- topDir');
	return getFiles(dir);
	// console.log('<<< topDir');
}

const jv = topDir(ROOT_DIRECTORY);

console.log('after topDir; jv ', jv);

// const jv = getFiles(ROOT_DIRECTORY);
// const str = JSON.stringify(jv);
// console.log(str);

// fs.writeFileSync('jv.json', JSON.stringify(jv));

// const jv = getFiles(ROOT_DIRECTORY);

// const promises = Promise.all(allPromises).then(values => {
// 	console.log('values ', values);
// 	// console.log('jv ', jv);
// });

// console.log('promises ', promises);

// function showData(data) {
// 	const jv = 12;
// }

// jv.folder.folders.map(item => {
// 	console.log('item ', item);
// });

// showData(jv);
