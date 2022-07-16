import React from 'react'
import MenuItem from '../MenuItem'
import { Box, Stack, Button } from '@chakra-ui/react'

interface MenuLinkProps {
	isOpen: boolean
}

const MenuLinks = ({ isOpen }: MenuLinkProps) => {
	return (
		<Box
			display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
			flexBasis={{ base: '100%', md: 'auto' }}
		>
			<Stack
				spacing={8}
				align="center"
				justify={['flex-end', 'flex-end']}
				direction={['row', 'row']}
				pt={[4, 4]}
			>
				<MenuItem to="/">Home</MenuItem>
				<MenuItem to="/signup" isLast>
					<Button
						size="sm"
						rounded="md"
						color={['primary.500', 'primary.500', 'white', 'white']}
						bg={['white', 'white', 'primary.500', 'primary.500']}
						_hover={{
							bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600'],
						}}
					>
						Create Account
					</Button>
				</MenuItem>
			</Stack>
		</Box>
	)
}

export default MenuLinks
