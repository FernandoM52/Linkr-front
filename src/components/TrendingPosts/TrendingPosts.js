import { HiOutlineHeart, HiOutlineExternalLink } from "react-icons/hi";
import { LeftSide, LikeBox, Post, PostDescription, RightSide, UrlDescription, UrlImage, UrlInfos, UrlInfosContainer, UrlPost, UrlTitle, UserImage, UserName } from "./style";
import { Link } from "react-router-dom";
import ReactStringReplace from "react-string-replace";

export default function TrendingPosts(props) {
  const { content, description, image, likes_count, link, title, name, photo } = props.posts;

  function handleOpenUrl() {
    if (link) {
      window.open(link, "_blank");
    }
  }

  function renderPostDescription() {
    return ReactStringReplace(content, /#(\w+)/g, (match, i) => (
      <Link to={`/hashtag/${match}`} key={i}>
        <strong>#{match}</strong>
      </Link>
    ));
  }

  return (
    <Post data-test="post" >
      <LeftSide>
        <UserImage>
          <img src={photo} alt="Foto do usuário" />
        </UserImage>
        <LikeBox>
          <HiOutlineHeart />
          <p>{likes_count} likes</p>
        </LikeBox>
      </LeftSide>
      <RightSide>
        <UserName>{name}</UserName>
        <PostDescription>
          {renderPostDescription()}
        </PostDescription>
        <UrlInfosContainer onClick={handleOpenUrl}>
          <UrlInfos>
            <UrlTitle>{title ? title : ""}</UrlTitle>
            <UrlDescription>{description ? description : ""}</UrlDescription>
            <UrlPost>{link ? link : ""}</UrlPost>
          </UrlInfos>
          {image ? (
            <UrlImage>
              <img src={image} />
            </UrlImage>
          )
            : (
              <HiOutlineExternalLink size={100} color="gray" />
            )}
        </UrlInfosContainer>
      </RightSide>
    </Post>
  );
}