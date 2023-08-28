import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { QuizForm } from 'components/QuizForm/QuizForm';
import { createQuiz } from 'api';

const CreateQuizPage = () => {
  const addQuiz = async newQuiz => {
    try {
      await createQuiz(newQuiz);
      toast.success('Все хорошо квиз добавлен');
    } catch (error) {
      console.log(error);
      toast.error('Все пропало, вешайся');
    }
  };

  return (
    <div>
      <div>
        <Link to="/quizzes">
          <AiOutlineArrowLeft />
          Назад к квизам
        </Link>
      </div>
      <QuizForm onAdd={addQuiz} />
    </div>
  );
};

export default CreateQuizPage;
