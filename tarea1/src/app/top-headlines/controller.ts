import { Request, Response } from "express";
import fetch from 'node-fetch';

export const getTopHeadlines = async (req: Request, res: Response) => {
    const fullQuery = (req as any).fullQuery;

    try{
        const response  = await fetch(`https://newsapi.org/v2/top-headlines?${fullQuery}`,{
            headers:{
                Authorization: `Bearer ${process.env.API_KEY}`
            }
        });
        const data = await response.json();
        res.send(data);
    }catch(e){
        console.log("Error en API", e);
    }
};

export const getSources = async (req:Request, res: Response) => {
    const fullQuery = (req as any).fullQuery;
    try{
        const response = await fetch(`https://newsapi.org/v2/top-headlines/sources?${fullQuery}`,{
            headers:{
                Authorization:`Bearer ${process.env.API_KEY}`
            }
        });
        const data = await response.json();
        res.send(data);
    }catch(e){
        console.log("Error en API", e);
    }
}
