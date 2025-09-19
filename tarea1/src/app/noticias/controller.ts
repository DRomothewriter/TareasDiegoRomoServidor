import { Request, Response } from 'express';
import fetch from 'node-fetch';

export const getNoticias = async (req: Request, res: Response) => {
	//const fullQuery = req.fullQuery;
	//.js I miss u
    const fullQuery = (req as any).fullQuery;

	try {
		const response = await fetch(
			`https://newsapi.org/v2/everything?${fullQuery}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.API_KEY}`,
				},
			}
		);
		const data = await response.json();
		res.send(data);
	} catch (e) {
		console.log('Error en servidor', e);
	}
};
