//

const jsmediatags = require('jsmediatags');

function mediatags(filename) {
	return new Promise((resolve, reject) => {
		jsmediatags.read(filename, {
			onSuccess(tag) {
				resolve(tag);
			},
			onError(error) {
				reject(error);
			}
		});
	});
}

module.exports = { mediatags };

// .then(tags => {
// 	console.log('tags ', tags);
// 	return tags;
// })
// .catch(error => {
// 	console.log('error ', error);
// 	return error;
// });
// const result = await promise;
// return result;

// async function awaitableJsmediatags(filename) {
// 	const promise = new Promise((resolve, reject) => {
// 		jsmediatags.read(filename, {
// 			onSuccess(tag) {
// 				resolve(tag);
// 			},
// 			onError(error) {
// 				reject(error);
// 			}
// 		});
// 	});
// 	const result = await promise;
// 	return result;
// }
