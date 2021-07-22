import { Box, BoxProps, Stack, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

const Card: FC<BoxProps> = props => {
	const bg = useColorModeValue('white', 'gray.600')

	return (
		<Box
			borderWidth='1px'
			borderRadius='lg'
			boxShadow='lg'
			bg={bg}
			{...props}
		/>
	)
}

const CardFooter: FC<BoxProps> = props => {
	return (
		<Stack
			py={4}
			px={6}
			direction='row'
			borderTopWidth='1px'
			justifyContent='flex-end'
			{...props}
		/>
	)
}

const CardBody: FC<any> = props => {
	return (
		<Box layerStyle='cardPadding' {...props} />
	)
}

export {
	Card,
	CardBody,
	CardFooter,
}