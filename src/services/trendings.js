import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/auth";
import axios from "axios";

export function useGetTrendings(hashtag) {
  const [trendings, setTrendings] = useState(undefined);

  function getTrendings() {
    axios.get(`${process.env.REACT_APP_API_URL}/trendings`)
      .then(res => setTrendings(res.data))
      .catch(err => console.log(err.response))
  }

  useEffect(() => {
    getTrendings();
  }, []);

  return { trendings };
}