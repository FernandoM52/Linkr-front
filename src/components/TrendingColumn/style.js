import styled from "styled-components";

export const TrendingsContainer = styled.div`
  background-color: #171717;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 32%;
  height: 39%;
  color: #ffffff;
  @media (max-width:  950px ){
    display: none;
  }
`;

export const StyledTitle = styled.h3`
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  padding-top: 2%;
  padding-left: 5%;
  padding-bottom: 3%;
`;

export const StyledWrapper = styled.div`
  border: 1px solid #484848;
  width: 100%;
`;

export const TrendingList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: 'Lato', sans-serif;
  padding-top: 6%;
  padding-left: 5%;
  padding-bottom: 7%;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
`;

export const TrendingItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;