import { useParams } from "react-router-dom";
import TrendingColumn from "../../components/TrendingColumn/TrendingColum";
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts";
import { Main, PseudoHeader, Screen, Timeline, TrendingTitle } from "./style";
import Header from "../../components/Header";

export default function TrendingPage() {
  const { hashtag } = useParams();

  return (
    <>
      <Header />
      <Screen>
        <TrendingTitle>
          <h2>{hashtag.replace(`${hashtag}`, `#${hashtag}`)}</h2>
        </TrendingTitle>
        <Main>
          <Timeline>
            <TrendingPosts />
            <TrendingPosts />
            <TrendingPosts />
            <TrendingPosts />
          </Timeline>
          <TrendingColumn />
        </Main>
      </Screen>
    </>
  );
}

