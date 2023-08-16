import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar/SearchBar';
import { Layout } from './Layout';
import { Component } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { LevelFilter } from './LevelFilter';
import { TopicFilter } from './TopicFilter';
import { createQuiz, deleteQuiz, fetchQuizzes } from 'api';

const localStorageKey = 'quiz-filters';

const intialFilters = {
  topic: '',
  level: 'all',
};

export class App extends Component {
  state = {
    quizItems: [],
    filters: intialFilters,
    loading: false,
  };

  async componentDidMount() {
    const savedFilters = localStorage.getItem(localStorageKey);
    if (savedFilters !== null) {
      this.setState({
        filters: JSON.parse(savedFilters),
      });
    }

    try {
      this.setState({ loading: true });
      const quizItems = await fetchQuizzes();
      this.setState({ quizItems, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { filters: prevFilters } = prevState;
    const { filters: nextFilters } = this.state;

    if (prevFilters !== nextFilters) {
      localStorage.setItem(localStorageKey, JSON.stringify(nextFilters));
    }
  }

  resetFilters = () => {
    this.setState({
      filters: intialFilters,
    });
  };

  changeTopicFilter = newTopic => {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          topic: newTopic,
        },
      };
    });
  };

  changeLevelFilter = newLevel => {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          level: newLevel,
        },
      };
    });
  };

  handleDelete = async quizId => {
    try {
      const deletedQuiz = await deleteQuiz(quizId);
      this.setState(prevState => ({
        quizItems: prevState.quizItems.filter(
          quiz => quiz.id !== deletedQuiz.id
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  addQuiz = async newQuiz => {
    try {
      const createdQuiz = await createQuiz(newQuiz);
      this.setState(prevState => ({
        quizItems: [...prevState.quizItems, createdQuiz],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  getVisibleQuizItems = () => {
    const { quizItems, filters } = this.state;
    const lowerCaseTopic = filters.topic.toLowerCase();

    return quizItems.filter(quiz => {
      const hasTopic = quiz.topic.toLowerCase().includes(lowerCaseTopic);
      const hasMatchingLevel = quiz.level === filters.level;
      return filters.level === 'all' ? hasTopic : hasTopic && hasMatchingLevel;
    });
  };

  render() {
    const { filters, loading } = this.state;
    const visibleQuizItems = this.getVisibleQuizItems();

    return (
      <Layout>
        <SearchBar onReset={this.resetFilters}>
          <TopicFilter
            value={filters.topic}
            onChange={this.changeTopicFilter}
          />
          <LevelFilter
            value={filters.level}
            onChange={this.changeLevelFilter}
          />
        </SearchBar>
        <QuizForm onAdd={this.addQuiz} />

        {loading ? (
          <div>LOADING...</div>
        ) : (
          <QuizList items={visibleQuizItems} onDelete={this.handleDelete} />
        )}
      </Layout>
    );
  }
}
