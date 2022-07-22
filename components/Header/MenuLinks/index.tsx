import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import MenuItem from '../MenuItem';
import { Box, Stack, Button } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../../utils/connectors';

interface MenuLinkProps {
  isOpen: boolean;
}

const OurFallbackComponent = ({
  error,
  componentStack,
  resetErrorBoundary,
}) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const ConnectWalletButton = () => {
  const { activate, account, active, deactivate } = useWeb3React();

  const connectWalletOnClick: React.MouseEventHandler<HTMLButtonElement> =
    async (event) => {
      event.preventDefault();
      if (!account) {
        await activate(injected, (error: Error) => {
          throw error;
        });
      } else {
        deactivate();
      }
    };

  return (
    <ErrorBoundary>
      <Button
        size="sm"
        rounded="md"
        color={['primary.500']}
        bg={['white']}
        _hover={{
          bg: ['primary.100'],
          decoration: 'none',
        }}
        onClick={connectWalletOnClick}
      >
        {active ? account : 'Connect Wallet'}
      </Button>
    </ErrorBoundary>
  );
};

const MenuLinks = ({ isOpen }: MenuLinkProps) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['flex-end']}
        direction={['row']}
        pt={[4, 4]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem isLast={true}>
          <ConnectWalletButton />
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
