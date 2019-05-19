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

getFiles(null, ROOT_DIRECTORY);

// fs.writeFileSync('music-data.json', JSON.stringify(folders));

// console.log('after getFiles; folders ', folders);

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

Promise.all(allPromises).then(values => {
	// console.log('values ', values);
	values.forEach(value => {
		const folder = folders[value.folderIdx];
		folder.mp3[value.fileIdx].tags = value;
	});
	const obj = { folders };
	fs.writeFileSync('music-data.json', JSON.stringify(obj));
});

// rubbish from here

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
