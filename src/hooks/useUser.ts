import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserActions } from '.';
import { PublicRoutes } from '../routes';

const url = process.env.REACT_APP_MULTI_URL as string;

interface IUser {
  username: string;
  password: string;
}

interface INewUser {}

export const useUser = () => {
  const { setUserData } = useUserActions();
  const navigate = useNavigate();

  const login = (user: IUser) => {
    if (!user.username || !user.password) return;
    const loginUser = async () => {
      try {
        const response = await axios.post(`${url}/auth/login`, user);
        setUserData(response.data);
        navigate(`/${PublicRoutes.HOME}`);
      } catch (error) {
        console.log((error as AxiosError).response?.data);
        // set and show error to user
      }
    };
    loginUser();
  };

  const register = (newUser: INewUser) => {
    const registerUser = async () => {
      try {
        await axios.post(`${url}/auth/register`, newUser);
        // TODO: redirect to login or login directly?
        // setUserData(response.data);
        navigate(`/${PublicRoutes.LOGIN}`);
      } catch (error) {
        console.log((error as AxiosError).response?.data);
        // set and show error to user
      }
    };
    registerUser();
  };

  return {
    login,
    register,
  };
};
