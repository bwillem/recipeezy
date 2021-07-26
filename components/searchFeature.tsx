import { Button, chakra, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { Card, CardBody, CardFooter } from '../components/card'
import TagInput from '../components/tagInput'
import { H3 } from '../components/typography'
import { useRecipesContext } from '../contexts/recipes'

const SearchFeature = props => {
	const [value, setValue] = useState<string>('')

	const {
		tags,
		setTags,
		getRecipes,
		isLoading,
	} = useRecipesContext()

	const setTag = () => {
		setTags(prevState => [...prevState, value.trim()])
		setValue('')
	}

	const unset = (name: string) => setTags(prevState => prevState.filter(x => x !== name))

	return (
		<Card w='xl'>
			<CardBody as={Stack} spacing={6}>
				<H3>Enter ingredients one by one, then click <chakra.span fontWeight='bold'>Find recipes</chakra.span></H3>
				<TagInput
					unset={unset}
					value={value}
					setValue={setValue}
					tags={tags}
					setTag={setTag}
				/>
			</CardBody>
			<CardFooter>
				<Button
					variant='brand'
					onClick={getRecipes}
					isLoading={isLoading}
					size='sm'
				>
					Find recipes
				</Button>
			</CardFooter>
		</Card>
	)
}

export default SearchFeature
