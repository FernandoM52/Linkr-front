import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import PostsList from "./pages/PostsList";

export default function HomePage() {
  const [trendings, setTrendings] = useState([
    "# javascript",
    "# react",
    "# react-native",
    "# material",
    "# web-dev",
    "# mobile",
    "# css",
    "# html",
    "# node",
    "# sql",
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const userPhoto = localStorage.getItem("photo");

  async function publishPost(event) {
    event.preventDefault();
    setIsLoading(true);

    const url = "http://localhost:5000/home";
    const body = { link, content };
    const config = {
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: `Bearer c0fab7ec-61c5-42b4-adef-3861f303e981`,
      },
    };

    try {
      await axios.post(url, body, config);
      setLink("");
      setContent("");
      setIsLoading(false);
    } catch (err) {
      alert("Houve um erro ao publicar seu link");
      setLink("");
      setContent("");
      setIsLoading(false);
    }
  }

  return (
    //Aqui vai ter um Header

    <Container>
      <PostsContainer>
        <NewPost>
          <img
            src={
              !userPhoto ? "https://i.imgflip.com/22zhdm.jpg?a467976" : userPhoto
            }
            alt="userPhoto"
          />

          <NewPostInfos onSubmit={publishPost}>
            <p>What are you going to share today?</p>

            <NewPostUrl
              type="text"
              placeholder="http://..."
              required
              disabled={isLoading}
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />

            <NewPostDescription
              placeholder="Awesome article about #javascript"
              disabled={isLoading}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <PublishButton type="submit" disabled={isLoading}>
              {isLoading ? "Publishing" : "Publish"}
            </PublishButton>
          </NewPostInfos>
        </NewPost>
        <PostsList></PostsList>
      </PostsContainer>
      <TrendingsContainer>
        <StyledTitle>trending</StyledTitle>
        <StyledWrapper />
        <ul>
          {trendings.map((hashtag, i) => (
            <TrendingItem
              key={i}
              onClick={() => navigate(`/hashtag/${hashtag.replace("#", "")}`)}
            >
              {hashtag}
            </TrendingItem>
          ))}
        </ul>
      </TrendingsContainer>
    </Container>
  );
}

const Container = styled.div`
  * {
    box-sizing: border-box;
    font-family: "Lato";
  }
  height: 100vh;
  background-color: #333333;
  display: flex;
  justify-content: center;
  gap: 25px;
  height: 100%;
`;

const PostsContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 25px;
gap: 25px;
min-height: 1000px;

`
const NewPost = styled.div`
  width: 610px;
  height: 200px;
  margin-top: 43px;
  padding: 20px;
  gap: 15px;

  border-radius: 16px;
  background-color: #ffffff;

  display: flex;

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const NewPostInfos = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;

  font-style: normal;
  font-weight: 300;
  font-size: 20px;

  p {
    color: #707070;
  }
`;

const PublishButton = styled.button`
  background: ${(props) => (props.disabled ? "#6f96ca" : "#1877F2")};
  position: absolute;
  right: 0;
  bottom: 0;

  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  width: 112px;
  height: 31px;

  border-radius: 5px;
  color: #ffffff;
  border: none;
  font-weight: 700;
  font-size: 14px;
`;

const NewPostUrl = styled.input`
  height: 30px;
  background: #efefef;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  color: black;
  text-align: left;

  ::placeholder {
    color: #949494;
  }
`;

const NewPostDescription = styled.textarea`
  resize: none;
  height: 65px;
  background: #efefef;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  color: black;
  text-align: left;

  ::placeholder {
    color: #949494;
  }
`;

const TrendingsContainer = styled.div`
  background-color: #171717;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 301px;
  height: 406px;
  margin-top: 43px;
  color: #ffffff;
  ul {
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 22px 16px;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
  }
`;

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  padding: 12px 16px;
`;

const StyledWrapper = styled.div`
  border: 1px solid #484848;
  width: 100%;
`;

const TrendingItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
