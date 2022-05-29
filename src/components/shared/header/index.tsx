import React from "react";
import { Button, Link, Center, Flex, Text } from '@chakra-ui/react'
import { NavLink, Link as ReactLink } from 'react-router-dom'
import { HOME_PATH, PRODUCTS_PATH, SERVICES_PATH, US_PATH } from "@routes";

const Header: React.FC = () => {
  return (
    <Center
      as='header'
      border="solid 1px"
      borderColor="gray.200"
      paddingInline={8}
      paddingBlock={4}
      columnGap={8}
      position="sticky"
      insetBlock={0}
      zIndex={10}
    >
      <ReactLink to={HOME_PATH}> Inicio </ReactLink>
      <Flex as="nav" flex={1} columnGap={8}>
        <Link
          as={NavLink}
          to={US_PATH}
          activeClassName="actived_link"
        >
          Nosotros
        </Link>
        <Link
          as={NavLink}
          to={PRODUCTS_PATH}
          activeClassName="actived_link"
        >
          Productos
        </Link>
        <Link
          as={NavLink}
          to={SERVICES_PATH}
          activeClassName="actived_link"
        >
          Servicios
        </Link>
      </Flex>
      <Center columnGap={2}>
        <Button size='sm'>Iniciar sesión</Button>
        <Center
          as={Button}
          position="relative"
          aria-label="Carrito de compras"
          p={0} borderRadius="full"
        >
          <Center as="span"> 🛒 </Center>
          <Center
            as="span"
            bg="red.600"
            display="inline-flex"
            position="absolute"
            insetBlockEnd={-1}
            insetInlineStart={0}
            inlineSize={4}
            blockSize={4}
            borderRadius="full"
          >
            <Text
              as="span"
              fontSize="0.6rem"
              color="white"
              fontWeight="bold"
            >
              12
            </Text>
          </Center>
        </Center>
      </Center>
    </Center>
  );
}

export default Header