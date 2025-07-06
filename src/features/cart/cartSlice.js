import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helpers/helpers";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const exists = state.selectedItems.find(
        (i) => i.id === action.payload.id
      );
      if (!exists) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.checkout = false;
      }
    },

    removeItem: (state, action) => {
      const newItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );
      state.selectedItems = newItems;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },

    increase: (state, action) => {
      const index = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      if (index !== -1) {
        state.selectedItems[index].quantity++;
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
      }
    },

    decrease: (state, action) => {
      const index = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      if (index !== -1 && state.selectedItems[index].quantity > 1) {
        state.selectedItems[index].quantity--;
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
      }
    },

    checkout: (state) => {
      localStorage.removeItem("cartState");
      state.selectedItems = [];
      state.total = 0;
      state.itemsCounter = 0;
      state.checkout = true;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, increase, decrease, checkout } =
  cartSlice.actions;
