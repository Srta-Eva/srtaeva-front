import { Box, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import cn from 'classnames';
import { MinusIcon, SmallAddIcon } from '@chakra-ui/icons';
import css from './index.module.scss';

interface IncrementAndDecrementProps {
  className?: string;
}

const IncrementAndDecrement: React.FC<IncrementAndDecrementProps> = props => {
  const { className } = props;

  const [value, setValue] = React.useState(1);

  const handleIncrementValue = () => setValue(value + 1);
  const handleDecrementValue = () => setValue(value - 1);

  return (
    <Box className={cn(css['root'], className)}>
      <IconButton
        aria-label='Decrement'
        variant='outline'
        borderStartEndRadius={0}
        borderEndEndRadius={0}
        icon={<MinusIcon boxSize='0.5rem' />}
        color='gray.500'
        size='xs'
        disabled={value === 1}
        onClick={handleDecrementValue}
      />
      <Box className={css['root-input']}>
        <Text as='span' fontSize='xs' color='gray.600'>
          {value < 10 ? `0${value}` : value}
        </Text>
      </Box>
      <IconButton
        aria-label='Increment'
        variant='outline'
        borderStartStartRadius={0}
        borderEndStartRadius={0}
        icon={<SmallAddIcon fontSize='xs' />}
        color='gray.500'
        size='xs'
        onClick={handleIncrementValue}
      />
    </Box>
  );
};

export default IncrementAndDecrement;
