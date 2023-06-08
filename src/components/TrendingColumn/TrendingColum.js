import { useNavigate } from "react-router-dom";
import { StyledTitle, StyledWrapper, TrendingItem, TrendingList, TrendingsContainer } from "./style";

export default function TrendingColumn({ trendings }) {
  const hashtags = trendings?.map((h) => (h.hashtag));
  const navigate = useNavigate();

  return (
    <TrendingsContainer data-test="trending">
      <StyledTitle>trendings</StyledTitle>
      <StyledWrapper />
      {!hashtags && "Carregando..."}
      {hashtags && hashtags.length > 0 && (
        <TrendingList>
          {hashtags?.map((hashtag, i) => (
            <TrendingItem
              data-test="hashtag"
              key={i}
              onClick={() => { navigate(`/hashtag/${hashtag}`) }}
            >
              {`# ${hashtag}`}
            </TrendingItem>
          ))}
        </TrendingList>
      )}
    </TrendingsContainer>
  );
}