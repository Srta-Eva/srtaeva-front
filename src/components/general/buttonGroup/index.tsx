import { Button } from "@chakra-ui/react"
import React from "react";
import css from './index.module.scss';
import cn from 'classnames';

type ButtonProp = {
  name: string;
  disabled?: boolean;
}

interface ButtonGroupProps {
  items: ButtonProp[],
  size?: 'xs' | 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
}

const ButtonGroup:React.FC<ButtonGroupProps> = (props) => {
  const { items, size = 'sm', fullWidth, className } = props;

  const [active, setActive] = React.useState<number>(0)

  return(
    <div role="group" className={cn(css['root'], fullWidth && css['root-fullwidth'], className)}>
      {items.map(({ name, disabled}, index) => (
        <Button
          key={`Button-group-${index}`}
          className={css['root-item']}
          borderRadius={0}
          variant={active === index ? 'solid' : 'outline'}
          colorScheme='teal'
          onClick={() => setActive(index)}
          size={size}
          disabled={disabled}
        >
          {name}
        </Button>
      ))}
    </div>
  )
}

export default ButtonGroup