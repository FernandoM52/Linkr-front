import styled from "styled-components";

export const Container = styled.div`
  * {
    box-sizing: border-box;
    font-family: "Lato";
  }
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
    align-items: flex-start;
    gap: 19px;
  }
`;

export const PageTitle = styled.div`
  padding-top: 7%;
  width: 65%;
  @media (max-width: 600px) {
    width: 100%;
  }
  h2 {
    font-family: "Oswald", sans-serif;
    color: #ffffff;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    @media (max-width: 880px) {
      padding-top: 5%;
    }
    @media (max-width: 415px) {
      font-size: 33px;
      line-height: 49px;
    }
    @media (max-width: 375px) {
      padding-top: 5%;
    }
  }
  @media (max-width: 875px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    padding-top: 10%;
    padding-left: 4%;
  }
  @media (max-width: 415px) {
    padding-top: 15%;
  }
`;

export const DisplayBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
  padding-top: 3%;
  @media (max-width: 875px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    padding-top: 0;
    width: 100%;
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 64%;
  gap: 25px;
  min-height: 1000px;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const Condicional = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  align-items: center;
`;
