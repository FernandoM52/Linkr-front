import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import TrendingColumn from "../../components/TrendingColumn/TrendingColum";
import { useGetTrendings } from "../../services/trendings";
import { useParams } from "react-router-dom";
import UserPosts from "../UsersPosts";
import {
  Container,
  PageTitle,
  DisplayBox,
  PostsContainer,
  Condicional,
} from "./style.js";

export default function UserPage() {
  const { trendings } = useGetTrendings();
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${id}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) =>
        alert(
          "An error ocurred while tryng to fetch the posts, please refresh the page"
        )
      );
  }, [id]);

  if (!posts) {
    return <Condicional>There are no posts yet</Condicional>;
  }

  if (posts.length === 0) {
    return <Condicional>Loading...</Condicional>;
  }

  return (
    <>
      <Header />
      <Container>
        <PageTitle>
          <h2>{posts[0].name}'s posts</h2>
        </PageTitle>
        <DisplayBox>
          <PostsContainer>
            <UserPosts posts={posts} />
          </PostsContainer>

          <TrendingColumn trendings={trendings} />
        </DisplayBox>
      </Container>
    </>
  );
}
