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

export const NewPost = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;
  gap: 15px;
  border-radius: 16px;
  background-color: #ffffff;
  display: flex;
  @media (max-width: 600px) {
    border-radius: 0;
  }
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

export const NewPostInfos = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;

  font-style: normal;
  font-weight: 300;
  font-size: 20px;

  p {
    color: #707070;
  }
`;

export const PublishButton = styled.button`
  background: ${(props) => (props.disabled ? "#6f96ca" : "#1877F2")};
  position: absolute;
  right: 0;
  bottom: 0;

  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  width: 112px;
  height: 31px;

  border-radius: 5px;
  color: #ffffff;
  border: none;
  font-weight: 700;
  font-size: 14px;
`;

export const NewPostUrl = styled.input`
  height: 30px;
  background: #efefef;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  color: black;
  text-align: left;

  ::placeholder {
    color: #949494;
  }
`;

export const NewPostDescription = styled.textarea`
  resize: none;
  height: 65px;
  background: #efefef;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  color: black;
  text-align: left;

  ::placeholder {
    color: #949494;
  }
`;

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Condicional = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  align-items: center;
  color: white;
`;