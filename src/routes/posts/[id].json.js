import fetch from 'node-fetch';

export async function get(req, res) {
    const id = req.params.id, 
        redirect = req.query._redirect;

    console.log('GET posts/:id', id);

	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const posts = await response.json();
    
    redirect ? 
        res.redirect(redirect) :
        res.json(posts);
}

export async function put(req, res) {
    const id = req.params.id, 
        redirect = req.query._redirect;

    console.log('PUT posts/:id', id);

    // update entry by id
    const body = req.body;

    redirect ? 
        res.redirect(redirect) :
        res.json(body);
}

export async function del(req, res) {
    const id = req.params.id, 
        redirect = req.query._redirect;

    console.log('DELETE posts/:id', id);

    // delete entry by id

    redirect ? 
        res.redirect(redirect) :
        res.sendStatus(204);
}