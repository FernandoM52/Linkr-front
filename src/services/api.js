import axios from "axios";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function createPost(token, body) {
  const config = createConfig(token);

  const promise = axios.post(`${process.env.REACT_APP_API_URL}/home`, body, config);
  return promise;
}

function deletePost(token, id) {
  const config = createConfig(token);

  const promise = axios.delete(`${process.env.REACT_APP_API_URL}/home/${id}`, config)
  return promise;
}

function likePost(token, body) {
  const config = createConfig(token);
  const { postId } = body;

  const promise = axios.post(`${process.env.REACT_APP_API_URL}/like/${postId}`, body, config)
  return promise;
}

function getLikedPostsByUser(token) {
  const config = createConfig(token);

  const promise = axios.get(`${process.env.REACT_APP_API_URL}/liked-posts`, config)
  return promise;
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

const api = {
  getTrendingPostsByHashtag, getAllPosts, createPost, deletePost, likePost, getLikedPostsByUser
}

export default api;