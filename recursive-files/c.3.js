//

const fs = require('fs');

const mediaTags = require('./utils/mediaTags').mediatags;

// const ROOT_DIRECTORY = `/Users/jv/Desktop/MyDocs/JV_Music`;
// const ROOT_DIRECTORY = `/Users/jv/Desktop/MyDocs/JV_MUSIC/Other`;
const ROOT_DIRECTORY = `/Users/jv/tmp/music/1`;

const folders = [];

function getFiles(parentIndex, dir) {
	const index = folders.length;
	folders[index] = { index, dir, previous: parentIndex, next: [], mp3: [], jpg: [] };

	if (parentIndex !== null) {
		const arr = folders[parentIndex].next;
		if (arr.findIndex(k => k === index) < 0) {
			arr.push(index);
		}
	}

	fs.readdirSync(dir).forEach(file => {
		const pathname = `${dir}/${file}`;
		// console.log('pathname :', pathname, ':');
		const stats = fs.statSync(pathname);

		if (stats.isFile()) {
			if (file.search(/\.jpg$/) > -1) {
				folders[index].jpg.push(file);
			}

			if (file.search(/\.mp3$/) > -1) {
				// const sub = { file };
				folders[index].mp3.push({ file });
				// obj.folder.files.push(sub);
			}
		}
		if (stats.isDirectory()) {
			getFiles(index, pathname);
			// obj.folder.folders.push(sub);
		}
	});
}

console.log('Start getFiles');
getFiles(null, ROOT_DIRECTORY);
console.log('Finished getFiles');

// fs.writeFileSync('music-data.json', JSON.stringify(folders));

// console.log('after getFiles; folders ', folders);

console.log('Start MakePromises');
const allPromises = [];
folders.forEach((item, folderIdx) => {
	// console.log('MakePromise; item ', item);
	item.mp3.forEach((file, fileIdx) => {
		// console.log('MakePromise; file.file ', file.file);
		const pathname = `${item.dir}/${file.file}`;
		// console.log('MakePromise; pathname ', pathname);
		allPromises.push(mediaTags(folderIdx, fileIdx, pathname));
	});
});
console.log('Finished MakePromises; Number of Promises ', allPromises.length);

console.log('Start All Promises');
Promise.all(allPromises).then(values => {
	// console.log('values ', values);
	values.forEach(value => {
		const folder = folders[value.folderIdx];
		folder.mp3[value.fileIdx].tags = value;
	});
	const obj = { folders };
	fs.writeFileSync('music-data.json', JSON.stringify(obj));
	console.log('Finished All Promises');
});
