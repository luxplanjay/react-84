import { fetchQuizById } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleQuizPage = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const fetchedQuiz = await fetchQuizById(quizId);
        setQuiz(fetchedQuiz);
      } catch (error) {
        console.log(error);
      }
    }

    fetchQuiz();
  }, [quizId]);

  return <div>{quiz && <h1>{quiz.topic}</h1>}</div>;
};

export default SingleQuizPage;
