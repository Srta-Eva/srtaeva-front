import { Box, Flex, IconButton, Image, Stat, StatNumber, Text } from '@chakra-ui/react';
import React from 'react';
import cn from 'classnames';
import css from './index.module.scss';
import { ThousandSeparator } from '@utils';
import { Link } from 'react-router-dom';
import { DeleteIcon } from '@chakra-ui/icons';
import { IncrementAndDecrement } from '@components';

interface SCCardProps {
  className?: string;
}

const SCCard: React.FC<SCCardProps> = props => {
  const { className } = props;

  return (
    <Box className={cn(css['root'], className)}>
      <Box as={Link} to='#' className={css['root-img']}>
        <Image
          className={css['root-img-content']}
          src='https://i.pinimg.com/736x/42/65/11/426511cce71d8c73d18a83328f22b4f3.jpg'
          fallbackSrc='https://via.placeholder.com/150'
          alt='product'
        />
      </Box>
      <Box className={css['root-body']}>
        <Flex className={css['root-header']}>
          <Text fontSize='sm' className={css['root-title']}>
            Guaumor Adultos Razas Medianas y Grandes
          </Text>
          <IconButton
            aria-label='Elimnar producto del carrito de compras'
            icon={<DeleteIcon color='gray.300' />}
            rounded='full'
            variant='ghost'
            size='md'
          />
        </Flex>
        <Text className={css['root-description']}>Presentación: 2kg</Text>
        <Stat>
          <StatNumber fontSize='0.9rem' fontWeight='semibold' className={css['root-price']}>
            ${ThousandSeparator(2450)} x und
          </StatNumber>
        </Stat>
        <Flex className={css['root-footer']}>
          <IncrementAndDecrement className={css['root-incrementBtns']} />
          <Stat flex='initial'>
            <StatNumber fontSize='0.9rem' fontWeight='semibold' className={css['root-price']}>
              ${ThousandSeparator(2450)}
            </StatNumber>
          </Stat>
        </Flex>
      </Box>
    </Box>
  );
};

export default SCCard;
