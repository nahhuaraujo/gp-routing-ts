import axios from 'axios';

const baseUrl = `https://rickandmortyapi.com/api`;
const characterUrl = `${baseUrl}/character`;

export const getMorty = async () => {
  try {
    const mortyData = await axios.get(`${characterUrl}/2`);
    return mortyData.data;
  } catch (e) {
    console.log(e);
  }
};
