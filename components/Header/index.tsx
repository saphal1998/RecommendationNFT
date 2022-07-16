import React from "react";
import { FlexProps } from "@chakra-ui/react";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./MenuLinks";
import NavBarContainer from "./NavBarContainer";
import Logo from "./Logo";

const Header = (props: FlexProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggle: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBarContainer {...props}>
      <Logo w="125px" color={["white"]} />
      <MenuToggle onToggle={onToggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default Header;
