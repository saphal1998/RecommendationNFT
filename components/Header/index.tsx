import React from 'react'
import { BoxProps, Box } from '@chakra-ui/react'
import MenuToggle from './MenuToggle'
import MenuLinks from './MenuLinks'
import NavBarContainer from './NavBarContainer'

const Header = (props: BoxProps) => {
	const [isOpen, setIsOpen] = React.useState(false)

	const onToggle = (event) => {
		setIsOpen(!isOpen)
	}

	return (
		<NavBarContainer {...props}>
			<MenuToggle onToggle={onToggle} isOpen={isOpen} />
			<MenuLinks isOpen={isOpen} />
		</NavBarContainer>
	)
}

export default Header
