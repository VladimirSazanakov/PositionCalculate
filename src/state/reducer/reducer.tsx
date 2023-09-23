import { createSlice } from '@reduxjs/toolkit';

interface priceState {
  price: number;
  nds: number;
  snizhenie: number;
}

const initialState: priceState = {
  price: 0,
  nds: 10,
  snizhenie: 0
}

export const price = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setPrice(state, action) {
      state.price = action.payload;
    },
    setNds(state, action) {
      state.nds = action.payload;
    },
    setSnizhenie(state, action) {
      state.snizhenie = action.payload;
    },
    resetState() {
      initialState;
    }

  }
});

export const reducer = price.reducer;
export const { setPrice, setSnizhenie, setNds, resetState } = price.actions;
