import { QuizList } from './QuizList/QuizList';
import quizItems from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { HiAcademicCap, HiAdjustments, HiArchive } from 'react-icons/hi';
import { IconButton } from './IconButton/IconButton';

export const App = () => {
  return (
    <Layout>
      <SearchBar />
      <QuizList items={quizItems} />

      <IconButton variant="primary" size="sm">
        <HiAcademicCap />
      </IconButton>
      <IconButton variant="secondary" size="md">
        <HiArchive />
      </IconButton>
      <IconButton variant="secondary" size="lg">
        <HiAdjustments />
      </IconButton>

      <GlobalStyle />
    </Layout>
  );
};
