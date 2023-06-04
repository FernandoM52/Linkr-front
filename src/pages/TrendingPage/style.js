import styled from "styled-components";

export const Screen = styled.div`
  *{
    box-sizing: border-box;
  }
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 7%;
  @media (max-width:  600px ){
    align-items: flex-start;
    gap: 19px;
  }
`;

export const PseudoHeader = styled.header`
  background-color: #151515;
  min-width: 100%;
  height: 7%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  @media (max-width:  600px ){
    height: 9%;
  }
  @media (max-width:  415px ){
    height: 10%;
  }
`;

export const TrendingTitle = styled.div`
  width: 65%;
  h2{
    font-family: 'Oswald', sans-serif;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    @media (max-width:  880px ){
      padding-top: 5%;
    }
    @media (max-width:  415px ){
      font-size: 33px;
      line-height: 49px;
    }
    @media (max-width:  375px ){
      padding-top: 5%;
    }
  }
  @media (max-width:  875px ){
    width: 80%;
  }
  @media (max-width:  600px ){
    padding-top: 10%;
    padding-left: 4%;
  }
  @media (max-width:  415px ){
    padding-top: 15%;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  width: 65%;
  padding-top: 4%;
  @media (max-width:  875px ){
    width: 80%;
  }
  @media (max-width:  600px ){
    padding-top: 0;
    width: 100%;
  }
`;

export const Timeline = styled.ul`
  display: flex;
  flex-direction: column;
  width: 64%;
  gap: 16px;
  @media (max-width:  950px ){
    width: 100%;
  }
`;