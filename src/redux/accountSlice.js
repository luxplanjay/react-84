import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'account',
  initialState: {
    balance: 100,
  },
  reducers: {
    deposit: {
      reducer(state, action) {
        state.balance += action.payload;
      },
      prepare(value) {
        return {
          payload: value,
          meta: {
            ga: true,
          },
        };
      },
    },
    withdraw: {
      reducer(state, action) {
        state.balance -= action.payload;
      },
      prepare(value) {
        return {
          payload: value,
          meta: {
            log: true,
          },
        };
      },
    },
  },
});

export const accountReducer = slice.reducer;
export const { deposit, withdraw } = slice.actions;
