import React from "react";
import MenuItem from "../MenuItem";
import { Box, Stack, Button } from "@chakra-ui/react";

interface MenuLinkProps {
  isOpen: boolean;
}

const MenuLinks = ({ isOpen }: MenuLinkProps) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["flex-end"]}
        direction={["row"]}
        pt={[4, 4]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["primary.500"]}
            bg={["white"]}
            _hover={{
              bg: ["primary.100"],
              decoration: "none",
            }}
          >
            Connect Wallet
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
