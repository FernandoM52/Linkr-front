import axios from "axios";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function getTrendingPostsByHashtag(token, hashtag, page) {
  const config = createConfig(token);

  const promise = axios.get(`${process.env.REACT_APP_API_URL}/hashtag/${hashtag}?page=${page}`, config)
  return promise;
}

const api = { getTrendingPostsByHashtag }

export default api;