import axios from 'axios';

export function requestGetUser({ valor }) {
  const API_KEY = 'Oqz6xcqH_uiRhQGDrd-76c0n6ITxvnKfPdTtnBUibT4';
  return axios.request({
    method: 'get',
    url: `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}&per_page=40`,
  });
}
