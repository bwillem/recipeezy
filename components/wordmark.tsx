import { Heading, Stack } from "@chakra-ui/react";
import { FC } from "react";

const Wordmark: FC = () => {
	return (
		<Stack
			direction='row'
			align='center'
		>
			<img
				src='/recipeezy-logo.svg'
				width='27'
				height='28'
			/>
			<Heading
				as='h2'
				fontSize='md'
			>
				Recipeezy
			</Heading>
		</Stack>
	)
}

export default Wordmark