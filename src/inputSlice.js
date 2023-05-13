import { createSlice } from '@reduxjs/toolkit';

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    inputValue: '',
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    clearInputValue: (state) => {
      state.inputValue = '';
    },
  },
});

export const { setInputValue, clearInputValue} = inputSlice.actions;

export default inputSlice.reducer;
