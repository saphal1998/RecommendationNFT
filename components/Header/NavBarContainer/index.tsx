import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }: FlexProps) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500"]}
      color={["white"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
