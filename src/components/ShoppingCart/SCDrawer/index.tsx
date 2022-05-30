import React from 'react';
import css from './index.module.scss';
import cn from 'classnames';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon, CloseIcon } from '@chakra-ui/icons';
import { ThousandSeparator } from '@utils';
import { SCCard } from '@components';

interface SCDrawerProps {
  open: boolean;
  onClose: () => void;
  className?: string;
}

const SCDrawer: React.FC<SCDrawerProps> = props => {
  const { open, onClose, className } = props;
  const drawerSize = useBreakpointValue({ base: 'full', sm: 'sm', xl: 'md' });

  return (
    <Drawer onClose={onClose} isOpen={open} size={drawerSize} placement='right'>
      <DrawerOverlay />
      <DrawerContent className={cn(css['root'], className)}>
        <DrawerHeader className={css['root-header']}>
          <IconButton
            size='sm'
            aria-label='Toggle menu'
            icon={<CloseIcon color='gray.600' boxSize='0.75rem' />}
            onClick={onClose}
          />
          <Text flex={1}>Carrito de compras</Text>
        </DrawerHeader>
        <DrawerBody as='main' p={0}>
          <Box className={css['root-content']}>
            <SCCard />
            <SCCard />
            <SCCard />
            <SCCard />
          </Box>
          <Box as='footer' className={css['root-footer']} bg='teal' zIndex='sticky'>
            <Stat className={css['root-subtotal']}>
              <StatLabel className={css['root-subtotal-label']} fontWeight='light'>
                Subtotal
              </StatLabel>
              <StatNumber className={css['root-subtotal-value']}>
                ${ThousandSeparator(2000000)}
              </StatNumber>
            </Stat>
            <Button rightIcon={<ArrowForwardIcon />} size='sm'>
              Comprar
            </Button>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SCDrawer;
