import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { PiMoonBold, PiSunBold } from 'react-icons/pi';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(PiMoonBold, PiSunBold);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="white"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      isRound="true"
      _hover={{ bg: 'whiteAlpha.200' }}
      {...props}
    />
  );
};
