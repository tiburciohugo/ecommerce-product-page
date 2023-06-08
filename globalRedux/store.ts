import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;