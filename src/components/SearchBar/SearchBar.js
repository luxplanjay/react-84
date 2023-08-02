import { LevelFilter } from '../LevelFilter';
import { TopicFilter } from '../TopicFilter';
import { Wrapper } from './SearchBar.styled';

export const SearchBar = () => {
  return (
    <Wrapper>
      <TopicFilter />
      <LevelFilter />
    </Wrapper>
  );
};
