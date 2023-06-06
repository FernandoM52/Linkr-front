import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "../components/PostItem";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/home`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) =>
        alert(
          "An error ocurred while tryng to fetch the posts, please refresh the page"
        )
      );
  }, []);

  if (!posts) {
    return <Condicional>There are no posts yet</Condicional>;
  }

  if (posts.length === 0) {
    return <Condicional>Loading...</Condicional>;
  }
  console.log(posts);
  return (
    <Container>
      {posts.map((p) => (
        <PostItem
          key={p.id}
          link={p.link}
          content={p.content}
          image={p.image}
          description={p.description}
          title={p.title}
          userId={p.user_id}
          userPhoto={p.photo}
          userName={p.name}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Condicional = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  align-items: center;
`;
