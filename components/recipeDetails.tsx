import { chakra, Flex, Skeleton, Stack } from "@chakra-ui/react"
import { useEffect } from "react"
import { Dispatch, SetStateAction, useRef } from "react"
import useDetectIntersection from "../hooks/useDetectIntersection"
import { Recipe } from "../pages/api/recipe/[id]"
import { Card, CardBody } from "./card"
import ChakraNextImage from "./nextImage"
import { H3, P } from "./typography"

const yesOrNo = (b: Boolean) => b ? 'Yes' : 'No'

function RecipeDetails({ recipe, setActiveNavIndex }: { recipe: Recipe, setActiveNavIndex: Dispatch<SetStateAction<number>> }) {
	const overviewRef = useRef<HTMLDivElement>(null)
	const ingredsRef = useRef<HTMLDivElement>(null)
	const prepRef = useRef<HTMLDivElement>(null)
	const overviewIsIntersecting = useDetectIntersection({ ref: overviewRef, opts: { root: null, rootMargin: '0px 0px -50% 0px', threshhold: [0, 1] } })
	const ingredsIsIntersecting = useDetectIntersection({ ref: ingredsRef, opts: { root: null, rootMargin: '0px 0px -50% 0px', threshhold: [0, 1] } })
	const prepIsIntersecting = useDetectIntersection({ ref: prepRef, opts: { root: null, rootMargin: '0px 0px -50% 0px', threshhold: [0, 1] } })

	useEffect(() => {
		let index = 0
		if (ingredsIsIntersecting) {
			index = 1
		}
		if (prepIsIntersecting) {
			index = 2
		}
		setActiveNavIndex(index)
	}, [overviewIsIntersecting, ingredsIsIntersecting, prepIsIntersecting])

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
				h='382px'
			/>
			<chakra.span
				id='overview'
				mt='-100px !important'
				height='100px'
			/>
			<Card
				ref={overviewRef}
			>
				<CardBody
					as={Stack}
					spacing={6}
				>
					<H3
					>
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
			<chakra.span
				id='ingredients'
				mt='-100px !important'
				height='100px'
			/>
			<Card
				ref={ingredsRef}
			>
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
			<chakra.span
				id='preparation'
				mt='-100px !important'
				height='100px'
			/>
			<Card
				ref={prepRef}
			>
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
