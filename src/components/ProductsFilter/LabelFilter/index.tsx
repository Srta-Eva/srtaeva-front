import { Text } from '@chakra-ui/react';
import React from 'react';

interface LabelFilterProps {
  children: React.ReactNode;
  className?: string;
}

const LabelFilter: React.FC<LabelFilterProps> = (props) => {
  const { children, className } = props;

  return (
    <Text
        fontSize="xl"
        fontWeight="semibold"
        className={className}
        color="teal.400"
      >
        {children}
      </Text>
  );
}

export default LabelFilter;