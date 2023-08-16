import axios from 'axios';

axios.defaults.baseURL = 'https://64dcf6bce64a8525a0f76db7.mockapi.io/api';

export const fetchQuizzes = async () => {
  const response = await axios.get('/quizzes');
  return response.data;
};

export const deleteQuiz = async quizId => {
  const response = await axios.delete(`/quizzes/${quizId}`);
  return response.data;
};

export const createQuiz = async quiz => {
  const response = await axios.post('/quizzes', quiz);
  return response.data;
};
