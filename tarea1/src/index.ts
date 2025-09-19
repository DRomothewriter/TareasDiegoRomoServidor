import express from 'express';
import dotenv from 'dotenv';
import router from './app/routes';

dotenv.config();

const app = express();

const port = 3000;

app.use(router);

app.get('', (req, res) => {
	res.send('Funciona');
});

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
