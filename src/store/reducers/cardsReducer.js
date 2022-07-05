import { createReducer } from '@reduxjs/toolkit';
import {
  createNewLocation,
  deleteCard,
  loadingCardList,
  setDefault,
} from '../actions/cards';

const initialState = {
  cardsList: [],
};

export const cardsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadingCardList, (state, action) => {
      state.cardsList = [...action.payload];
    })
    .addCase(setDefault, (state, action) => {
      state.cardsList = state.cardsList.map((user) => {
        if ((user.isDefault = true)) {
          user.isDefault = false;
        }
        if (user.id === action.payload) {
          user.isDefault = true;
        }
        return user;
      });
    })
    .addCase(deleteCard, (state, action) => {
      state.cardsList = state.cardsList.filter(
        (card) => card.id !== action.payload
      );
    })
    .addCase(createNewLocation, (state, action) => {
      state.cardsList = [...state.cardsList, action.payload];
    });
});
