import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import css from './index.module.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { PRODUCTS_PATH, SERVICES_PATH, US_PATH, HOME_PATH } from '@routes';
import { CloseIcon } from '@chakra-ui/icons';

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
  className?: string;
}

const NavDrawer: React.FC<NavDrawerProps> = props => {
  const { open, onClose, className } = props;
  const [isLargerThan668] = useMediaQuery('(min-width: 668px)');
  const drawerSize = useBreakpointValue({ base: 'full', sm: 'xs' });

  React.useEffect(() => {
    if (isLargerThan668) onClose();
  }, [isLargerThan668, onClose]);

  return (
    <Drawer onClose={onClose} isOpen={open} size={drawerSize} placement='left'>
      <DrawerOverlay />
      <DrawerContent className={cn(css['root'], className)}>
        <DrawerHeader className={css['root-header']}>
          <Flex>
            <IconButton
              size='sm'
              aria-label='Toggle menu'
              icon={<CloseIcon color='gray.600' boxSize='0.75rem' />}
              onClick={onClose}
            />
            <Text flex={1}>Menú</Text>
          </Flex>
          <Button size='xs' colorScheme='teal'>
            Iniciar sesión
          </Button>
        </DrawerHeader>
        <DrawerBody as='main' className={css['root-body']}>
          <Box as='nav' className={css['root-nav']}>
            <NavLink
              to={HOME_PATH}
              onClick={onClose}
              className={({ isActive }) => (isActive ? css['drawer-nav-item-active'] : '')}
            >
              Inicio
            </NavLink>
            <NavLink
              to={US_PATH}
              onClick={onClose}
              className={({ isActive }) => (isActive ? css['drawer-nav-item-active'] : '')}
            >
              Nosotros
            </NavLink>
            <NavLink
              to={PRODUCTS_PATH}
              onClick={onClose}
              className={({ isActive }) => (isActive ? css['drawer-nav-item-active'] : '')}
            >
              Productos
            </NavLink>
            <NavLink
              to={SERVICES_PATH}
              onClick={onClose}
              className={({ isActive }) => (isActive ? css['drawer-nav-item-active'] : '')}
            >
              Servicios
            </NavLink>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
