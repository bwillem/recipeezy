import { Button, chakra, Stack } from '@chakra-ui/react'
import qs from 'qs'
import { useState } from 'react'
import { Card, CardBody, CardFooter } from '../components/card'
import TagInput from '../components/tagInput'
import { H3 } from '../components/typography'

const SearchFeature = props => {
	const [value, setValue] = useState<string>('')
	const [tags, setTags] = useState<string[]>([])
	const [isLoading, setIsLoading] = useState(false)

	const handleKeyDown = (e: any) => {
		if (e.code === 'Enter') {
			setTags(prevState => [...prevState, value.trim()])
			setValue('')
		}
	}

	const unset = (name: string) => setTags(prevState => prevState.filter(x => x !== name))

	const getRecipes = async () => {
		setIsLoading(true)
		const query = qs.stringify(tags)
		const r = await fetch(`/api/recipes?${query}`)
		const response = await r.json()
		console.log(response)
	}

	return (
		<Card w='xl'>
			<CardBody as={Stack} spacing={6}>
				<H3>Enter ingredients one by one, then click <chakra.span fontWeight='bold'>Find recipes</chakra.span></H3>
				<TagInput
					unset={unset}
					value={value}
					setValue={setValue}
					tags={tags}
					handleKeyDown={handleKeyDown}
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
