import { Stack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, CardBody } from '../components/card'
import TagInput from '../components/tagInput'
import { H3 } from '../components/typography'
import { useRecipesContext } from '../contexts/recipes'

const SearchFeature = () => {
	const [value, setValue] = useState<string>('')

	const {
		tags,
		setTags,
		getRecipes,
		isLoading,
	} = useRecipesContext()

	useEffect(() => {
		if (tags.length) {
			getRecipes()
		}
	}, [tags.length])

	const setTag = () => {
		setTags(prevState => [...prevState, value.trim()])
		setValue('')
	}

	const unset = (name: string) => {
		setTags(prevState => prevState.filter(x => x !== name))
	}

	return (
		<Card w='full'>
			<CardBody as={Stack} spacing={6} >
				<H3
					as='label'
					// @ts-ignore
					htmlFor='ingredient'
				>
					Enter ingredients one by one
				</H3>
				<TagInput
					unset={unset}
					value={value}
					setValue={setValue}
					tags={tags}
					setTag={setTag}
					isLoading={isLoading}
				/>
			</CardBody>
			{/* <CardFooter>
				<Button
					variant='brand'
					onClick={getRecipes}
					isLoading={isLoading}
					size='sm'
				>
					Find recipes
				</Button>
			</CardFooter> */}
		</Card >
	)
}

export default SearchFeature
