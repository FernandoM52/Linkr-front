import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
  const [trendings, setTrendings] = useState(
    ["# javascript", "# react", "# react-native", "# material", " # web-dev", "# mobile", "# css", "# html", "# node", "# sql"]
  );
  const navigate = useNavigate();

  return (
    //Aqui vai ter um Header

    <Container>

      <div>
        Timeline
      </div>

      <TrendingsContainer>
        <StyledTitle>
          trending
        </StyledTitle>
        <StyledWrapper />
        <ul>
          {trendings.map((hashtag, i) => (
            <TrendingItem key={i} onClick={() => navigate(`/hashtag/${hashtag.replace("#", "")}`)}
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
  *{
  box-sizing: border-box;
  }
  background-color: #333333;
  display:  flex;
  align-items: center;
  gap: 25px;
`;

const TrendingsContainer = styled.div`
  background-color: #171717;
  display:  flex;
  flex-direction: column;
  border-radius: 16px;
  width: 301px;
  height: 406px;
  margin-top: 43px;
  color: #FFFFFF;
  ul{
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
  &:hover{
    text-decoration: underline;
  }
`;