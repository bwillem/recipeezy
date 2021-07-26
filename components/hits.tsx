import { FC } from "react";
import { Button, chakra, Image, Stack, Text } from '@chakra-ui/react'
import { useRecipesContext } from "../contexts/recipes";
import { Card } from "./card";
import { H3, P, Link } from '../components/typography'

export interface RecipeSearchHit {
	id: string,
	title: string,
	image: string,
	likes: number,
	missedIngredientCount: number,
}

const Hits: FC<any> = props => {
	const {
		recipesResponse,
	} = useRecipesContext()

	const hasResults = Boolean(recipesResponse)
		&& recipesResponse?.length

	const isLastHit = (i: number) => hasResults && i === recipesResponse.length - 1

	return (
		<Card w='xl'>
			{hasResults ? (
				<Stack spacing={0}>
					{
						recipesResponse.map((r, i) => (
							<Stack
								p={6}
								align='center'
								direction='row'
								justify='space-between'
								borderBottomWidth={isLastHit(i) ? 'none' : '1px'}
								borderBottomColor={'gray.100'}
							>
								<Stack direction='row'>
									<Image
										src={r.image}
										width='40px'
										height='40px'
										borderRadius='40px'
									/>
									<Stack spacing={0}>
										<H3>
											{r.title}
										</H3>
										<P>
											<chakra.span fontWeight='medium'>
												{r.likes + ' '}
											</chakra.span>
											likes
										</P>
									</Stack>
								</Stack>
								<Stack
									align='center'
									direction='row'
									flex='1 0 '
								>
									<Link
										fontSize='sm'
									>
										Shopping list
									</Link>
									<Button
										variant='brand'
										size='sm'
									>
										View recipe
									</Button>
								</Stack>
							</Stack>
						))
					}
				</Stack>
			) : (
				<Text color="gray.500">
					no results
				</Text>
			)}
		</Card >
	)
}

export default Hits
