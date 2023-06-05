import { useParams } from "react-router-dom";
import { useGetTrendingPosts, useGetTrendings } from "../../services/trendings";
import Header from "../../components/Header";
import TrendingColumn from "../../components/TrendingColumn/TrendingColum";
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts";
import { Main, Screen, Timeline, TrendingTitle } from "./style";
import { useEffect } from "react";

export default function TrendingPage() {
  const { hashtag } = useParams();
  const { trendings } = useGetTrendings();
  const { timeline, getTrendingPosts } = useGetTrendingPosts();

  useEffect(() => {
    getTrendingPosts(hashtag);
  }, [hashtag]);

  return (
    <>
      <Header />
      <Screen>
        <TrendingTitle>
          <h2 data-test="hashtag-title">{hashtag.replace(`${hashtag}`, `#${hashtag}`)}</h2>
        </TrendingTitle>
        <Main>
          <Timeline>
            {!timeline && <>Carregando...</>}
            {timeline && timeline.length === 0 && <>Não há posts dessa trending</>}
            {timeline && timeline.map((t, i) => <TrendingPosts key={i} posts={t} />)}
          </Timeline>
          <TrendingColumn trendings={trendings} />
        </Main>
      </Screen>
    </>
  );
}

