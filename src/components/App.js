import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar/SearchBar';
import { Layout } from './Layout';
import { QuizForm } from './QuizForm/QuizForm';
import { LevelFilter } from './LevelFilter';
import { TopicFilter } from './TopicFilter';
import { createQuiz, deleteQuiz, fetchQuizzes } from 'api';
import { useEffect, useState } from 'react';

const localStorageKey = 'quiz-filters';

const intialFilters = {
  topic: '',
  level: 'all',
};

const getInitialFilters = () => {
  const savedFilters = localStorage.getItem(localStorageKey);
  if (savedFilters !== null) {
    return JSON.parse(savedFilters);
  }
  return intialFilters;
};

export const App = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [filters, setFilters] = useState(getInitialFilters);
  const [loading, setLoading] = useState(false);

  // Фетч данных с бекенда
  useEffect(() => {
    async function getQuizzes() {
      try {
        setLoading(true);
        const quizItems = await fetchQuizzes();
        setQuizItems(quizItems);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getQuizzes();
  }, []);

  // Запись фильтров в localeStorage
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(filters));
  }, [filters]);

  const resetFilters = () => {
    setFilters(intialFilters);
  };

  const changeTopicFilter = newTopic => {
    setFilters(prevState => ({
      ...prevState,
      topic: newTopic,
    }));
  };

  const changeLevelFilter = newLevel => {
    setFilters(prevState => ({
      ...prevState,
      level: newLevel,
    }));
  };

  const addQuiz = async newQuiz => {
    try {
      const createdQuiz = await createQuiz(newQuiz);
      setQuizItems(prevState => [...prevState, createdQuiz]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteQuiz = async quizId => {
    try {
      const deletedQuiz = await deleteQuiz(quizId);
      setQuizItems(prevState =>
        prevState.filter(quiz => quiz.id !== deletedQuiz.id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getVisibleQuizItems = () => {
    const lowerCaseTopic = filters.topic.toLowerCase();

    return quizItems.filter(quiz => {
      const hasTopic = quiz.topic.toLowerCase().includes(lowerCaseTopic);
      const hasMatchingLevel = quiz.level === filters.level;
      return filters.level === 'all' ? hasTopic : hasTopic && hasMatchingLevel;
    });
  };

  const visibleQuizItems = getVisibleQuizItems();

  return (
    <Layout>
      <SearchBar onReset={resetFilters}>
        <TopicFilter value={filters.topic} onChange={changeTopicFilter} />
        <LevelFilter value={filters.level} onChange={changeLevelFilter} />
      </SearchBar>
      <QuizForm onAdd={addQuiz} />

      {loading ? (
        <div>LOADING...</div>
      ) : (
        <QuizList items={visibleQuizItems} onDelete={deleteQuiz} />
      )}
    </Layout>
  );
};
