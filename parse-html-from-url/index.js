// 

const request = require('request');
const fs = require('fs');
const { parse } = require('node-html-parser');

const getPage = ( letter, cb ) => {
	request(`https://randomword.com/words/${letter}.html`, {
			timeout: 3000
	}, (error, response, body) => {
			if (! error) {
				cb(letter, body);
			}
	});
};

const parser = (letter, html) => {
	const valid = /^[a-z]+$/;
	const root = parse(html);
	const elements = root.querySelector('.word-list');
	const arr = [];
	elements.childNodes.forEach(subElement => {
		if (subElement.childNodes.length > 0) {
			subElement.childNodes.forEach(item => {
				if (item.childNodes.length === 1) {
					const str = item.structuredText.trim().toLowerCase();
					if (str.match(valid)) arr.push(str);
				}
			});
		}
	});
	console.log('Letter ', letter, ' Solutions ', arr.length);
	saveFile(letter, arr);
}

const saveFile = (letter, data) => {
	let content = `export function words${letter.toUpperCase()}() {\n\n`;
	content += `\tconst words = [\n`;

	data.forEach(word => {
		content += `\t\t"${word}",\n`;
	});

	content += `\t];\n`;
	content += `\treturn words[Math.floor(Math.random() * words.length)];\n`;
	content += `}\n\n`;
	content += `export default words${letter.toUpperCase()};\n`;
	fs.writeFileSync(__dirname + `/words${letter.toUpperCase()}.js`, content);
}

const strArray = [ ...'abcdefghijklmnopqrstuvwxyz'];
// const strArray = [ ...'ab'];
// const strArray = [ ...'ab'];
strArray.forEach(letter => {
	getPage(letter, parser);
})
