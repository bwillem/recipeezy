import { Box, Stack } from "@chakra-ui/react";
import AppContainer from "./appContainer";
import Wordmark from "./wordmark";

function Layout({ children }: any) {
	return (
		<Box
			bg='url("/background.svg")'
			bgRepeat='no-repeat'
			minH='100vh'
		>
			<AppContainer>
				<Stack
					direction='row'
					py={8}
				>
					<Wordmark />
				</Stack>
				{children}
			</AppContainer>
		</Box>
	)
}

export default Layout