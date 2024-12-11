import axios from 'axios';

const API_KEY = 'ZuWXw6Cq60tJ6A7Xl7DcI5ouyGjLlDlL'; 
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

export const fetchArticles = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        'api-key': API_KEY,
      },
    });
    return response.data.response.docs;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};
