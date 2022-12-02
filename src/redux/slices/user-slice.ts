import { createSlice } from '@reduxjs/toolkit';
import { Roles, IUser } from '../../models';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '../../util/localStorage';

const initialState: IUser = {
  id: '',
  name: '',
  username: '',
  email: '',
  role: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getLocalStorage('user') ? getLocalStorage('user') : initialState,
  reducers: {
    setUserData: (state, action) => {
      const newState = {
        ...state,
        ...action.payload,
      };
      setLocalStorage('user', newState);
      return newState;
    },
    resetUserData: () => {
      clearLocalStorage('user');
      return initialState;
    },
  },
});
