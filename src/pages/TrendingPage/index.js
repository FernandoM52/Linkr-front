import { useParams } from "react-router-dom";
import { useGetTrendingPosts, useGetTrendings } from "../../services/trendings";
import Header from "../../components/Header";
import TrendingColumn from "../../components/TrendingColumn/TrendingColum";
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts";
import { Main, Screen, Timeline, TrendingTitle } from "./style";
import { useEffect, useState } from "react";
import InfiniteScrollTimeline from "../../components/InfiniteScroll";

export default function TrendingPage() {
  const { hashtag } = useParams();
  const { trendings } = useGetTrendings();
  const { getTrendingPosts, timeline, hasMore } = useGetTrendingPosts();

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
          <InfiniteScrollTimeline loadMore={getTrendingPosts} hasMore={hasMore} loader={<div>Carregando</div>}>
            <Timeline>
              {timeline && timeline.length === 0 && <>Não há posts dessa trending</>}
              {timeline && timeline?.map((t, i) => <TrendingPosts key={i} posts={t} />)}
            </Timeline>
          </InfiniteScrollTimeline>
          <TrendingColumn trendings={trendings} />
        </Main>
      </Screen>
    </>
  );
}

