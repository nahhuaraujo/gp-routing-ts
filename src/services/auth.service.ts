import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_BASE_URL}`;
const characterUrl = `${baseUrl}/character`;

export const getMorty = async () => {
  try {
    const mortyData = await axios.get(`${characterUrl}/2`);
    return mortyData.data;
  } catch (e) {
    console.log(e);
  }
};
