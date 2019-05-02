//

const mediaTags = require('./mediaTags').mediatags;

const allPromises = [];

const f1 = `/Users/jv/tmp/music/1/Yoga/Donna De Lory/The Lover and the Beloved/01 - Ganapati Om.mp3`;
const f2 = `/Users/jv/tmp/music/1/Yoga/Donna De Lory/The Lover and the Beloved/02 - Om Nama Shivaya.mp3`;
//          /Users/jv/tmp/music/1/Yoga/Donna De Lory/The Lover and the Beloved

console.log('stage 1');

allPromises[0] = mediaTags(f1);
allPromises[1] = mediaTags(f2);

console.log('stage 2');

const promises = Promise.all(allPromises).then(values => {
	console.log('values ', values);
	// console.log('jv ', jv);
});

console.log('promises ', promises);
