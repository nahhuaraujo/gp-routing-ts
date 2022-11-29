import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../redux/store';

export const useFruits = () => {
  const token = useSelector((store: AppStore) => store.user.token);
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const getFruits = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_MULTI_URL}/fruits` as string, {
          headers: { Authorization: `Bearer ${token}` },
          signal: controller.signal,
        });
        setFruits(response.data);
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    getFruits();
  }, [token]);

  return { fruits };
};
