// 

// https://randomword.com/words/a.html

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
	const root = parse(html);
	// console.log(root.querySelector('.word-list .wordlist li'));
	// const elements = root.querySelector('.word-list .wordlist');
	const elements = root.querySelector('.word-list');
	// console.log('elements ', elements);
	const arr = [];
	elements.childNodes.forEach(subElement => {
		// console.log('subElement :', subElement, ':');
		if (subElement.childNodes.length > 0) {

			subElement.childNodes.forEach(item => {
				// console.log('item :', item, ':');
				if (item.childNodes.length === 1) {
					// item.structuredText
					// console.log('item ', item);
					arr.push(item.structuredText.trim());
				}
			});
		}
	});
	console.log('Letter ', letter, ' Solutions ', arr.length);
	// console.log('arr ', arr);
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

	console.log('__dirname ', __dirname);
	fs.writeFileSync(__dirname + `/words${letter}.js`, content);
}

/*
	];
	return words[Math.floor(Math.random() * words.length)];
}

export default wordsA;
*/


// const strArray = [ ...'abcdefghijklmnopqrstuvwxyz'];
// const strArray = [ ...'ab'];
const strArray = [ ...'a'];
strArray.forEach(letter => {
	getPage(letter, parser);
})

// getPage(parser);

/*
const getPage = ( cb ) => {
	request(url, {
			timeout: 3000
	}, (error, response, body) => {
			if (! error) {
				// cb(body);
				// console.log('body ', body);
				const root = parse(body);
				console.log(root.querySelector('.word-list .wordlist li'));

			}
	});
};
*/
