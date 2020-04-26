// 

const fs = require('fs');

const strArray = [ ...'abcdefghijklmnopqrstuvwxyz'];
// const strArray = [ ...'ab'];
// const strArray = [ ...'ab'];

const saveFile = () => {
	let content = `//\n\n`;

	strArray.forEach(letter => {
		content += `import { words${letter.toUpperCase()} } from './words${letter.toUpperCase()}';\n`;
	});
	content += "\n";

	content += `export function randomWord() {\n`;

	content += `\tconst letters = [ ...'abcdefghijklmnopqrstuvwxyz'];\n`
	content += `\tconst rnd = letters[Math.floor(Math.random() * 26)];\n`
	content +=`\tswitch(rnd) {\n`;

	strArray.forEach((letter, idx) => {
		content += `\t\tcase ${idx}:\n`;
		if (idx === 0)
			content += `\t\tdefault:\n`
		content += `\t\t\treturn words${letter.toUpperCase()}();\n`
	});

	content += `\t}\n`;

	content += `}\n\n`;
	content += `export default randomWord;\n`;

	fs.writeFileSync(__dirname + `/all.js`, content);
}

saveFile();
