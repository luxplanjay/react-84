import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'account',
  initialState: {
    balance: 100,
  },
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
  },
});

export const accountReducer = slice.reducer;
export const { deposit, withdraw } = slice.actions;

// export const deposit = createAction('account/deposit');
// export const withdraw = createAction('account/withdraw');

// export const accountReducer = createReducer({ balance: 100 }, builder =>
//   builder
//     .addCase(deposit, (state, action) => {
//       state.balance += action.payload;
//     })
//     .addCase(withdraw, (state, action) => {
//       state.balance -= action.payload;
//     })
// );
