import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './accountSlice';
import { localeReducer } from './localeSlice';

const myMd1 = store => next => action => {
  console.log('MyMd1 ', action);
  next(action);
};

const myMd2 = store => next => action => {
  console.log('MyMd2', action);
  next(action);
};

// const a = () => {
//   return {
//     type: 'a',
//     payload: 10,
//     meta: {
//       ga: true,
//       log: true
//     }
//   }
// }

// const b = () => {
//   return {
//     type: 'b',
//     payload: 10,
//     meta: {
//       ga: true,
//     },
//   };
// };

// const c = () => {
//   return {
//     type: 'c',
//     payload: 10,
//   };
// };

// const gaMiddlware = store => next => action => {
//   if (action?.meta?.ga) {
//     GA.send(action);
//   }

//   next(action);
// };

export const store = configureStore({
  reducer: {
    account: accountReducer,
    locale: localeReducer,
  },
  middleware: getDefaultMiddlware => {
    const defaultMd = getDefaultMiddlware();
    return [...defaultMd, myMd2, myMd1];
  },
});

// const increment = v => {
//   return {
//     type: 'x',
//     payload: v,
//   };
// };

// dispatch(increment(5)); // Обьект

// const fetchTasks = () => {
//   return async dispatch => {
//     try {
//       // Индикатор загрузки
//       dispatch(fetchingInProgress());

//       // HTTP-запрос
//       const response = await axios.get('/tasks');

//       // Обработка данных
//       dispatch(fetchingSuccess(response.data));
//     } catch (e) {
//       // Обработка ошибки
//       dispatch(fetchingError(e.message));
//     }
//   };
// };

// dispatch(fetchTasks()); //

// // redux thunk

// const thunkMiddlware = store => next => action => {
//   if (typeof action === 'function') {
//     action(store.dispatch);
//     return;
//   }

//   next(action);
// };
