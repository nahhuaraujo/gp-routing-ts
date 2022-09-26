import axios from 'axios';

const baseUrl = `https://rickandmortyapi.com/api`;
const characterUrl = `${baseUrl}/character`;

export const getMorty = () => {
  const getMortyData = async () => {
    const mortyData = await axios.get(`${characterUrl}/2`);
    return mortyData.data;
  };
  try {
    return getMortyData();
  } catch (e) {
    console.log(e);
  }
};
