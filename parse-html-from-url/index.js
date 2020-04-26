// 

// https://randomword.com/words/a.html

const request = require('request');
const fs = require('fs');
const { parse } = require('node-html-parser');

const url = `https://randomword.com/words/a.html`;

const getPage = ( cb ) => {
	request(url, {
			timeout: 3000
	}, (error, response, body) => {
			if (! error) {
				cb(body);
			}
	});
};

const parser = html => {
	const root = parse(html);
	// console.log(root.querySelector('.word-list .wordlist li'));
	const elements = root.querySelector('.word-list .wordlist');
	// console.log('elements ', elements);
	const arr = [];
	elements.childNodes.forEach(item => {
		// console.log('item :', item, ':');
		if (item.childNodes.length === 1) {
			// item.structuredText
			// console.log('item ', item);
			arr.push(item.structuredText.trim());
		}
	});
	console.log('Solutions: ', arr.length);
	// console.log('arr ', arr);
	saveFile(arr);
}

const saveFile = data => {
	let content = '';
	data.forEach(word => {
		content += `"${word}",\n`;
	});
	console.log('__dirname ', __dirname);
	fs.writeFileSync(__dirname + `/wordsA.js`, content);

}

getPage(parser);

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

getPage();

const getPage = ( cb ) => {
	request(url, {
			timeout: 3000
	}, (error, response, body) => {
			if(!error) {
					cb(body);
			}
	});
};

getPage( (html) => {
	let data = parsePage( html );
	savePage(data);
});
*/
