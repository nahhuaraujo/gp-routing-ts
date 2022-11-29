import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserActions } from '../../../hooks';
import { PrivateRoutes } from '../../../routes';

const url = process.env.REACT_APP_MULTI_URL as string;

export const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUserActions();
  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'username') setUsername(e.target.value);
    if (e.target.id === 'password') setPassword(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userLogin = async () => {
      try {
        const response = await axios.post(`${url}/auth/login`, { username, password });
        login(response.data);
        navigate(`/${PrivateRoutes.PRIVATE}`);
      } catch (error) {
        console.log(error);
      }
    };
    userLogin();
    setUsername('');
    setPassword('');
  };

  return {
    username,
    password,
    changeHandler,
    submitHandler,
  };
};
