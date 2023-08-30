import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { fetchQuizById } from 'api';

const SingleQuizPage = () => {
  const location = useLocation();

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

  const backLinkHref = location?.state?.from ?? '/quizzes';

  return (
    <div>
      <Link to={backLinkHref}>
        <AiOutlineArrowLeft />
        Назад к квизам
      </Link>
      {quiz && <h1>{quiz.topic}</h1>}
    </div>
  );
};

export default SingleQuizPage;
