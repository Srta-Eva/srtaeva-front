import { Box } from "@chakra-ui/react"
import { Breadcrumb, ItemCard, ProductsFilter, SearchInput } from "@components"
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
        
        <SearchInput className={css['root-search']} />

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