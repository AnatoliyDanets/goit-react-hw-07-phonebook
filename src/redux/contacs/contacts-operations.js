import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// import // fetchContactRequest,
// fetchContactSuccess,
// fetchContactError,
// addContactRequest,
// addContactSuccess,
// addContactError,
// deleteContactRequest,
// deleteContactSuccess,
// deleteContactError,
// "./contacts-actions";

axios.defaults.baseURL = "http://localhost:7777";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContact",
  async () => {
    const { data } = await axios.get("/contacts");
    return data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }) => {
    const { data } = await axios.post("/contacts", { name, number });
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(fetchContactRequest());

//   try {
//     const { data } = await axios.get("/contacts");

//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }
// };

// export const addContact =
//   ({ name, number }) =>
//   (dispatch) => {
//     const contact = {
//       name,
//       number,
//     };

//     dispatch(addContactRequest());

//     axios
//       .post("/contacts", contact)
//       .then(({ data }) => dispatch(addContactSuccess(data)))
//       .catch((error) => dispatch(addContactError(error)));
//   };

// export const deleteContact = (contactId) => (dispatch) => {
//   dispatch(deleteContactRequest());

//   axios
//     .delete(`contacts/${contactId}`)
//     .then(() => dispatch(deleteContactSuccess(contactId)))
//     .catch((error) => dispatch(deleteContactError(error)));
// };
