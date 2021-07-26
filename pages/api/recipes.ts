import { NextApiHandler } from "next"
import fetch from 'isomorphic-unfetch'
import { endpoints } from "../../util/api"

const getRecipes: NextApiHandler = async (req, res) => {
	const r = await fetch(`${endpoints.recipeSearch(req.query.ingredients as string)}`).then(r => r.json())
	console.log(r)
	return res.status(200).json(r)
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
