import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//get

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//post

export const addContact = createAsyncThunk(
  'tasks/addContact',
  async (contactsData, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contactsData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//delete
export const deleteContact = createAsyncThunk(
  'tasks/addContact',
  async (contactsId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactsId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
