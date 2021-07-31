import React, { FC } from "react";
import NextLink from 'next/link'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Button, chakra, Icon, Image, Stack, Text } from '@chakra-ui/react'
import { useRecipesContext } from "../contexts/recipes";
import { Card } from "./card";
import { H3, P } from '../components/typography'
import { routes } from "../util/router";

export interface RecipeSearchHit {
	id: string,
	title: string,
	image: string,
	likes: number,
	missedIngredientCount: number,
	missedIngredients: any,
	usedIngredients: any,
}

const Hit: FC<{ isLastHit: boolean, hit: RecipeSearchHit }> = ({ isLastHit, hit }) => {

	const {
		image,
		title,
		missedIngredients,
		usedIngredients,
		likes,
		id,
	} = hit

	return (
		<AccordionItem
			borderColor='gray.100'
			borderBottomWidth={isLastHit ? 'none' : '1px'}
			borderTopWidth='0px'
		>
			<AccordionButton
				p={6}
				_expanded={{
					bg: 'gray.50'
				}}
			>
				<Stack
					direction='row'
					justifyContent='space-between'
					align='center'
					width='100%'
				>
					<Stack
						direction='row'
						align='center'
						flex='1 1 100%'
					>
						<Image
							src={image}
							width='40px'
							height='40px'
							borderRadius='40px'
						/>
						<Stack
							spacing={0}
							align='flex-start'
							textAlign='left'
						>
							<H3>
								{title}
							</H3>
							<P color='gray.500'>
								{likes + ' '}
								likes
							</P>
						</Stack>
					</Stack>
					<AccordionIcon color='gray.500' />
				</Stack>
			</AccordionButton>
			<AccordionPanel
				bg='gray.50'
				w='100%'
				p={6}
			>
				<Stack direction='row' spacing={6}>
					<Stack>
						<P
							fontWeight='medium'
							color='gray.500'
						>
							You have
						</P>
						{usedIngredients.map((i: any) => (
							<P>
								{i.name}
							</P>
						))}
					</Stack>
					<Stack>
						<P
							fontWeight='medium'
							color='gray.500'
						>
							You need
						</P>
						{missedIngredients.map((i: any) => (
							<P>
								{i.name}
							</P>
						))}
					</Stack>
				</Stack>
				<Stack
					align='center'
					justifyContent='flex-end'
					direction='row'
					flex='1 0 100%'
					spacing={6}
					mt={4}
				>
					{/* <Link
						fontSize='sm'
					>
						Shopping list
					</Link> */}
					<NextLink passHref href={routes.recipe(id)}>
						<Button
							variant='brand'
							size='sm'
						>
							View recipe
						</Button>
					</NextLink>
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	)
}

const Hits: FC<any> = props => {
	const {
		recipesResponse,
		tags,
	} = useRecipesContext()

	const hasResults = Boolean(recipesResponse)
		&& recipesResponse?.length
		&& tags?.length

	const isLastHit = (i: number) => Boolean(hasResults && i === recipesResponse.length - 1)

	return (
		<Card w='100%'>
			{hasResults ? (
				<Stack spacing={0}>
					<Accordion allowToggle>
						<P
							px={6}
							pt={6}
							color='gray.500'
						>
							Recipes with {tags.map((tag, i) => (
								<React.Fragment key={tag}>
									<chakra.span
										fontWeight='medium'
										color='gray.800'
									>
										{tag}
									</chakra.span>
									{i === tags.length - 2
										? ' and '
										: i === tags.length - 1
											? ''
											: ', '}
								</React.Fragment>
							))}
						</P>
						{
							recipesResponse.map((hit, i) => (
								<Hit
									isLastHit={isLastHit(i)}
									hit={hit}
								/>
							))
						}
					</Accordion>
				</Stack>
			) : (
				<Text
					p={6}
					color="gray.500"
				>
					no results
				</Text>
			)}
		</Card >
	)
}

export default Hits
