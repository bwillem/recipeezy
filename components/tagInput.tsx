import { Box, Button, Flex, Icon, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react"
import { FC, useState } from "react"
import { BsX } from 'react-icons/bs'
import { IoIosReturnLeft } from 'react-icons/io'

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
	setTag,
	tags,
	unset,
}) => {

	const handleKeyDown = (e: any) => {
		if (e.code === 'Enter') {
			setTag(value.trim())
		}
	}

	return (
		<>
			<InputGroup>
				<Input
					value={value}
					onChange={e => setValue(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder='Enter ingredient...'
				/>
				<InputRightElement>
					<Button
						variant='brand'
						disabled={!Boolean(value.trim())}
						onClick={() => setTag(value.trim())}
						borderTopLeftRadius='0px'
						borderBottomLeftRadius='0px'
					>
						<Icon as={IoIosReturnLeft} />
					</Button>
				</InputRightElement>
			</InputGroup>
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
								key={t}
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
