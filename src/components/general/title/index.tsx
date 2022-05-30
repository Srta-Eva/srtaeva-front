import { Text } from '@chakra-ui/react';
import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = props => {
  const { children } = props;

  return <Text fontSize="3xl" fontWeight="bold">{children}</Text>;
};

export default Title;
