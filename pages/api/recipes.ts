import { NextApiHandler } from "next"
import fetch from 'isomorphic-unfetch'

const url = ``

const getRecipes: NextApiHandler = async (req, res) => {
	const r = await fetch(url)
	return res.status(200).end()
}

const router = (handler: NextApiHandler): NextApiHandler => (req, res) => {
	switch (req.method) {
		case 'GET': {
			return handler(req, res)
		}
		default: return res.status(403).end()
	}
}

export default router(getRecipes)
