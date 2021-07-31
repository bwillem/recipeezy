import { Box } from '@chakra-ui/react'
import * as React from 'react'
import NextImage, { ImageProps } from 'next/image'

const ChakraNextImage = (props) => {
	const { src, alt, ...rest } = props
	return (
		<Box
			position="relative"
			{...rest}
		>
			<NextImage
				objectFit="cover"
				layout="fill"
				src={src}
				alt={alt}
			/>
		</Box>
	)
}

export default ChakraNextImage
