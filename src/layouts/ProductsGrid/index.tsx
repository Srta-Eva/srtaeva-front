import { Box } from "@chakra-ui/react";
import React from "react"
import cn from 'classnames';
import css from './index.module.scss';

interface ProductsGridProps {
  children: React.ReactNode;
  className?: string;
}

const ProductsGrid: React.FC<ProductsGridProps> = (props) => {
  const { children, className } = props;

  return (
    <Box className={cn(css['root'], className)}>
      { children }
    </Box>
  )
}

export default ProductsGrid