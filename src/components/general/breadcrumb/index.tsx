import React from "react";
import { Breadcrumb as BreadcrumbChakra, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import cn from 'classnames';
import css from './index.module.scss';
import { ChevronRightIcon } from "@chakra-ui/icons";

type BreadcrumbItemProps = {
  name: string;
  route: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItemProps[];
  className?: string;
}

const Breadcrumb:React.FC<BreadcrumbProps> = (props) => {
  const { items, className } = props;

  return (
    <BreadcrumbChakra
      className={cn(css['root'], className)}
      fontWeight='normal' fontSize='sm' spacing='8px'
      separator={<ChevronRightIcon color='gray.400' />}
    >
    {
      items.map(({ name, route }, index) => (
        <BreadcrumbItem
          key={`breadcrumb-${index}`}
          isCurrentPage={index === items.length - 1}
        >
          <BreadcrumbLink
            as={Link}
            to={route}
            color={index === items.length - 1 ? 'black' : 'gray.400'}
          >
            {name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))
    }
    </BreadcrumbChakra>
  )
}

export default Breadcrumb