import { Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

const Wordmark: FC = () => {
	return (
		<Link passHref href='/'>
			<Stack
				direction='row'
				align='center'
				cursor='pointer'
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
		</Link>
	)
}

export default Wordmark