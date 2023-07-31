import { LevelFilter } from './LevelFilter';
import { TopicFilter } from './TopicFilter';

export const SearchBar = () => {
  return (
    <div>
      <TopicFilter />
      <LevelFilter />
    </div>
  );
};
