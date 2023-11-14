import { createSlice } from "@reduxjs/toolkit";
import { sampleContactData } from "../../app/api/sampleData";
import { AppContact } from "../../app/types/contact";

type State = {
  contacts: AppContact[];
  contactsFiltered: AppContact[];
};

const initialState: State = {
  contacts: sampleContactData,
  contactsFiltered: sampleContactData,
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    createContact: (state, action) => {
      state.contacts.push(action.payload);
      state.contactsFiltered.push(action.payload);
    },
    updateContact: (state, action) => {
      state.contacts[
        state.contacts.findIndex((evt) => evt.id === action.payload.id)
      ] = action.payload;

      state.contacts[
        state.contactsFiltered.findIndex((evt) => evt.id === action.payload.id)
      ] = action.payload;
    },
    deleteContact: (state, action) => {
      const contactIndex = state.contacts.findIndex(
        (contact) => contact.id === action.payload
      );
      if (contactIndex !== -1) {
        state.contacts.splice(contactIndex, 1);
        state.contactsFiltered.splice(contactIndex, 1);
      }
    },
    contactsFilter: (state, action) => {
      let tempFilteredState = state.contacts;
      let isFiltering = false;
      //name filter
      if (action.payload?.name) {
        isFiltering = true;
        tempFilteredState = tempFilteredState.filter((ct) =>
          ct.name?.toLowerCase().includes(action.payload?.name.toLowerCase())
        );
      }
      //group filter
      if (action.payload?.group) {
        isFiltering = true;
        tempFilteredState = tempFilteredState.filter((ct) =>
          ct.group.includes(action.payload?.group)
        );
      }

      //group filter
      if (action.payload?.phone) {
        isFiltering = true;
        tempFilteredState = tempFilteredState.filter((ct) =>
          ct.phone?.toLowerCase().includes(action.payload?.phone.toLowerCase())
        );
      }

      //email filter
      if (action.payload?.email) {
        isFiltering = true;
        tempFilteredState = tempFilteredState.filter((ct) =>
          ct.email?.toLowerCase().includes(action.payload?.email.toLowerCase())
        );
      }
      //address filter
      if (action.payload?.address) {
        isFiltering = true;
        tempFilteredState = tempFilteredState.filter((ct) =>
          ct.address
            ?.toLowerCase()
            .includes(action.payload?.address.toLowerCase())
        );
      }

      return {
        ...state,
        contactsFiltered: isFiltering ? tempFilteredState : [...state.contacts],
      };
    },

    clearFilter: (state) => {
      return {
        ...state,
        contactsFiltered: [...state.contacts],
      };
    },
  },
});

export const {
  createContact,
  updateContact,
  deleteContact,
  clearFilter,
  contactsFilter,
} = contactSlice.actions;
