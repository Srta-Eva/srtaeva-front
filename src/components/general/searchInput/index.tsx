import React from "react"
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons"
import { IconButton, Input, InputGroup, InputLeftElement, InputRightElement, ScaleFade } from "@chakra-ui/react"
import cn from 'classnames';
import css from './index.module.scss';

interface SearchInputProps {
  className?: string
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const{ className } = props;

  const [value, setValue] = React.useState('');

  const onChangeValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue((event.target as HTMLInputElement).value);
  }

  return (
    <form onChange={onChangeValue}>
      <InputGroup className={cn(css['root'], className)}>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.400' />
        </InputLeftElement>
        <Input
          type='text'
          placeholder="¿Que estás buscando hoy?"
          className={css['root-input']}
          defaultValue={value}
          name="search"
        />
        <ScaleFade in={Boolean(value)}>
          <InputRightElement>
            <IconButton
              aria-label='Borrar buscador'
              icon={<SmallCloseIcon color="gray.400" />}
              variant='ghost'
              type="reset"
            />
          </InputRightElement>
        </ScaleFade>
      </InputGroup>
    </form>
  )
}

export default SearchInput