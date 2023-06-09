import { useParams } from "react-router-dom";
import { useGetTrendings } from "../../services/trendings";
import Header from "../../components/Header";
import TrendingColumn from "../../components/TrendingColumn/TrendingColum";
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts";
import { LoadingMessage, Main, Screen, Timeline, TrendingTitle } from "./style";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/auth";
import api from "../../services/api";
import InfiniteScroll from "react-infinite-scroll-component";

export default function TrendingPage() {
  const { hashtag } = useParams();
  const [posts, setPosts] = useState(undefined);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { user } = useContext(AuthContext);
  const { trendings } = useGetTrendings(hashtag);
  const PAGE_SIZE = 10;

  useEffect(() => {
    setPosts([]);
    setPage(1);
    setHasMore(true);
  }, [hashtag]);

  useEffect(() => {
    loadPosts();
  }, [hashtag, page]);

  function loadPosts() {
    const promise = api.getTrendingPostsByHashtag(user.token, hashtag, page);
    promise.then((res) => {
      const newPosts = res.data;
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setHasMore(newPosts.length >= PAGE_SIZE);
    });
    promise.catch((err) => {
      console.log("Error fetching posts:", err.response);
    });
  }

  return (
    <>
      <Header />
      <Screen>
        <TrendingTitle>
          <h2 data-test="hashtag-title">{`#${hashtag}`}</h2>
        </TrendingTitle>
        <Main>
          <Timeline>
            {!posts && <>Carregando...</>}
            {posts && posts.length === 0 && <>Não há posts dessa trending</>}
            {posts && posts.length > 0 &&
              <InfiniteScroll
                className="StyleInfiniteScroll"
                dataLength={posts.length}
                next={() => setPage((prevPage) => prevPage + 1)}
                hasMore={hasMore}
                loader={<LoadingMessage>Carregando...</LoadingMessage>}
                endMessage={<></>}
              >
                {posts && posts.map((t, index) => <TrendingPosts key={index} posts={t} />)}
              </InfiniteScroll>
            }
          </Timeline>
          <TrendingColumn trendings={trendings} />
        </Main>
      </Screen>
    </>
  );
}

