import { useState, useContext, useEffect } from "react";
import Header from "../../components/Header";
import TrendingColumn from "../../components/TrendingColumn/TrendingColum";
import { AuthContext } from "../../providers/auth";
import { useGetTrendings } from "../../services/trendings";
import api from "../../services/api";
import PostItem from "../../components/PostItem/PostItem";
import {
  Condicional, Container, DisplayBox, NewPost, NewPostDescription, NewPostInfos, NewPostUrl, PageTitle, PostList, PostsContainer, PublishButton
} from "./style";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [postLikes, setPostLikes] = useState({});
  const { user } = useContext(AuthContext);
  const { trendings } = useGetTrendings();

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    loadLikes(user.token);
  }, [user.token, posts]);

  function publishPost(e) {
    e.preventDefault();
    setIsLoading(true);

    const body = { link, content };
    const promise = api.createPost(user.token, body);

    promise.then((res) => {
      setLink("");
      setContent("");
      setIsLoading(false);
      window.location.reload(false);
    })
      .catch((err) => {
        alert("There was an error publishing your link");
        setLink("");
        setContent("");
        setIsLoading(false);
      })
  }

  function loadPosts() {
    const promise = api.getAllPosts(user.token)
    promise.then(res => setPosts(res.data))
    promise.catch(err => alert("An error ocurred while tryng to fetch the posts, please refresh the page"));
  }

  function loadLikes() {
    const promise = api.getLikedPostsByUser(user.token);
    promise
      .then((res) => {
        const likedPosts = Array.isArray(res.data) ? res.data : [];
        const likesData = {};
        likedPosts.forEach((post) => likesData[post.id] = true);
        setPostLikes(likesData);
      })
      .catch((err) => console.log(err.response.data));
  }

  return (
    <>
      <Header />
      <Container>
        <PageTitle>
          <h2>timeline</h2>
        </PageTitle>
        <DisplayBox>
          <PostsContainer>
            <NewPost data-test="publish-box">
              <img src={user.user?.photo} alt="userPhoto" />

              <NewPostInfos onSubmit={publishPost}>
                <p>What are you going to share today?</p>

                <NewPostUrl
                  data-test="link"
                  type="text"
                  placeholder="http://..."
                  required
                  disabled={isLoading}
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />

                <NewPostDescription
                  data-test="description"
                  placeholder="Awesome article about #javascript"
                  disabled={isLoading}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />

                <PublishButton
                  data-test="publish-btn"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Publishing" : "Publish"}
                </PublishButton>
              </NewPostInfos>
            </NewPost>
            <PostList>
              {!posts && <Condicional>There are no posts yet</Condicional>}
              {posts && posts.length === 0 && <Condicional>Loading...</Condicional>}
              {posts && posts?.map((p) => (
                <PostItem
                  key={p.id}
                  link={p.link}
                  content={p.content}
                  image={p.image}
                  description={p.description}
                  title={p.title}
                  id={p.id}
                  user_id={p.user_id}
                  userPhoto={p.photo}
                  userName={p.name}
                  likesCount={p.likes_count}
                  isLiked={postLikes[p.id] || false}
                />
              ))}
            </PostList>
          </PostsContainer>
          <TrendingColumn trendings={trendings} />
        </DisplayBox>
      </Container>
    </>
  );
}