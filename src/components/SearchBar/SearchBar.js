import { Wrapper } from './SearchBar.styled';

export const SearchBar = ({ onReset, children }) => {
  return (
    <Wrapper>
      {children}
      <button onClick={onReset}>Reset filters</button>
    </Wrapper>
  );
};
