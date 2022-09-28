import { createSlice } from '@reduxjs/toolkit';
import { Roles, User } from '../../models';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '../../util/localStorage';

const initialState: User = {
  id: 0,
  name: '',
  email: '',
  role: Roles.USER,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getLocalStorage('user') ? getLocalStorage('user') : initialState,
  reducers: {
    createUser: (state, action) => {
      const newState = {
        ...state,
        ...action.payload,
      };
      setLocalStorage('user', newState);
      return newState;
    },
    updateUser: (state, action) => {
      const newState = {
        ...state,
        ...action.payload,
      };
      setLocalStorage('user', newState);
      return newState;
    },
    resetUser: () => {
      clearLocalStorage('user');
      return initialState;
    },
  },
});
