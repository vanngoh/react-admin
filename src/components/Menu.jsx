import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react';
import {
  PiAlignLeftSimpleBold,
  PiBrainBold,
  PiDiamondBold,
  PiGearSixBold,
  PiMoneyBold,
  PiSquaresFourBold,
  PiStackBold,
  PiUserCircleBold,
  PiUserGearBold,
  PiUsersBold,
  PiUsersThreeBold,
} from 'react-icons/pi';
import Logo from './Logo';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useLocation, useNavigate } from 'react-router-dom';

const Menu = () => {
  // Variables
  const menuGroupList = {
    overview: {
      icon: <PiSquaresFourBold />,
      path: '/overview',
    },
    projects: {
      icon: <PiStackBold />,
      path: '/projects',
    },
    users: {
      icon: <PiUsersThreeBold />,
      children: [
        {
          val: 'buyer',
          path: '/users/buyer',
          icon: <PiUserGearBold />,
        },
        {
          val: 'supplier',
          path: '/users/supplier',
          icon: <PiUsersBold />,
        },
      ],
    },
    models: {
      icon: <PiBrainBold />,
      children: [
        {
          val: 'training',
          path: '/models/training',
          icon: <PiAlignLeftSimpleBold />,
        },
        { val: 'trained', path: '/models/trained', icon: <PiDiamondBold /> },
      ],
    },
    settings: {
      icon: <PiGearSixBold />,
      children: [
        {
          val: 'account',
          path: '/settings/account',
          icon: <PiUserCircleBold />,
        },
        { val: 'billing', path: '/settings/billing', icon: <PiMoneyBold /> },
      ],
    },
  };

  // Functions
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box p={5} h="100%">
      <Card h="100%" bg="#3e3053" variant="elevated">
        <Flex p={3} h="60px">
          <Logo />
          <Spacer />
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
        <CardBody p={2} maxHeight="calc(100vh - 160px)" overflowY="scroll">
          {Object.keys(menuGroupList).map((menuGroup, i) => {
            if (!!!menuGroupList[menuGroup].children)
              return (
                <Button
                  key={menuGroup + i}
                  w="100%"
                  variant="ghost"
                  color="white"
                  justifyContent="start"
                  textTransform="capitalize"
                  bg={
                    location.pathname === menuGroupList[menuGroup].path
                      ? 'whiteAlpha.300'
                      : 'transparent'
                  }
                  _hover={{ bg: 'whiteAlpha.300' }}
                  onClick={() => navigate(menuGroupList[menuGroup].path)}
                >
                  <Box mr={3}>{menuGroupList[menuGroup].icon}</Box>
                  {menuGroup}
                </Button>
              );

            return (
              <Accordion allowMultiple key={menuGroup + i}>
                <AccordionItem style={{ border: '0px' }}>
                  <AccordionButton variant="ghost">
                    <Box mr={3} color="white">
                      {menuGroupList[menuGroup].icon}
                    </Box>
                    <Text
                      as="span"
                      flex="1"
                      color="white"
                      textAlign="left"
                      textTransform="capitalize"
                      fontWeight="bold"
                    >
                      {menuGroup}
                    </Text>
                    <AccordionIcon color="white" />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    {menuGroupList[menuGroup].children.map((menu, i) => {
                      return (
                        <Button
                          key={menu.val + i}
                          w="100%"
                          variant="ghost"
                          color="white"
                          justifyContent="start"
                          textTransform="capitalize"
                          bg={
                            location.pathname === menu.path
                              ? 'whiteAlpha.300'
                              : 'transparent'
                          }
                          _hover={{ bg: 'whiteAlpha.300' }}
                          onClick={() => navigate(menu.path)}
                        >
                          <Box mr={3}>{menu.icon}</Box>
                          {menu.val}
                        </Button>
                      );
                    })}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            );
          })}
        </CardBody>
        <CardFooter h="60px">
          <Text color="white" fontSize="xs">
            {new Date().getFullYear()} © Vann.
          </Text>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default Menu;
