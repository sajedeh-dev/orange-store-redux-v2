import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";

// --- localStorage functions ---
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cartState");
    if (data === null) return undefined;
    return JSON.parse(data);
  } catch (err) {
    console.warn("Error reading from localStorage", err);
    return undefined;
  }
};

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("cartState", JSON.stringify(state));
  } catch (err) {
    console.warn("Error saving to localStorage", err);
  }
};

// --- store ---
const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadFromLocalStorage(),
  },
});

store.subscribe(() => {
  saveToLocalStorage(store.getState().cart);
});

export default store;
