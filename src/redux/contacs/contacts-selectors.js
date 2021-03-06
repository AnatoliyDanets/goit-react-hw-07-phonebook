import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;
export const getLoading = (state) => state.contacts.isLoading;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    // const contacts = getContacts(state);
    // const filter = getFilter(state);
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
