import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import PostsList from "./pages/PostsList";
import Header from "../components/Header";
import TrendingColumn from "../components/TrendingColumn/TrendingColum";
import { AuthContext } from "../providers/auth";
import { useGetTrendings } from "../services/trendings";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState("");
  const [content, setContent] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [yesDelete, setYesDelete] = useState(false);
  const { user } = useContext(AuthContext);
  const { trendings } = useGetTrendings();

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
  <>
  <Header />
    <Container>
      <PostsContainer>
        <ModalContainer modal={modalOpen}>
          <form>
            <p>Are you sure you want to delete this post?</p>
            <div>
              <button onClick={()=> setModalOpen(false)} type="submit">No, go back</button>
              <button onClick={() => setYesDelete(true)} type="submit">Yes, delete it</button>
            </div>
          </form>
        </ModalContainer>
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
        <PostsList modal={modalOpen}
          setModalOpen={setModalOpen}
          yesDelete={yesDelete}
        ></PostsList>
      </PostsContainer>
      
      <TrendingColumn trendings={trendings} />
    </Container>
    </>
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
  position: relative;
`;

const ModalContainer = styled.div`
background-color: black;
width: 597px;
height: 262px;
border-radius: 50px;
z-index: 1;
position: absolute;
top: 6%;
left: 33%;
display: flex;
align-items: center;
padding: 25px;
visibility: ${({ modal }) => modal ? "visible" : "hidden" };

  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

  p {
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    color: #FFFFFF;
    text-align: center;
  }
  button:nth-of-type(1){
    width: 134px;
    height: 37px;
    background-color:white;
    border-radius: 5px;
    border: none;
    font-size:18px;
    color: #1877F2;
    font-weight: 700;
    margin-right: 5px;

  }
  button:nth-of-type(2){
    width: 134px;
    height: 37px;
    background-color:#1877F2;
    border-radius: 5px;
    border: none;
    font-size:18px;
    color: #FFFFFF;
    font-weight: 700;

  }
  }

`
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
