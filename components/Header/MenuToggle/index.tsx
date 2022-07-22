import React from "react";
import { Box } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

interface MenuToggleProps {
  onToggle: React.MouseEventHandler<HTMLDivElement>;
  isOpen: boolean;
}

const MenuToggle = ({ onToggle, isOpen }: MenuToggleProps) => {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      onClick={onToggle}
      fontSize="2xl"
    >
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

export default MenuToggle;
