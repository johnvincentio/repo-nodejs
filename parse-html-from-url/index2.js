// 

const fs = require('fs');

// const strArray = [ ...'abcdefghijklmnopqrstuvwxyz'];
// const strArray = [ ...'ab'];
const strArray = [ ...'ab'];

console.log('in index2')

const saveFile = () => {
	console.log('in saveFile')
	let content = `//\n\n`;

	strArray.forEach(letter => {
		content += `import { words${letter.toUpperCase()} } from './words${letter.toUpperCase()}';\n`;
	});
	content += "\n";

	content += `export function randomWord() {\n`;

	content += `\tconst rnd = letters[Math.floor(Math.random() * 26)];\n`
	content +=`\tswitch(rnd) {\n`;
	content += `\t}\n\n`;

	content += `}\n\n`;
	content += `export default randomWord;\n`;

	fs.writeFileSync(__dirname + `/all.js`, content);
}

saveFile();

/*
import { wordsA } from './wordsA';
import { b } from './b';

export function randomWord() {
	const letters = [ ...'abcdefghijklmnopqrstuvwxyz'];
	console.log('letters ', letters)

	const letter = letters[Math.floor(Math.random() * 2)];
	console.log('letter :', letter, ':');
	switch(letter) {
		case 'b':
			console.log('doing b')
			return b();
		case 'a':
		default:
			console.log('doing a')
			return wordsA();
	}
}

export default randomWord;
*/

