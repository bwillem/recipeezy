import { Flex, Skeleton, Stack } from "@chakra-ui/react"
import { Recipe } from "../pages/api/recipe/[id]"
import { Card, CardBody } from "./card"
import ChakraNextImage from "./nextImage"
import { H3, P } from "./typography"

const yesOrNo = (b: Boolean) => b ? 'Yes' : 'No'

function RecipeDetails({ recipe }: { recipe: Recipe }) {
	if (!recipe) return (
		<Skeleton borderRadius='lg' height='420px' />
	)

	return (
		<>
			<ChakraNextImage
				src={recipe?.image}
				alt={recipe?.title}
				borderRadius='lg'
				overflow='hidden'
				w='100%'
				h='328px'
			/>
			<Card>
				<CardBody
					as={Stack}
					spacing={6}
				>
					<H3>
						Overview
					</H3>
					<Stack
						direction='row'
						justifyContent='space-between'
					>
						<P>
							Ready in
						</P>
						<P color='gray.500'>
							{recipe?.readyInMinutes}m
						</P>
					</Stack>
					<Stack
						direction='row'
						justifyContent='space-between'
					>
						<P>
							Servings
						</P>
						<P color='gray.500'>
							{recipe?.servings}
						</P>
					</Stack>
					<Stack
						direction='row'
						justifyContent='space-between'
					>
						<P>
							Vegan
						</P>
						<P color='gray.500'>
							{yesOrNo(recipe?.vegan)}
						</P>
					</Stack>
					<Stack
						direction='row'
						justifyContent='space-between'
					>
						<P>
							Vegetarian
						</P>
						<P color='gray.500'>
							{yesOrNo(recipe?.vegetarian)}
						</P>
					</Stack>
					<Stack
						direction='row'
						justifyContent='space-between'
					>
						<P>
							Gluten free
						</P>
						<P color='gray.500'>
							{yesOrNo(recipe?.glutenFree)}
						</P>
					</Stack>
					<Stack
						direction='row'
						justifyContent='space-between'
					>
						<P>
							Dairy free
						</P>
						<P color='gray.500'>
							{yesOrNo(recipe?.dairyFree)}
						</P>
					</Stack>
				</CardBody>
			</Card>
			<Card>
				<CardBody
					as={Stack}
					spacing={6}
				>
					<H3>
						Ingredients
					</H3>
					{recipe.extendedIngredients?.map(ing => (
						<Stack
							direction='row'
							justifyContent='space-between'
						>
							<P>
								{ing.name}
							</P>
							<P color='gray.500'>
								{`${ing.measures.us.amount} ${ing.measures.us.unitShort}`}
							</P>
						</Stack>
					))}
				</CardBody>
			</Card>
			<Card>
				<CardBody
					as={Stack}
					spacing={6}
				>
					<H3>
						Preparation
					</H3>
					{recipe.analyzedInstructions?.map((inst) => (
						inst.steps.map((step, i) => (
							<Stack
								direction='row'
								justifyContent='space-between'
							>
								<Flex>
									<P color='gray.500' mr={4}>
										{i + 1}.
									</P>
									<P>
										{step.step}
									</P>
								</Flex>
								{/* <P color='gray.500'> */}
								{/* {`${ing.measures.us.amount} ${ing.measures.us.unitShort}`} */}
								{/* </P> */}
							</Stack>
						))
					))}
				</CardBody>
			</Card>
			{/* <Card>
				<CardBody>
					{recipe.summary}
				</CardBody>
			</Card> */}
		</>
	)
}

export default RecipeDetails
