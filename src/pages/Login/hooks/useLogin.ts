import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserActions } from '../../../hooks';
import { PublicRoutes } from '../../../routes';

const url = process.env.REACT_APP_MULTI_URL as string;

export const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUserData } = useUserActions();
  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'username') setUsername(e.target.value);
    if (e.target.id === 'password') setPassword(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const login = async () => {
      try {
        const response = await axios.post(`${url}/auth/login`, { username, password });
        setUserData(response.data);
        navigate(`/${PublicRoutes.HOME}`);
      } catch (error) {
        console.log(error);
      }
    };
    login();
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
