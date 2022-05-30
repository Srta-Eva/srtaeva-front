import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Box, IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { Breadcrumb, ItemCard, ProductsFilter } from "@components"
import { ProductsGrid, MainWithFilter } from "@layouts"
import css from './index.module.scss';

const Products = () => {

  const items = [
    {
      name: 'Guaumor Adultos Razas Medianas y Grandes',
      rate: 4,
      price: 80000,
      image: 'https://i.pinimg.com/736x/42/65/11/426511cce71d8c73d18a83328f22b4f3.jpg',
      specialPrice: 70000,
    }, {
      name: 'Guaumor Adultos Razas Medianas y Grandes',
      rate: 4,
      price: 80000,
      image: 'https://i.pinimg.com/736x/42/65/11/426511cce71d8c73d18a83328f22b4f3.jpg',
      specialPrice: 70000,
    },{
      name: 'Guaumor Adultos Razas Medianas y Grandes',
      rate: 4,
      price: 80000,
      image: 'https://i.pinimg.com/736x/42/65/11/426511cce71d8c73d18a83328f22b4f3.jpg',
      specialPrice: 70000,
    },{
      name: 'Guaumor Adultos Razas Medianas y Grandes',
      rate: 4,
      price: 80000,
      image: 'https://i.pinimg.com/736x/42/65/11/426511cce71d8c73d18a83328f22b4f3.jpg',
      specialPrice: 70000,
    },{
      name: 'Guaumor Adultos Razas Medianas y Grandes',
      rate: 4,
      price: 80000,
      image: 'https://i.pinimg.com/736x/42/65/11/426511cce71d8c73d18a83328f22b4f3.jpg',
      specialPrice: 70000,
    },{
      name: 'Guaumor Adultos Razas Medianas y Grandes',
      rate: 4,
      price: 80000,
      image: 'https://i.pinimg.com/736x/42/65/11/426511cce71d8c73d18a83328f22b4f3.jpg',
      specialPrice: 70000,
    },{
      name: 'Guaumor Adultos Razas Medianas y Grandes',
      rate: 4,
      price: 80000,
      image: 'https://i.pinimg.com/736x/42/65/11/426511cce71d8c73d18a83328f22b4f3.jpg',
      specialPrice: 70000,
    },{
      name: 'Guaumor Adultos Razas Medianas y Grandes',
      rate: 4,
      price: 80000,
      image: 'https://i.pinimg.com/736x/42/65/11/426511cce71d8c73d18a83328f22b4f3.jpg',
      specialPrice: 70000,
    },{
      name: 'Guaumor Adultos Razas Medianas y Grandes',
      rate: 4,
      price: 80000,
      image: 'https://i.pinimg.com/736x/42/65/11/426511cce71d8c73d18a83328f22b4f3.jpg',
      specialPrice: 70000,
    },{
      name: 'Guaumor Adultos Razas Medianas y Grandes',
      rate: 4,
      price: 80000,
      image: 'https://i.pinimg.com/736x/42/65/11/426511cce71d8c73d18a83328f22b4f3.jpg',
      specialPrice: 70000,
    },{
      name: 'Guaumor Adultos Razas Medianas y Grandes',
      rate: 4,
      price: 80000,
      image: 'https://i.pinimg.com/736x/42/65/11/426511cce71d8c73d18a83328f22b4f3.jpg',
      specialPrice: 70000,
    }
  ]

  const breadcrumbs = [
    { name: 'Home', route: '#' },
    { name: 'Products', route: '#' },
    { name: 'Perros', route: '#' }
  ]

  return (
    <Box as="section">
      <MainWithFilter
        Filters={ProductsFilter}
        className={css['root']}
      >
        <Box className={css['root-breadcrumb']}>
          <Breadcrumb items={breadcrumbs} />
        </Box>
        <InputGroup marginBlockEnd={4}>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.400' />
          </InputLeftElement>
          <Input type='text' placeholder="¿Que estás buscando hoy?" />
          <InputRightElement width='4.5rem'>
            <IconButton
              aria-label='Borrar buscador'
              icon={<SmallCloseIcon color="gray.400" />}
              variant='unstyled'
            />
          </InputRightElement>
        </InputGroup>

        <ProductsGrid>
          {items.map(({ name, rate, price, image, specialPrice}, index) => (
            <ItemCard
              name={name}
              rate={rate}
              price={price}
              image={image}
              specialPrice={specialPrice}
              key={index}
            />
          ))}
        </ProductsGrid>
      </MainWithFilter>
    </Box>
  )
}

export default Products