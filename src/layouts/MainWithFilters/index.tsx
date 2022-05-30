import React from "react";
import { Box } from "@chakra-ui/react";
import css from './index.module.scss';
import cn from 'classnames';

interface MainWithFilterProps {
  children: React.ReactNode;
  Filters: any;
  className?: string;
}

const MainWithFilter:React.FC<MainWithFilterProps> = (props) => {
  const { children, Filters, className } = props;
  
  return (
    <Box className={css['root']}>
      <Box
        as="aside"
        className={css['root-aside']}
        borderColor="gray.200"
      >
        <Filters />
      </Box>
      <Box as="main" className={cn(css['root-main'], className)}>
        { children }
      </Box>
    </Box>
  )
}

export default MainWithFilter