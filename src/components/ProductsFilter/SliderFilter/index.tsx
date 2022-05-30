import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stat,
  StatNumber,
} from '@chakra-ui/react';
import React from 'react';
import LabelFilter from '../LabelFilter';
import cn from 'classnames';
import css from './index.module.scss';
import { ThousandSeparator } from '@utils';

interface SliderFilterProps {
  label: string;
  min: number;
  max: number;
  step: number;
  name: string;
  className?: string;
  isMoney?: boolean;
}

const SliderFilter: React.FC<SliderFilterProps> = props => {
  const { label, min, max, step, name, className, isMoney } = props;
  const [value, setValue] = React.useState<number[]>([0, 100]);

  return (
    <Box className={cn(css['root'], className)}>
      <LabelFilter className={css['root-boxTitle']}>{label}</LabelFilter>

      <Box>
        <RangeSlider
          aria-label={['min', 'max']}
          defaultValue={[min, max]}
          colorScheme='teal'
          min={min}
          max={max}
          step={step}
          name={name}
          onChange={val => setValue(val)}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} borderColor='gray.200' boxSize={4} />
          <RangeSliderThumb index={1} borderColor='gray.200' boxSize={4} />
        </RangeSlider>
        <Box className={css['root-stats']}>
          <Stat className={css['root-stat']}>
            <StatNumber fontSize='sm' className={css['root-stat-start']}>
              {isMoney && '$'}
              {ThousandSeparator(value[0])}
            </StatNumber>
          </Stat>
          <Stat className={css['root-stat']}>
            <StatNumber fontSize='sm' className={css['root-stat-end']}>
              {isMoney && '$'}
              {ThousandSeparator(value[1])}
            </StatNumber>
          </Stat>
        </Box>
      </Box>
    </Box>
  );
};

export default SliderFilter;
