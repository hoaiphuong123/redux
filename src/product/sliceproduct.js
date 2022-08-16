import { createSlice } from '@reduxjs/toolkit';

export const mapvalues = createSlice({
  name: 'mapvalue',
  initialState: {
    product: [],
    totalToPay: [],
    count: 0,
  },
  reducers: {
    sumTodo: (state, action) => {
      state.sum = action.payload;
    },
  },
});
