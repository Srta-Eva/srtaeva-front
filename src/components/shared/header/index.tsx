import React from 'react';
import { NavLink, Link as ReactLink } from 'react-router-dom';
import {
  Button,
  Center,
  Text,
  IconButton,
  Box,
  Fade,
  useMediaQuery,
  ScaleFade,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavDrawer, SCDrawer } from '@components';
import { HOME_PATH, PRODUCTS_PATH, SERVICES_PATH, US_PATH } from '@routes';
import css from './index.module.scss';

const Header: React.FC = () => {
  const [isLargerThan428] = useMediaQuery('(min-width: 428px)');
  const [isLargerThan668] = useMediaQuery('(min-width: 668px)');

  const [isNavDrawerOpen, setIsNavDrawerOpen] = React.useState(false);
  const [isSCDrawerOpen, setIsSCDrawerOpen] = React.useState(false);

  const onHandleNavDrawer = (value: boolean) => setIsNavDrawerOpen(value);
  const onHandleSCDrawer = (value: boolean) => setIsSCDrawerOpen(value);

  return (
    <Box as='header' className={css['header']} borderColor='gray.200' bg='white' zIndex='sticky'>
      <Box className={css['header-box']}>
        <Box className={css['header-boxLogo']}>
          <ScaleFade in={!isLargerThan668} unmountOnExit>
            <IconButton
              size='sm'
              aria-label='Toggle menu'
              variant='ghost'
              icon={<HamburgerIcon />}
              onClick={() => onHandleNavDrawer(true)}
            />
          </ScaleFade>
          <ReactLink to={HOME_PATH}> Srta. Eva </ReactLink>
        </Box>
        <Box as='nav' className={css['header-nav']}>
          <Fade in={isLargerThan668} unmountOnExit>
            <NavLink
              to={US_PATH}
              className={({ isActive }) => (isActive ? css['header-nav-item-active'] : '')}
            >
              Nosotros
            </NavLink>
            <NavLink
              to={PRODUCTS_PATH}
              className={({ isActive }) => (isActive ? css['header-nav-item-active'] : '')}
            >
              Productos
            </NavLink>
            <NavLink
              to={SERVICES_PATH}
              className={({ isActive }) => (isActive ? css['header-nav-item-active'] : '')}
            >
              Servicios
            </NavLink>
          </Fade>
        </Box>

        <Box className={css['header-boxBtns']}>
          <ScaleFade in={isLargerThan428} unmountOnExit>
            <Button size='sm'>Iniciar sesión</Button>
          </ScaleFade>
          <Center
            as={Button}
            position='relative'
            aria-label='Carrito de compras'
            p={0}
            borderRadius='full'
            onClick={() => onHandleSCDrawer(true)}
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
      <NavDrawer open={isNavDrawerOpen} onClose={() => onHandleNavDrawer(false)} />
      <SCDrawer open={isSCDrawerOpen} onClose={() => onHandleSCDrawer(false)} />
    </Box>
  );
};

export default Header;
