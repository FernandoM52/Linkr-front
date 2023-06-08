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

  return { trendings, getTrendings };
}

export function useGetTrendingPosts() {
  const { user } = useContext(AuthContext);
  const [timeline, setTimeline] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const config = { headers: { Authorization: `Bearer ${user.token}` } }

  function getTrendingPosts(hashtag) {
    axios.get(`${process.env.REACT_APP_API_URL}/hashtag/${hashtag}?offset=${offset}`, config)
      .then(res => {
        const newPosts = res.data;
        setTimeline((prevTimeline) => [...prevTimeline, ...newPosts]);
        setOffset((prevOffset) => prevOffset + newPosts.length);
        setHasMore(newPosts.length > 0);
      })
      .catch(err => console.log(err.response))
  }

  return { getTrendingPosts, timeline, hasMore };
}