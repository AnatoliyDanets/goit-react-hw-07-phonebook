import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  // fetchContactRequest,
  // fetchContactSuccess,
  // fetchContactError,
  // addContactRequest,
  // addContactSuccess,
  // addContactError,
  // deleteContactRequest,
  // deleteContactSuccess,
  // deleteContactError,
  filterList,
} from "./contacts-actions";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./contacts-operations";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer("", {
  [filterList]: (_, { payload }) => payload,
});
const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  isLoading,
});

// const isLoading = createReducer(false, {
//   [fetchContactRequest]: () => true,
//   [fetchContactSuccess]: () => false,
//   [fetchContactError]: () => false,
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
//   [deleteContactRequest]: () => true,
//   [deleteContactSuccess]: () => false,
//   [deleteContactError]: () => false,
// });
