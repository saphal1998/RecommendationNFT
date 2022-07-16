import React from 'react';
import MenuItem from '../MenuItem';
import { Box, Stack, Button } from '@chakra-ui/react';
import { useMetamask } from 'use-metamask';
import 'regenerator-runtime';
import { ethers } from 'ethers';

interface MenuLinkProps {
  isOpen: boolean;
}

const ConnectWalletButton = () => {
  const { connect, metaState } = useMetamask();

  const connectWalletOnClick = (event) => {
    event.preventDefault();
    if (!metaState.isConnected && window.ethereum) {
      (async () => {
        const web3 = new ethers.providers.Web3Provider(window.ethereum, 'any');
        console.log({ web3 });
        try {
          await connect(web3);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  return (
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
      Connect Wallet
    </Button>
  );
};

const NoSSR = ({ children }: { children: React.ReactNode }) => {
  const [mountedState, setMountedState] = React.useState(false);

  React.useEffect(() => {
    setMountedState(true);
  }, []);
  return <>{mountedState ? children : null}</>;
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
          <NoSSR>
            <ConnectWalletButton />
          </NoSSR>
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
