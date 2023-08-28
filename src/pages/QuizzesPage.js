import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { QuizList } from 'components/QuizList/QuizList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { LevelFilter } from 'components/LevelFilter';
import { TopicFilter } from 'components/TopicFilter';
import { deleteQuizById, fetchQuizzes } from 'api';

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

const QuizzesPage = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [filters, setFilters] = useState(getInitialFilters);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  console.log(params);

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

  const deleteQuiz = async quizId => {
    try {
      const deletedQuiz = await deleteQuizById(quizId);
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
    <div>
      <SearchBar onReset={resetFilters}>
        <TopicFilter value={filters.topic} onChange={changeTopicFilter} />
        <LevelFilter value={filters.level} onChange={changeLevelFilter} />
      </SearchBar>

      <div>
        <Link to="/create">Создать квиз</Link>
      </div>

      {loading ? (
        <div>LOADING...</div>
      ) : (
        <QuizList items={visibleQuizItems} onDelete={deleteQuiz} />
      )}
    </div>
  );
};

export default QuizzesPage;
