import api from './api';

interface IShort {
  url: string;
}

const short = async (url: any) => {
  try {
    const response = await api.post('/shorten', {
      long_url: url,
    });
    console.log(response.data);
  } catch (err) {
    alert(err);
  }
};

export default short;
