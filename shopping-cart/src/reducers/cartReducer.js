import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log('State är: ', state);
      console.log('Action är: ', action);

      //** Här ska du kolla om produkten redan finns i arrayen och ifall den finns ska du inte pusha in i array:en utan istället öka egenskapen "quantity" med 1. Ifall produkten inte finns ska du pusha in produkten i array:en. Kolla i Product.jsx hur objektet för en produkt ser ut, där ser du egenskapen "quantity". */
      state.push(action.payload);
    },
    increaseQuantity(state, action) {
      state.map((cartItem) => {
        if (cartItem.id === action.payload) {
          cartItem.quantity++; // Öka med 1
        }
      });
    },
    decreaseQuantity(state, action) {
      state.map((cartItem) => {
        if (cartItem.id === action.payload) {
          cartItem.quantity--; // Minska med 1
        }
      });
    },
    removeProduct(state, action) {
      const newCart = state.filter((cartItem) => {
        if (cartItem.id !== action.payload) {
          return cartItem; // Returnera alla produkter förutom den produkten vars id vi skickar med
        }
      });

      return newCart;
    },
    //* Här ska du lägga till två reducers "increaseQuantity" och "decreaseQuantity" som ökar eller minska "quantity" med 1. Ifall quantity är 1 och man minska ska produkten tas bort från array:en. Det är dessa två som kopplas till knapparna i CartItem.jsx, se kommentarer där. */
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
