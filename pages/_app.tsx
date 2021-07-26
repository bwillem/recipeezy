import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import Layout from '../components/layout'
import { Global } from '@emotion/react'
import RecipesProvider from '../contexts/recipes'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Global
				styles={`
				@font-face {
					font-family: 'DMSans';
					src: url(/fonts/DMSans-Regular.ttf);
					font-style: regular;
					font-weight: 400;
					font-display: swap;
				}
				@font-face {
					font-family: 'DMSans';
					src: url(/fonts/DMSans-Medium.ttf);
					font-style: medium;
					font-weight: 500;
					font-display: swap;
				}
				@font-face {
					font-family: 'DMSans';
					src: url(/fonts/DMSans-Bold.ttf);
					font-style: bold;
					font-weight: 600;
					font-display: swap;
				}
				@font-face {
					font-family: 'Inter';
					src: url(/fonts/inter-var-latin.woff2) format('woff2');
					font-weight: 400 800;
					font-style: oblique 0deg 20deg;
					font-display: swap;
				}
			`}
			/>
			<RecipesProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</RecipesProvider>
		</ChakraProvider>
	)
}

export default MyApp
