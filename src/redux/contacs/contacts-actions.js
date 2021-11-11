// import { ADD_CONTACT, DELETE_CONTACT, FILTER } from "./contacts-type";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
export const filterList = createAction("contact/filter");
// export const fetchContactRequest = createAction("contacts/fetchContactRequest");
// export const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
// export const fetchContactError = createAction("contacts/fetchContactError");

// export const addContactRequest = createAction("contacts/addContactRequest");
// export const addContactSuccess = createAction("contacts/addContactSuccess");
// export const addContactError = createAction("contacts/addContactError");

// export const deleteContactRequest = createAction(
//   "contacts/deleteContactRequest"
// );
// export const deleteContactSuccess = createAction(
//   "contacts/deleteContactSuccess"
// );
// export const deleteContactError = createAction("contacts/deleteContactError");

// export const addContact = createAction("contact/add", ({ name, number }) => {
//   return {
//     payload: {
//       id: uuidv4(),
//       name,
//       number,
//     },
//   };
// });

// export const deleteContact = (contactId) => ({
//   type: DELETE_CONTACT,
//   payload: contactId,
// });

// export const filterList = (value) => ({
//   type: FILTER,
//   payload: value,
// });
