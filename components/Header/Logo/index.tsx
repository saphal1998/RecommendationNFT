import React from 'react';
import { Box, Text, BoxProps } from '@chakra-ui/react';
import { AtSignIcon } from '@chakra-ui/icons';
import styles from './Logo.module.css';

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <Text fontSize="3xl" fontWeight="bold">
        <a href="/">Reco {<AtSignIcon />}</a>
      </Text>
    </Box>
  );
}
