import { Box, Button, Flex, Text } from '@chakra-ui/react';
import css from './index.module.scss';
import { RadioBtnGroupFilter, SliderFilter } from '@components';

const ProductsFilter = () => {
  return (
    <Box className={css['root']} zIndex='sticky'>
      <Flex as='header' className={css['root-header']}>
        <Text fontSize='2xl' fontWeight='semibold'>
          {' '}
          Filtros{' '}
        </Text>
        <Button variant='ghost' size='sm' colorScheme='teal'>
          Limpiar
        </Button>
      </Flex>

      <Box className={css['root-content']}>
        <RadioBtnGroupFilter
          label='Mascota'
          options={[
            { name: 'Todos', value: '' },
            { name: 'Perro', value: 'dog' },
            { name: 'Gato', value: 'cat' },
          ]}
        />

        <RadioBtnGroupFilter
          label='Edad'
          options={[
            { name: 'Todos', value: '' },
            { name: 'Cachorros', value: 'puppy' },
            { name: 'Adulto', value: 'adult' },
            { name: 'Senior', value: 'senior' },
          ]}
        />
        <SliderFilter label='Precio' name='price' min={0} max={100000} step={5000} isMoney />
      </Box>
    </Box>
  );
};

export default ProductsFilter;
