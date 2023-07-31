export const QuizCard = ({ item: { topic, level, time, questions } }) => {
  return (
    <div>
      <h2>{topic}</h2>
      <p>Level: {level}</p>
      <p>Time: {time} min</p>
      <p>Questions: {questions}</p>
    </div>
  );
};
