import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'locale',
  initialState: {
    lang: 'uk',
  },
  reducers: {
    changeLang(state, action) {
      state.lang = action.payload;
    },
  },
});

export const localeReducer = slice.reducer;
export const { changeLang } = slice.actions;
