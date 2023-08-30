import { Link, useLocation } from 'react-router-dom';
import { Topic, Wrapper, Text } from './QuizCard.styled';

export const QuizCard = ({
  item: { id, topic, level, time, questions },
  onDelete,
}) => {
  const location = useLocation();

  return (
    <Wrapper>
      <Link to={`/quizzes/${id}`} state={{ from: location }}>
        <Topic>{topic}</Topic>
      </Link>
      <Text>
        <b>Level:</b> {level}
      </Text>
      <Text>
        <b>Time:</b> {time} min
      </Text>
      <Text>
        <b>Questions:</b> {questions}
      </Text>
      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </Wrapper>
  );
};
