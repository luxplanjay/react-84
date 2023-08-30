import { Wrapper } from './SearchBar.styled';
import { useQueryParams } from 'hooks/useQueryParams';

export const SearchBar = ({ children }) => {
  const { reset } = useQueryParams();

  return (
    <Wrapper>
      {children}
      <button onClick={reset}>Reset filters</button>
    </Wrapper>
  );
};
