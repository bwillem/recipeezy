import { Box, Icon, Skeleton, Stack, Text, TextProps } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { useState } from "react"
import { useEffect, useRef } from "react"
import { FiArrowLeft } from "react-icons/fi"
import useSWR from "swr"
import RecipeDetails from "../../components/recipeDetails"
import { H1, H3, P, Link } from '../../components/typography'
import useIntersectionObserver from "../../hooks/useIntersectionObserver"

function QuickLink({ isActive, ...rest }: TextProps & { isActive: boolean }) {
	return (
		<Text
			color={isActive ? 'gray.800' : 'gray.300'}
			cursor='pointer'
			transition='.3s all'
			fontWeight='medium'
			_hover={{
				color: 'gray.800',
				transition: '.15s all',
			}}
			{...rest}
		/>
	)
}

function RecipePage() {
	const { query } = useRouter()
	const [shouldFixNav, setShouldFixNav] = useState(false)
	const { data, error } = useSWR(query?.id ? `/api/recipe/${query.id}` : null)
	const router = useRouter()
	const navRef = useRef<HTMLDivElement>(null)

	const { entry, setTarget } = useIntersectionObserver({ root: null, rootMargin: '-232px 0px 0px 0px', threshhold: [0, 1] })

	useEffect(() => {
		if (navRef.current) {
			setTarget(navRef.current)
		}
	}, [navRef.current])

	useEffect(() => {
		setShouldFixNav(!Boolean(entry?.isIntersecting))
		// if (entry?.isIntersecting) {}
	}, [entry])

	console.log(data)

	if (error) {
		return (
			<>
				<P mt={12}>
					Could not fetch recipe 🥺😢😭
				</P>
				<Link onClick={() => router.back()}>
					<Icon as={FiArrowLeft} /> Back
				</Link>
			</>
		)
	}

	return (
		<>
			<Stack
				spacing={8}
				align='center'
				justifyContent='center'
				w={['full', 'full', '2xl']}
				mx='auto'
				mb={24}
			>
				<img
					src='/recipeezy-logo.svg'
					width='30'
					height='31'
				/>
				<H3
					textAlign='center'
					color='gray.500'
				>
					Recipe
				</H3>
				<Skeleton
					isLoaded={data}
					h='43px'
				>
					<H1
						textAlign='center'
						fontSize='4xl'
					>
						{data?.title}
					</H1>
				</Skeleton>
			</Stack>
			<Stack direction='row'>
				<Box
					position='relative'
					flex='1 1 25%'
					ref={navRef}
					h='168px'
				>
					<Skeleton maxW='200px' isLoaded={data}>
						<Stack
							position={shouldFixNav ? 'fixed' : 'relative'}
							top={shouldFixNav ? '64px' : 0}
							spacing={6}
						>
							<QuickLink isActive={true}>
								Overview
							</QuickLink>
							<QuickLink isActive={false}>
								Ingredients
							</QuickLink>
							<QuickLink isActive={false}>
								Preparation
							</QuickLink>
							<QuickLink isActive={false}>
								Blurb
							</QuickLink>
						</Stack>
					</Skeleton>
				</Box>
				<Stack
					flex='1 1 75%'
					spacing={8}
					pb={32}
					maxW='xl'
				>
					<RecipeDetails recipe={data} />
				</Stack>
			</Stack>
		</>
	)
}

export default RecipePage
