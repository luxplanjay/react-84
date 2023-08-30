import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { QuizList } from 'components/QuizList/QuizList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { LevelFilter } from 'components/LevelFilter';
import { TopicFilter } from 'components/TopicFilter';
import { deleteQuizById, fetchQuizzes } from 'api';
import { useQueryParams } from 'hooks/useQueryParams';

const QuizzesPage = () => {
  const { topic, level } = useQueryParams();

  const [quizItems, setQuizItems] = useState([]);
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
    const lowerCaseTopic = topic.toLowerCase();

    return quizItems.filter(quiz => {
      const hasTopic = quiz.topic.toLowerCase().includes(lowerCaseTopic);
      const hasMatchingLevel = quiz.level === level;
      return level === 'all' ? hasTopic : hasTopic && hasMatchingLevel;
    });
  };

  const visibleQuizItems = getVisibleQuizItems();

  return (
    <div>
      <SearchBar>
        <TopicFilter />
        <LevelFilter />
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
