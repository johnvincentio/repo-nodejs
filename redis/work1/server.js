//

const express = require('express');

const axios = require('axios');

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const env = {
	YOUTUBE_APIS_URL: process.env.YOUTUBE_APIS_URL,
	YOUTUBE_PLAY_VIDEO_URL: process.env.YOUTUBE_PLAY_VIDEO_URL,
	YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
	YOUTUBE_REFERER: `${process.env.HOME_URL}:${PORT}`
};

const instance = axios.create({
	baseURL: env.YOUTUBE_APIS_URL,
	params: {
		part: 'snippet',
		maxResults: 5,
		key: env.YOUTUBE_API_KEY
	},
	headers: { Referer: env.YOUTUBE_REFERER }
});

const app = express();

app.get('/api/search', (req, res) => {
	console.log('req.query ', req.query);
	console.log('req.query.query ', req.query.query);

	const query = req.query.query.toLowerCase().trim();

	if (!query || query.length < 1) {
		console.log('empty query');
		return res.status(400).json({ message: 'Incorrect field length: query' });
	}
	console.log(`query string :${query}:`);

	return instance
		.get('/search', {
			params: { q: query }
		})
		.then(response => {
			console.log('found ', response.data.items.length);
			return res.status(200).json({ items: response.data.items });
		})
		.catch(error => {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log('Error', error.message);
			}
			console.log(error.config);
			return res.status(500).json({ message: 'Internal Server error' });
		});
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
