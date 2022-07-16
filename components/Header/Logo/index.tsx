import React from 'react'
import { Box, Text, BoxProps } from '@chakra-ui/react'

export default function Logo(props: BoxProps) {
	return (
		<Box {...props}>
			<Text fontSize="lg" fontWeight="bold">
				Logo
			</Text>
		</Box>
	)
}
