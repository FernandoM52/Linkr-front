import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledTitle, StyledWrapper, TrendingItem, TrendingList, TrendingsContainer } from "./style";

export default function TrendingColumn() {
  const [trendings, setTrendings] = useState(["# javascript", "# react", "# react-native", "# material", "# web-dev", "# mobile", "# css", "# html", "# node", "# sql",]);
  const navigate = useNavigate();

  return (
    <TrendingsContainer>
      <StyledTitle>trendings</StyledTitle>
      <StyledWrapper />
      <TrendingList>
        {trendings.map((hashtag, i) => (
          <TrendingItem
            key={i}
            onClick={() => navigate(`/hashtag/${hashtag.replace("#", "")}`)}
          >
            {hashtag}
          </TrendingItem>
        ))}
      </TrendingList>
    </TrendingsContainer>
  );
}