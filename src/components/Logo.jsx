import { Flex, Image } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Flex justify="center" align="center">
      <Image
        src={process.env.PUBLIC_URL + '/logo.png'}
        alt="logo"
        objectFit="cover"
        h="30px"
      />
    </Flex>
  );
};

export default Logo;
