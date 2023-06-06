import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/auth";
import axios from "axios";

export function useGetTrendings() {
  const [trendings, setTrendings] = useState(undefined);
  const { user } = useContext(AuthContext);

  const config = { header: { Authorization: `Bearer${user.token}` } };

  function getTrendings() {
    axios.get(`${process.env.REACT_APP_API_URL}/trendings`, config)
      .then(res => setTrendings(res.data))
      .catch(err => console.log(err.response))
  }

  useEffect(() => {
    getTrendings();
  }, []);

  return { trendings };
}

export function useGetTrendingPosts() {
  const [timeline, setTimeline] = useState(undefined);
  const { user } = useContext(AuthContext);

  const config = { headers: { Authorization: `Bearer ${user.token}` } }

  function getTrendingPosts(hashtag) {
    axios.get(`${process.env.REACT_APP_API_URL}/hashtag/${hashtag}`, config)
      .then(res => setTimeline(res.data))
      .catch(err => console.log(err.response))
  }

  return { timeline, getTrendingPosts };
}