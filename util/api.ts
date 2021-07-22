const spoonApiKey = process.env.SPOON_API_KEY

const endpoints = {
	recipeDetails: (id: string) => `https://api.spoonacular.com/recipes/${id}/information?apiKey=${spoonApiKey}`,
	recipeSearch: (ingredients: string[]) => `https://api.spooncular.com/recipes/findByIngredients?apiKey=${spoonApiKey}&ingredients=${ingredients.join(',')}`
}

export {
	endpoints,
}
