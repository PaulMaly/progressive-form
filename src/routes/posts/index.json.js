import fetch from 'node-fetch';

export async function get(req, res) {
	const redirect = req.query._redirect;

    console.log('GET posts');

	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await response.json();

	redirect ? 
		res.redirect(redirect) : 
		res.json(posts);
}

export async function post(req, res) {
	const redirect = req.query._redirect;

    console.log('POST posts');

	const response = await fetch('https://jsonplaceholder.typicode.com/posts/100');
	const post = await response.json();
	post.id = 101;

	redirect ? 
		res.redirect(redirect) :
		res.json(post);
}