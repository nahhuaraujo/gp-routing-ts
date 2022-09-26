import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../models';

const initialState: User = {
  id: 0,
  name: '',
  email: '',
};

const setUserInLocalStorage = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user') as string);
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getUserFromLocalStorage() ? getUserFromLocalStorage() : initialState,
  reducers: {
    createUser: (state, action) => {
      const newState = {
        ...state,
        ...action.payload,
      };
      setUserInLocalStorage(newState);
      return newState;
    },
    updateUser: (state, action) => {
      const newState = {
        ...state,
        ...action.payload,
      };
      setUserInLocalStorage(newState);
      return newState;
    },
    resetUser: () => {
      setUserInLocalStorage(initialState);
      return initialState;
    },
  },
});
