import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {

    try {
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(
            { id: 1, name: 'Daniel'}
        )
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message});
        
    }
}

export default handler