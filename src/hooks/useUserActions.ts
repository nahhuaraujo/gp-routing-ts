import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { userSlice } from '../redux/slices';

export const useUserActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(userSlice.actions, dispatch);
};
