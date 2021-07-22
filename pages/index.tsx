import { chakra, Stack } from '@chakra-ui/react'
import SearchFeature from '../components/searchFeature'
import { H1 } from '../components/typography'

export default function Home() {
  return (
    <Stack
      py={12}
      spacing={16}
      align='center'
    >
      <Stack
        spacing={8}
        align='center'
      >
        <img
          src='/recipeezy-logo.svg'
          width='30'
          height='31'
        />
        <H1 textAlign='center'>
          Recipes from the <chakra.span color='brand.default'>ingredients</chakra.span> you have
        </H1>
      </Stack>
      <SearchFeature />
    </Stack>
  )
}
