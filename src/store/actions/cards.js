import { createAction } from '@reduxjs/toolkit';

export const loadingCardList = createAction('LoadingCardList');
export const setDefault = createAction('SetDefault');
export const deleteCard = createAction('DeleteCard');

export const createNewLocation = createAction('CreateNewLocation');
