import styled from "styled-components";
import { HiOutlineHeart, HiOutlineExternalLink, HiTrash } from "react-icons/hi";
import ReactHashtag from "react-hashtag";
import { Link } from "react-router-dom";


export default function PostItem(props) {
    const { link, content, title, description, image } = props;

    function handleOpenLink() {
        if (link) {
            window.open(link, "_blank");
        }
    }

    return (

        <Posts>
            <LeftSide>
                <img alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXN_tLW6Dr_7vlJi7PS8S5EUEbt47E-Jhvg&usqp=CAU" />
                <div>
                    <HiOutlineHeart color="white" size={25}></HiOutlineHeart>
                    <p>13 likes</p>
                </div>
            </LeftSide>
            <MainContent>
                <HiTrash size={22} />
                <h3>Let</h3>
                <p>
                    <ReactHashtag>
                        {content}
                    </ReactHashtag>
                </p>
                <LinkContainer onClick={() => window.open(link)}>
                    <InfoContainer>
                        {title ? <Title>{title}</Title> : ""}
                        <Description>{description}</Description>
                        <LinkStyle onClick={handleOpenLink}>{link}</LinkStyle>
                    </InfoContainer>
                    <ImageStyle>
                        {
                            image !== "" ? <img src={image} alt="link" /> : <HiOutlineExternalLink />}

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