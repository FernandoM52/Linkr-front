import axios from "axios";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function createPost(token, body) {
  const config = createConfig(token);

  const promise = axios.post(`${process.env.REACT_APP_API_URL}/home`, body, config);
  return promise
}

function getAllPosts(token) {
  const config = createConfig(token);

  const promise = axios.get(`${process.env.REACT_APP_API_URL}/home`, config);
  return promise;
}


function getTrendingPostsByHashtag(token, hashtag, page) {
  const config = createConfig(token);

  const promise = axios.get(`${process.env.REACT_APP_API_URL}/hashtag/${hashtag}?page=${page}`, config)
  return promise;
}

const api = { getTrendingPostsByHashtag, getAllPosts, createPost }

export default api;