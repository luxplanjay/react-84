import { QuizList } from './QuizList';
import quizItems from '../data.json';
import { SearchBar } from './SearchBar';

export const App = () => {
  return (
    <>
      <SearchBar />
      <QuizList items={quizItems} />
    </>
  );
};
