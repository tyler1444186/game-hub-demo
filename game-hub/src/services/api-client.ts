import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a1727626b16e4198927a7be3a6863148',
  },
});
