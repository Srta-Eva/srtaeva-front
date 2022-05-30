import React from 'react';
import { Box, Radio, RadioGroup } from '@chakra-ui/react';
import cn from 'classnames';
import css from './index.module.scss';
import LabelFilter from '../LabelFilter';

type RadioBtnType = {
  name: string;
  value: string;
};

interface RadioBtnGroupFilterProps {
  label: string;
  options: RadioBtnType[];
  className?: string;
}

const RadioBtnGroupFilter: React.FC<RadioBtnGroupFilterProps> = props => {
  const { label, options, className } = props;

  return (
    <Box className={cn(css['root'], className)}>
      <LabelFilter className={css['root-boxTitle']}>{label}</LabelFilter>
      <RadioGroup
        name='pet'
        defaultValue=''
        defaultChecked
        colorScheme='teal'
        className={css['root-radioBtns']}
      >
        {options.map(({ name, value }) => (
          <Radio spacing={4} value={value} key={name + value}>
            {name}
          </Radio>
        ))}
      </RadioGroup>
    </Box>
  );
};

export default RadioBtnGroupFilter;
