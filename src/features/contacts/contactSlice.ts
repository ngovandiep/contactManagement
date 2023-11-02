import { createSlice } from "@reduxjs/toolkit";
import { sampleContactData } from "../../app/api/sampleData";
import { AppContact } from "../../app/types/contact";

type State = {
  contacts: AppContact[];
  contactsFiltered: AppContact[];
  contactsExcludedGroupFiltered: AppContact[];
  nameFilter: "";
  phoneFilter: "";
  emailFilter: "";
  addressFilter: "";
  groupFilter: "";
  clearFilter: "";
};

const initialState: State = {
  contacts: sampleContactData,
  contactsFiltered: sampleContactData,
  contactsExcludedGroupFiltered : sampleContactData,
  nameFilter: "",
  phoneFilter: "",
  emailFilter: "",
  addressFilter: "",
  groupFilter: "",
  clearFilter: "",
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    createContact: (state, action) => {
      state.contacts.push(action.payload);
      state.contactsFiltered.push(action.payload);
      state.contactsExcludedGroupFiltered.push(action.payload);
    },
    updateContact: (state, action) => {
      state.contacts[
        state.contacts.findIndex((evt) => evt.id === action.payload.id)
      ] = action.payload;

      state.contacts[
        state.contactsFiltered.findIndex((evt) => evt.id === action.payload.id)
      ] = action.payload;

      state.contacts[
        state.contactsExcludedGroupFiltered.findIndex((evt) => evt.id === action.payload.id)
      ] = action.payload;
    },
    deleteContact: (state, action) => {
      const contactIndex = state.contacts.findIndex((contact) => contact.id === action.payload);
      if (contactIndex !== -1) {
        state.contacts.splice(contactIndex, 1);
        state.contactsFiltered.splice(contactIndex, 1);
        state.contactsExcludedGroupFiltered.splice(contactIndex, 1);
      }
    },
    nameFilter: (state, action) => {
      const contactsFiltered = state.contactsFiltered.filter((ct) =>
        ct.name?.toLowerCase().includes(action.payload?.toLowerCase())
      );
      return {
        ...state,
        contactsFiltered:
          action.payload.length > 0 ? contactsFiltered : [...state.contacts],
          contactsExcludedGroupFiltered : action.payload.length > 0 ? contactsFiltered : [...state.contacts]
      };
    },
    phoneFilter: (state, action) => {
      const contactsFiltered = state.contactsFiltered.filter((ct) =>
        ct.phone?.toLowerCase().includes(action.payload?.toLowerCase())
      );
      return {
        ...state,
        contactsFiltered:
          action.payload.length > 0 ? contactsFiltered : [...state.contacts],
          contactsExcludedGroupFiltered : action.payload.length > 0 ? contactsFiltered : [...state.contacts]
      };
    },
    emailFilter: (state, action) => {
      const contactsFiltered = state.contactsFiltered.filter((ct) =>
        ct.email?.toLowerCase().includes(action.payload?.toLowerCase())
      );
      return {
        ...state,
        contactsFiltered:
          action.payload.length > 0 ? contactsFiltered : [...state.contacts],
          contactsExcludedGroupFiltered : action.payload.length > 0 ? contactsFiltered : [...state.contacts]
      };
    },
    addressFilter: (state, action) => {
      const contactsFiltered = state.contactsFiltered.filter((ct) =>
        ct.address?.toLowerCase().includes(action.payload?.toLowerCase())
      );
      return {
        ...state,
        contactsFiltered:
          action.payload.length > 0 ? contactsFiltered : [...state.contacts],
          contactsExcludedGroupFiltered : action.payload.length > 0 ? contactsFiltered : [...state.contacts]
      };
    },
    groupFilter: (state, action) => {
      const contactsFiltered = state.contactsExcludedGroupFiltered.filter((ct) =>
        ct.group.includes(action.payload)
      );
      return {
        ...state,
        contactsFiltered:
          action.payload.length > 0 ? contactsFiltered : [...state.contacts],
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
  nameFilter,
  phoneFilter,
  emailFilter,
  addressFilter,
  groupFilter,
  clearFilter,
} = contactSlice.actions;
