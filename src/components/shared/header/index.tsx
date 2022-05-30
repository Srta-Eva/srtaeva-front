import React from 'react';
import { Button, Link, Center, Text, IconButton, Box } from '@chakra-ui/react';
import { NavLink, Link as ReactLink } from 'react-router-dom';
import { HOME_PATH, PRODUCTS_PATH, SERVICES_PATH, US_PATH } from '@routes';
import { HamburgerIcon } from '@chakra-ui/icons';
import css from './index.module.scss';

const Header: React.FC = () => {
  return (
    <Box as='header' className={css['header']} borderColor='gray.200' bg='white' zIndex="sticky">
      <Box className={css['header-box']}>
        <Box className={css['header-boxLogo']}>
          <Box className={css['header-menuBtn']}>
            <IconButton size='sm' aria-label='Toggle menu' icon={<HamburgerIcon />} />
          </Box>
          <ReactLink to={HOME_PATH}> Srta. Eva </ReactLink>
        </Box>
        <Box as='nav' className={css['header-nav']}>
          <NavLink
            to={US_PATH}
            className={({ isActive}) => isActive ? css['header-nav-item-active'] : ''}
          >
            Nosotros
          </NavLink>
          <NavLink
            to={PRODUCTS_PATH}
            className={({ isActive}) => isActive ? css['header-nav-item-active'] : ''}
          >
            Productos
          </NavLink>
          <NavLink
            to={SERVICES_PATH}
            className={({ isActive}) => isActive ? css['header-nav-item-active'] : ''}
          >
            Servicios
          </NavLink>
        </Box>
        <Box className={css['header-boxBtns']}>
          <Box className={css['header-loginBtn']}>
            <Button size='sm'>Iniciar sesión</Button>
          </Box>
          <Center
            as={Button}
            position='relative'
            aria-label='Carrito de compras'
            p={0}
            borderRadius='full'
          >
            <Center as='span'> 🛒 </Center>
            <Center
              as='span'
              bg='red.600'
              display='inline-flex'
              position='absolute'
              insetBlockEnd={-1}
              insetInlineStart={0}
              inlineSize={4}
              blockSize={4}
              borderRadius='full'
            >
              <Text as='span' fontSize='0.6rem' color='white' fontWeight='bold'>
                12
              </Text>
            </Center>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
