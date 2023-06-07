import styled from "styled-components";
import PostItem from "../components/PostItem";

export default function UserPosts(props) {
  const { posts } = props;

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
