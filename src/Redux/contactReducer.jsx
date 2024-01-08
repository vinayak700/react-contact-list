import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactList: [],
};

export const fetchContacts = createAsyncThunk(
  "products/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addContact = createAsyncThunk(
  "products/addContact",
  async (payload, thunkAPI) => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(payload),
      }).then((res) => res.json());
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateContact = createAsyncThunk(
  "products/updateContact",
  async (payload, thunkAPI) => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "PUT",
        headers: {
          "content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "products/deleteContact",
  async (payload, thunkAPI) => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/", {
        method: "DELETE",
      });
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const contactSlice = createSlice({
  name: "Contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        // Storing contact data in the array
        state.contactList = [...action.payload];
      })
      .addCase(addContact.fulfilled, (state, action) => {
        // Puhsing contact data in the contact list array
        state.contactList.push(action.payload);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.contactList = state.contactList.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const data = action.payload;
        const newList = state.contactList.filter(
          (contact) => contact.id !== data.id
        );
        state.contactList = newList;
      });
  },
});

export const contactReducer = contactSlice.reducer;
export const contactActions = contactSlice.actions;
export const contactSelector = (state) => state.contactReducer;
