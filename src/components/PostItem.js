import styled from "styled-components";
import { HiOutlineHeart, HiOutlineExternalLink, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";
import ReactStringReplace from "react-string-replace";
import { Modal } from "../components/Modal";
import { useState, useEffect } from "react";
import axios from "axios";


export default function PostItem(props, post) {
    const { link, content, title, description, image, id, user_id } = props;
    const [showModal, setShowModal] = useState(false);


    function handleOpenModal() {
        setShowModal(true);
    }
    
    function handleCloseModal() {
        setShowModal(false);
    }

    function deletePost() {
        axios.delete(`${process.env.REACT_APP_API_URL}/home/${id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.response.data));
        
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

        <Posts id={id}>
            <LeftSide>
                <img alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXN_tLW6Dr_7vlJi7PS8S5EUEbt47E-Jhvg&usqp=CAU" />
                <LikeButton postId={post.id} />
            </LeftSide>
            <MainContent>
                <HiTrash size={22}  onClick={handleOpenModal} />
                 <Modal showModal={showModal}>
                       <p> Are you sure you want
                        to delete this post?</p>
                    <WrapperButton>
                        <CancelButton onClick={handleCloseModal}>No, go back</CancelButton>
                        <OKButton onClick={deletePost} >Yes, delete</OKButton>
                    </WrapperButton>    
                </Modal>
                <h3>Let</h3>
                <p>
                    {renderPostDescription()}
                </p>
                <LinkContainer onClick={() => window.open(link)}>
                    <InfoContainer>
                        {title ? <Title>{title}</Title> : ""}
                        <Description>{description}</Description>
                        <LinkStyle onClick={() => window.open(link)}>{link}</LinkStyle>
                    </InfoContainer>
                    <ImageStyle>
                        
                        { image !== "" ? <img src={image} alt="link" /> : <HiOutlineExternalLink />}

                    </ImageStyle>
                </LinkContainer>
            </MainContent>
        </Posts >

    )

}

const Posts = styled.div`
* {
    box-sizing: border-box;
    font-family: 'Lato';
}
background: #171717;
border-radius: 16px;
width: 100%;
height: fit-content;
display: flex;
padding: 20px;
gap:18px;
@media (max-width:  600px ){
    border-radius: 0;
}
`;

const LeftSide = styled.div`
display: flex;
flex-direction: column;
width: 14%;
justify-content: flex-start;
align-items: center;
gap: 19px;

    img{ 
        width: 50px;
        height: 50px;
        border-radius: 26.5px;
        object-fit: cover;
    }
    div {
        gap: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
            svg{
                cursor: pointer;
            }
    p{
        color: white;
        font-size: 11px;
    }
}
    
`

const MainContent = styled.div`

display: flex;
width: 83%;
height: fit-content;
flex-direction: column;
position: relative;


    h3{
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
        color:#B7B7B7;
        margin-top: 10px;
        word-wrap: break-word;
        a{
            text-decoration: none;
            font-size: 17px;
        }
        strong{
            color: #FFFFFF;
            text-decoration: none;
        }
    }
    
    
    a{
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
   
`
const WrapperButton = styled.div`
display: flex;
justify-content: center;
font-family: 'Lato';
gap: 18px;
    button {

        width: 20%;
        height: 150%;
        border: none;
        border-radius: 5px;
        font-weight: 700;
        font-size: 19px;
        line-height: 22px;

    }

`

const CancelButton = styled.button`
background-color: white;
color: #1877F2;

`
const OKButton = styled.button`
background-color: #1877F2;
color: white;


`

const LinkContainer = styled.div`
width: 100%;
height: fit-content;
border: 1px solid #4D4D4D;
border-radius: 11px;
display: flex;
margin-top: 8px;
justify-content: space-between;
cursor: pointer;
overflow: hidden;
`
const InfoContainer = styled.div`
height: fit-content;
display: flex;
flex-direction: column;
/* align-items: flex-start; */
justify-content: space-between;
margin: 24px 20px;
gap: 10px;

    p{ 
      
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3; 
        line-clamp: 3;
    -webkit-box-orient: vertical;
      
        
    }

`
const Title = styled.p`
        color: #B7B7B7;
       font-size: 17px;
       line-height: 20px;
       margin-top : 5px;

`
const Description = styled.p`
        width: 303px;
        font-weight: 400;
        height: 38px;
        color:#9B9595;
        word-wrap: break-word;
        font-size: 11px;
        line-height: 13px;
        

`

const LinkStyle = styled.p`
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        width: 263.19px;
        color:#CECECE;

`

const ImageStyle = styled.div`
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
            color:#9B9595;
            font-size: 100px;
        }

`