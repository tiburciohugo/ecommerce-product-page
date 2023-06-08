import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartState {
  productQuantity: number;
  cartItems: CartItem[];
}

const initialState: CartState = {
  productQuantity: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        // If item does not exist in the cart, add it
        state.cartItems.push(action.payload);
      }
      // Increase the total product quantity
      state.productQuantity += 1;
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        // If item exists in the cart, remove it
        state.cartItems.splice(itemIndex, 1);
      }
      // Decrease the total product quantity
      state.productQuantity = Math.max(state.productQuantity - 1, 0);
    },
    setCartEmpty: (state) => {
      state.productQuantity = 0;
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, setCartEmpty } = cartSlice.actions;

export default cartSlice.reducer;
