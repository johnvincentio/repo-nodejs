//

const fs = require('fs');
const mediaTags = require('./mediaTags').mediatags;

// const ROOT_DIRECTORY = `/Users/jv/Desktop/MyDocs/JV_Music`;
const ROOT_DIRECTORY = `/Users/jv/Desktop/MyDocs/JV_MUSIC/Other`;

// let tags = await awaitableJsmediatags.read(file);

const allPromises = [];

async function myfunc(pathname) {
	const tags = await mediaTags(pathname);
	return tags;
}

async function getFiles(dir) {
	const obj = { folder: { name: dir, files: [], jpgs: [], folders: [] } };

	fs.readdirSync(dir).forEach(file => {
		const pathname = `${dir}/${file}`;
		// console.log('pathname :', pathname, ':');
		const stats = fs.statSync(pathname);
		if (stats.isDirectory()) {
			const sub = getFiles(pathname);
			obj.folder.folders.push(sub);
		}

		if (stats.isFile()) {
			if (file.search(/\.jpg$/) > -1) {
				obj.folder.jpgs.push(file);
			}

			if (file.search(/\.mp3$/) > -1) {
				// const sub = { file };
				// obj.folder.files.push(sub);
				// allPromises.push(mediaTags(pathname, sub));
				myfunc(pathname).then(result => {
					const sub = { file, result };
					obj.folder.files.push(sub);
				});
			}
		}
	});

	// console.log('obj ', obj);
	return obj;
}

getFiles(ROOT_DIRECTORY);

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

// const str = JSON.stringify(jv);
// console.log(str);
