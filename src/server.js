import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

import methodOverride from 'method-override';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express()
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		methodOverride('_method'),
		express.json(),
		express.urlencoded({ extended: false }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
