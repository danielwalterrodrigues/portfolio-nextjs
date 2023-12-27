import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {

    try {
        res.status(200).json([
            { id: 1, name: 'Daniel'},
            { id: 2, name: 'Walter'},
            { id: 3, name: 'Rodrigues'}
        ])
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message})
    }
}

export default handler