import React from 'react'
import { Flex, BoxProps } from '@chakra-ui/react'

const NavBarContainer = ({ children, ...props }: BoxProps) => {
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={8}
			p={8}
			bg={['black']}
			color={['white']}
			{...props}
		>
			{children}
		</Flex>
	)
}

export default NavBarContainer
