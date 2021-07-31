import { NextApiHandler } from "next"
import fetch from 'isomorphic-unfetch'
import { endpoints } from "../../../util/api"

interface Step {
	number: number,
	step: string,
	length: {
		number: number,
		unit: string,
	},
	ingredients: string[],
}

interface Instruction {
	name: string,
	steps: Step[],
}

interface Ingredient {
	id: number,
	aisle: string,
	amount: number,
	measures: {
		us: {
			amount: number,
			unitShort: string,
			unitLong: string,
		},
		metric: {
			amount: number,
			unitShort: string,
			unitLong: string,
		},
	},
	name: string,
	nameClean: string,
	original: string,
	originalName: string,
	originalString: string,
}

export interface Recipe {
	analyzedInstructions: Instruction[],
	cheap: boolean,
	cuisines: string[],
	dairyFree: boolean,
	extendedIngredients: Ingredient[],
	glutenFree: boolean,
	healthScore: number,
	instructions: string,
	image: string,
	readyInMinutes: number
	servings: number,
	summary: string,
	title: string,
	vegan: boolean,
	vegetarian: boolean,
	weightWatcherSmartPoints: number,
}

const getRecipe: NextApiHandler = async (req, res) => {
	const r = await fetch(`${endpoints.recipeDetails(req.query.id as string)}`).then(r => r.json())
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

export default router(getRecipe)
