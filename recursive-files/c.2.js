//

const fs = require('fs');

const mediaTags = require('./utils/mediaTags').mediatags;

// const ROOT_DIRECTORY = `/Users/jv/Desktop/MyDocs/JV_Music`;
// const ROOT_DIRECTORY = `/Users/jv/Desktop/MyDocs/JV_MUSIC/Other`;
const ROOT_DIRECTORY = `/Users/jv/tmp/music/1`;

const folders = [];

function getFiles(parentIndex, dir) {
	// const obj = { folder: { name: dir, files: [], jpgs: [], folders: [] } };
	const index = folders.length;
	const obj = { folder: { index, dir, folders: [] } };
	// const parent = parentIndex <= 0 ? null : parentIndex;
	// const parent = parentIndex;
	folders[index] = { index, dir, previous: parentIndex, next: [], files: [], jpgs: [] };

	fs.readdirSync(dir).forEach(file => {
		const pathname = `${dir}/${file}`;
		// console.log('pathname :', pathname, ':');
		const stats = fs.statSync(pathname);
		if (stats.isDirectory()) {
			// 			folders[parentIndex].next[index] = true;
			// console.log('folders[parentIndex].next[index] ', folders[parentIndex].next[index]);
			// if (folders[parentIndex].next[index] == 'undefined') {
			// 	folders[parentIndex].next.push(index);
			// }
			if (parentIndex !== null) {
				console.log('folders[parentIndex] ', folders[parentIndex]);
				const arr = folders[parentIndex].next;
				console.log('arr ', arr);
				if (arr.findIndex(k => k === index) < 0) {
					arr.push(index);
				}
			}

			const sub = getFiles(index, pathname);
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
	return getFiles(null, dir);
	// console.log('<<< topDir');
}

const tree = topDir(ROOT_DIRECTORY);

// console.log('after topDir; tree ', tree);

const allPromises = [];

folders.forEach((item, folderIdx) => {
	// console.log('item ', item);
	item.files.forEach((file, fileIdx) => {
		// console.log('file ', file);
		const pathname = `${item.dir}/${file.file}`;
		// console.log('pathname ', pathname);
		allPromises.push(mediaTags(folderIdx, fileIdx, pathname));
	});
});

Promise.all(allPromises).then(values => {
	// console.log('values ', values);
	values.forEach(value => {
		const folder = folders[value.folderIdx];
		folder.files[value.fileIdx].obj = value;
	});
	const obj = { tree, folders };
	fs.writeFileSync('music-data.json', JSON.stringify(obj));
});

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

// const map = folders.map(item => {
// 	console.log('item ', item);
// 	item.files.map(file => {
// 		console.log('file ', file);
// 		const pathname = `${item.dir}/${file.file}`;
// 		console.log('pathname ', pathname);
// 	});
// 	// allPromises.push(mediaTags());
// });
