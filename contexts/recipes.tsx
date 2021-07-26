import { SetStateAction, useContext } from "react";
import { Dispatch } from "react";
import { FC } from "react";
import { useState } from "react";
import { createContext } from "react";
import { RecipeSearchHit } from "../components/hits";

interface Context {
	isLoading: boolean,
	recipesResponse: RecipeSearchHit[],
	getRecipes: () => Promise<any>,
	setTags: Dispatch<SetStateAction<string[]>>,
	tags: string[],
}

const recipesContext = createContext<Context>({
	isLoading: false,
	recipesResponse: [],
	getRecipes: () => new Promise(() => { }),
	setTags: (v: any) => { },
	tags: [],
})

const useRecipesContext = () => useContext(recipesContext)

const RecipesProvider: FC<{}> = props => {
	const [tags, setTags] = useState<string[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [recipesResponse, setRecipesResponse] = useState<Array<RecipeSearchHit>>([])

	const getRecipes = async () => {
		setIsLoading(true)
		try {
			const r = await fetch(`/api/recipes?ingredients=${tags.join(',')}`)
			const response = await r.json()
			console.log(response)
			setRecipesResponse(response)
		} catch (e) {

		}
		setIsLoading(false)
	}

	const value = {
		isLoading,
		recipesResponse,
		getRecipes,
		setTags,
		tags,
	}

	return (
		<recipesContext.Provider value={value} {...props} />
	)
}

export {
	useRecipesContext,
}

export default RecipesProvider
