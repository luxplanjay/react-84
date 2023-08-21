import Modal from 'react-modal';
import { Topic, Wrapper, Text } from './QuizCard.styled';
import { Component } from 'react';

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

export class QuizCard extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const {
      item: { id, topic, level, time, questions },
      onDelete,
    } = this.props;

    return (
      <Wrapper>
        <Topic onClick={this.openModal}>{topic}</Topic>
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
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <h1>{topic}</h1>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </Wrapper>
    );
  }
}
