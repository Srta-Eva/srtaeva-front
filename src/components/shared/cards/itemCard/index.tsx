import React from 'react';
import { Box, Button, Divider, Image, Stat, StatNumber, Text } from '@chakra-ui/react';
import css from './index.module.scss';
import { ThousandSeparator } from '@utils';
import { ButtonGroup } from '@components';
import { Link } from 'react-router-dom';

interface ItemCardProps {
  name: string;
  rate: number;
  price: number;
  image: string;
  specialPrice?: number;
}

const ItemCard: React.FC<ItemCardProps> = props => {
  const { name, price, image, specialPrice } = props;

  return (
    <Box
      className={css['root']}
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      boxShadow='md'
    >
      <Box className={css['root-content']}>
        <Box as={Link} to='#' className={css['root-img']}>
          <Image
            className={css['root-img-content']}
            src={image}
            fallbackSrc='https://via.placeholder.com/150'
            alt='product'
          />
        </Box>
        <Box as='main' className={css['root-body']}>
          <Link to='#'>
            <Text fontSize='md' className={css['root-title']}>
              {name}
            </Text>
            <Box className={css['root-stars']}>⭐⭐⭐⭐⭐</Box>
            <Stat className={css['root-price']}>
              <StatNumber fontSize='md'>${ThousandSeparator(price)}</StatNumber>
            </Stat>

            {specialPrice && (
              <Stat className={css['root-price']}>
                <StatNumber fontSize='md'>${ThousandSeparator(specialPrice)}</StatNumber>
              </Stat>
            )}
          </Link>

          <Divider className={css['root-divider']} />
          <Box className={css['root-btnGroup']}>
            <ButtonGroup
              items={[
                { name: '2kg', disabled: false },
                { name: '4kg', disabled: false },
                { name: '5kg', disabled: true },
              ]}
            />
          </Box>
        </Box>
      </Box>
      <Button display='block' className={css['root-addBtn']} colorScheme='teal'>
        Agregar al carrito
      </Button>
    </Box>
  );
};

export default ItemCard;
