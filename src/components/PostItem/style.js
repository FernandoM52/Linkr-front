import styled from "styled-components";

export const Posts = styled.div`
  background: #171717;
  border-radius: 16px;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  gap: 18px;
  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 19px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    object-fit: cover;
  }
`;

export const MainContent = styled.div`
  display: flex;
  width: 83%;
  height: fit-content;
  flex-direction: column;
  position: relative;

  h3 {
    cursor: pointer;
    display: flex;
    width: fit-content;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
  }

  > p {
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #b7b7b7;
    margin-top: 10px;
    word-wrap: break-word;
    a {
      text-decoration: none;
      font-size: 17px;
    }
    strong {
      color: #ffffff;
      text-decoration: none;
    }
  }

  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    width: 263.19px;
    max-height: 13px;
  }
  > svg {
    position: absolute;
    right: 0;
    top: 0;
    color: white;
    cursor: pointer;
  }
`;
export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Lato";
  gap: 18px;
  button {
    width: 22%;
    height: 150%;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    font-size: 19px;
    line-height: 22px;
    cursor: pointer;
    p{
      width: 56%;
      @media (max-width: 886px){
        width: 40%;
      }
    }
  }
`;

export const CancelButton = styled.button`
  background-color: white;
  color: #1877f2;
`;

export const OKButton = styled.button`
  background-color: #1877f2;
  color: white;
`;

export const LinkContainer = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;
`;
export const InfoContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 24px 20px;
  gap: 10px;

  p {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
export const Title = styled.p`
  color: #b7b7b7;
  font-size: 17px;
  line-height: 20px;
  margin-top: 5px;
`;
export const Description = styled.p`
  width: 303px;
  font-weight: 400;
  height: 38px;
  color: #9b9595;
  word-wrap: break-word;
  font-size: 11px;
  line-height: 13px;
`;

export const LinkStyle = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  width: 263.19px;
  color: #cecece;
`;

export const ImageStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0px 12px 13px 0px;
    object-fit: cover;
  }
  svg {
    width: 100%;
    color: #9b9595;
    font-size: 100px;
  }
`;
