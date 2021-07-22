import { Heading, HeadingProps } from "@chakra-ui/react"
import { FC } from "react"

const H1: FC<HeadingProps> = props => {
	return (
		<Heading
			as='h1'
			fontSize='5xl'
			{...props}
		/>
	)
}

const H3: FC<HeadingProps> = props => {
	return (
		<Heading
			as='h3'
			fontSize='lg'
			fontWeight='medium'
			{...props}
		/>
	)
}

export {
	H1,
	H3,
}
