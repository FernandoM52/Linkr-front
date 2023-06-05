import { HiOutlineHeart } from "react-icons/hi";
import { LeftSide, LikeBox, Post, PostDescription, RightSide, StyledSpan, UrlDescription, UrlImage, UrlInfos, UrlInfosContainer, UrlPost, UrlTitle, UserImage, UserName } from "./style";

export default function TrendingPosts() {
  return (
    <Post>
      <LeftSide>
        <UserImage />
        <LikeBox>
          <HiOutlineHeart />
          <p>13 likes</p>
        </LikeBox>
      </LeftSide>
      <RightSide>
        <UserName>Juvenal Juvêncio</UserName>
        <PostDescription>Muito maneiro esse tutorial de Material UI com React, deem uma olhada! <StyledSpan>#react</StyledSpan> <StyledSpan>#material</StyledSpan></PostDescription>
        <UrlInfosContainer>
          <UrlInfos>
            <UrlTitle>Como aplicar o Material UI em um projeto React</UrlTitle>
            <UrlDescription>Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.</UrlDescription>
            <UrlPost>https://medium.com/@pshrmn/a-simple-react-router</UrlPost>
          </UrlInfos>
          <UrlImage />
        </UrlInfosContainer>
      </RightSide>
    </Post>
  );
}