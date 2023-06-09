import { HiOutlineExternalLink, HiTrash } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import LikeButton from "../LikeButton";
import ReactStringReplace from "react-string-replace";
import { Modal } from "../Modal";
import { useState, useContext } from "react";
import { AuthContext } from "../../providers/auth";
import {
  CancelButton, Description, ImageStyle, InfoContainer, LeftSide, LinkContainer, LinkStyle, MainContent, OKButton, Posts, Title, WrapperButton
} from "./style";
import Loading from "../Loading";
import api from "../../services/api";


export default function PostItem(props) {
  const {
    link,
    content,
    title,
    description,
    image,
    id,
    user_id,
    userPhoto,
    userName,
    likesCount,
    isLiked
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();


  function deleteOnePost() {
    setIsLoading(true);

    const promise = api.deletePost(user.token, id)
      .then((res) => {
        setIsLoading(false);
        window.location.reload(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert("Não foi possível excluir o Post");
      });

    setShowModal(false);
  }

  function renderPostDescription() {
    return ReactStringReplace(content, /#(\w+)/g, (match, i) => (
      <Link to={`/hashtag/${match}`} key={i}>
        <strong>#{match}</strong>
      </Link>
    ));
  }

  return (
    <Posts id={id} data-test="post">
      <LeftSide>
        <img alt="user image" src={userPhoto} />
        <LikeButton postId={id} userId={user_id} likesCount={likesCount} isLiked={isLiked} />
      </LeftSide>
      <MainContent>
        <HiTrash size={22} onClick={() => setShowModal(true)} />
        <Modal showModal={showModal}>
          <p> Are you sure you want to delete this post?</p>
          {!isLoading ? (
            <WrapperButton>
              <CancelButton onClick={() => setShowModal(false)}>
                No, go back
              </CancelButton>
              <OKButton onClick={deleteOnePost}>Yes, delete</OKButton>
            </WrapperButton>
          ) : (
            <WrapperButton>
              <Loading />
            </WrapperButton>
          )}
        </Modal>
        <h3 data-test="username" onClick={() => navigate(`/user/${user_id}`)}>
          {userName}
        </h3>
        <p data-test="description">{renderPostDescription()}</p>
        <LinkContainer data-test="link" onClick={() => window.open(link)}>
          <InfoContainer>
            {title ? <Title>{title}</Title> : ""}
            <Description>{description}</Description>
            {link ?
              <LinkStyle onClick={() => window.open(link)} >
                {link}
              </LinkStyle>
              :
              <></>
            }
          </InfoContainer>
          <ImageStyle>
            {image !== "" ? (
              <img src={image} alt="link" />
            ) : (
              <HiOutlineExternalLink />
            )}
          </ImageStyle>
        </LinkContainer>
      </MainContent>
    </Posts>
  );
}