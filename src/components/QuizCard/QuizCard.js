import { Topic, Wrapper, Text } from './QuizCard.styled';

export const QuizCard = ({
  item: { id, topic, level, time, questions },
  onDelete,
}) => {
  return (
    <Wrapper>
      <Topic>{topic}</Topic>
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
