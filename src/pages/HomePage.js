import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import PostsList from "./PostsList";
import Header from "../components/Header";
import TrendingColumn from "../components/TrendingColumn/TrendingColum";
import { AuthContext } from "../providers/auth";
import { useGetTrendings } from "../services/trendings";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState("");
  const [content, setContent] = useState("");
  const { user } = useContext(AuthContext);
  const { trendings } = useGetTrendings();

  async function publishPost(event) {
    event.preventDefault();
    setIsLoading(true);

    const body = { link, content };
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.post("http://localhost:5000/home", body, config)
      .then((res) => {
        setLink("");
        setContent("");
        setIsLoading(false);
      })
      .catch(err => {
        alert("Houve um erro ao publicar seu link");
        setLink("");
        setContent("");
        setIsLoading(false);
      });
  }

  return (
    <>
      <Header />
      <Container>
        <PageTitle><h2>timeline</h2></PageTitle>
        <DisplayBox>
          <PostsContainer>
            <NewPost>
              <img
                src={user.user?.photo}
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

          <TrendingColumn trendings={trendings} />
        </DisplayBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  * {
    box-sizing: border-box;
    font-family: "Lato";
  }
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width:  600px ){
    align-items: flex-start;
    gap: 19px;
  }
`;

const PageTitle = styled.div`
  padding-top: 7%;
  width: 65%;
  @media (max-width:  600px ){
      width: 100%;
    }
  h2{
    font-family: 'Oswald', sans-serif;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    @media (max-width:  880px ){
      padding-top: 5%;
    }
    @media (max-width:  415px ){
      font-size: 33px;
      line-height: 49px;
    }
    @media (max-width:  375px ){
      padding-top: 5%;
    }
  }
  @media (max-width:  875px ){
    width: 80%;
  }
  @media (max-width:  600px ){
    padding-top: 10%;
    padding-left: 4%;
  }
  @media (max-width:  415px ){
    padding-top: 15%;
  }
`;

const DisplayBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
  padding-top: 3%;
  @media (max-width:  875px ){
    width: 80%;
  }
  @media (max-width:  600px ){
    padding-top: 0;
    width: 100%;
  }
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 64%;
  gap: 25px;
  min-height: 1000px;
  @media (max-width:  950px ){
    width: 100%;
  }
`;

const NewPost = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;
  gap: 15px;
  border-radius: 16px;
  background-color: #ffffff;
  display: flex;
  @media (max-width:  600px ){
    border-radius: 0;
  }
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