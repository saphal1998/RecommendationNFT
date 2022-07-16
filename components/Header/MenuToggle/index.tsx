import React from 'react'
import { Box } from '@chakra-ui/react'
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai'

interface MenuToggleProps {
	onToggle: () => void
	isOpen: boolean
}

const MenuToggle = ({ onToggle, isOpen }: MenuToggleProps) => {
	return (
		<Box bg="tomato" onClick={onToggle}>
			{isOpen ? <AiFillCloseCircle /> : <AiOutlineMenu />}
		</Box>
	)
}

export default MenuToggle
