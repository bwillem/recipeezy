import { Box, Flex, Icon, Input, Stack } from "@chakra-ui/react"
import { FC, useState } from "react"
import { BsX } from 'react-icons/bs'

const useSearchForRecipes = () => {
	return (opts) => {
		fetch('/api/recipes', {
			method: 'get',
			body: JSON.stringify(opts),
		})
	}
}

const Tag: FC<{ name: string, unset: (n: string) => void }> = ({ name, unset }) => {
	return (
		<Flex
			bg='brand.default'
			color='white'
			fontSize='sm'
			borderRadius='99px'
			align='center'
			px={3}
			py={1}
			pr={2}
			mr={2}
			mb={2}
		>
			{name}
			<Icon
				ml={1}
				as={BsX}
				cursor='pointer'
				onClick={() => unset(name)}
			/>
		</Flex>
	)
}

const TagInput: FC<any> = ({
	value,
	setValue,
	handleKeyDown,
	tags,
	unset,
}) => {
	return (
		<>
			<Input
				value={value}
				onChange={e => setValue(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder='Enter ingredient...'
			/>
			{Boolean(tags.length) && (
				<Flex
					direction='row'
					flexWrap='wrap'
					mb='-8px !important'
				>
					{
						tags.map((t: string) => (
							<Tag
								name={t}
								unset={unset}
							/>
						))
					}
				</Flex>
			)}
		</>
	)
}

export default TagInput
