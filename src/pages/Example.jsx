import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { SpinningLogo } from '../components/SpinningLogo';
import { useLocation, useParams } from 'react-router-dom';

function Example() {
  const location = useLocation();
  const params = useParams();

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <SpinningLogo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/Example.js</Code> and save to reload.
          </Text>
          <Text>
            Now visiting on {location.pathname} & {params['*']}
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  );
}

export default Example;
