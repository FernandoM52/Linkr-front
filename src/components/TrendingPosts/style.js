import styled from "styled-components";

export const Post = styled.li`
  background-color: #171717;
  display: flex;
  width: 100%;
  padding-bottom: 4%;
  border-radius: 16px;
  @media (max-width:  600px ){
    border-radius: 0;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2%;
  width: 14%;
  gap: 19px;
`;

export const UserImage = styled.div`
  img{
    width: 50px;
    height: 50px;
    border-radius: 26px;
    @media (max-width: 415px){
      width: 40px;
      height: 40px;
    }
  }
`;

export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-family: 'Lato', sans-serif;
  color: white;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  svg{
    font-size: 25px;
    cursor: pointer;
    @media (max-width: 415px){
      font-size: 20px;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3%;
  width: 83%;
  gap: 7px;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  @media (max-width: 415px){
    padding-left: 3%;
  }
`;

export const UserName = styled.p`
  font-size: 19px;
  line-height: 23px;
  color: #FFFFFF;
`;

export const PostDescription = styled.p`
  width: 95%;
  font-size: 17px;
  line-height: 20px;
  color: #B7B7B7;
  @media (max-width: 415px){
    width: 100%;
  }
  a{
    text-decoration: none;
  }
  strong{
    color: #FFFFFF;
    text-decoration: none;
  }
`;

export const UrlInfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #4D4D4D;
  border-radius: 11px;
  cursor: pointer;
`;

export const UrlInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding-top: 3.7%;
  padding-left: 2.8%;
  padding-bottom: 3.4%;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  @media (max-width: 415px){
    gap: 4px;
  }
`;

export const UrlTitle = styled.p`width: 84%;
  width: 86%;
  font-size: 16px;
  line-height: 19px;
  color: #CECECE;
`;

export const UrlDescription = styled.p`
  width: 89%;
  font-size: 11px;
  line-height: 13px;
  color: #9B9595;
  @media (max-width: 415px){
    width: 80.3%;
  }
`;

export const UrlPost = styled.p`
  width: 85%;
  font-size: 11px;
  line-height: 13px;
  color: #CECECE;
  @media (max-width: 415px){
    width: 98%;
  }
`;

export const UrlImage = styled.div`
  max-width: 25%;
  height: 100%;
  border-radius: 0px 12px 13px 0px;
  @media (max-width: 415px){
    width: 100%;
  }
  img{
    width: 100%;
    height: 100%;
  }
`;