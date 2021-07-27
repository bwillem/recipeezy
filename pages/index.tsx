import { chakra, Stack } from '@chakra-ui/react'
import Hits from '../components/hits'
import SearchFeature from '../components/searchFeature'
import { H1, H3 } from '../components/typography'

export default function Home() {
  return (
    <>
      <Stack
        py={12}
        spacing={16}
        align='center'
      >
        <Stack
          spacing={8}
          align='flex-start'
          justifyContent='flex-start'
          w={['full', 'full', '2xl']}
        >
          <img
            src='/recipeezy-logo.svg'
            width='30'
            height='31'
          />
          <div>
            <H1
              textAlign='center'
              fontSize='4xl'
            >
              What's in your pantry?
              {/* Recipes with the <br /><chakra.span color='brand.default'>ingredients</chakra.span> you have */}
            </H1>
            <H3 color='gray.500'>
              Try something new tonight!
            </H3>
          </div>
        </Stack>
        <Stack
          w={['full', 'full', '2xl']}
          spacing={6}
        >
          <SearchFeature />
          <Hits />
        </Stack>
      </Stack>
    </>
  )
}
