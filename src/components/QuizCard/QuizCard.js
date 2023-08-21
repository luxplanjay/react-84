import { useState } from 'react';
import Modal from 'react-modal';
import { Topic, Wrapper, Text } from './QuizCard.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const QuizCard = ({
  item: { id, topic, level, time, questions },
  onDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper>
      <Topic onClick={() => setIsModalOpen(true)}>{topic}</Topic>
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
      >
        <h1>{topic}</h1>
        <button onClick={() => setIsModalOpen(false)}>close</button>
      </Modal>
    </Wrapper>
  );
};
