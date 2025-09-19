import { Request, Response, NextFunction} from "express";

export const getQueryString = (req: Request, res: Response, next: NextFunction)  => {
    const query = req.query;
	const keys = Object.keys(query);
	let fullQuery: string = '';

	for (let i = 0; i < keys.length; i++) {
		if (fullQuery) {
			fullQuery += '&';
		}
		fullQuery += keys[i] + '=' + query[keys[i]];
	}

    (req as any).fullQuery = fullQuery;
	next();
}

export default getQueryString;