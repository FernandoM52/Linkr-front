import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi";
import ReactHashtag from "react-hashtag";

export default function PostItem(props) {
    const { link, content } = props;

    return (
          <Posts>
            <LeftSide>
                <img alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXN_tLW6Dr_7vlJi7PS8S5EUEbt47E-Jhvg&usqp=CAU" />
                {/* <HiOutlineHeart color="white" size={25}></HiOutlineHeart> */}
            </LeftSide>
            <MainContent>
                <h3>Let</h3>
                <p>
                    <ReactHashtag>
                        {content}
                    </ReactHashtag>
                </p>
                <p>link</p>
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
width: 611px;
height: 276px;
display: flex;
margin-bottom: 16px;
  

`
const LeftSide = styled.div`
display: flex;
flex-direction: column;
width: 65px;
justify-content: flex-start;
margin: 18px;


    img{ 
        width: 50px;
        height: 50px;
        border-radius: 26.5px;
        object-fit: cover;
    }
    
`

const MainContent = styled.div`

display: flex;
flex-direction: column;
width: 100%;
margin-top:20px;

    h3{
        color: white;
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
    }
    p{
       color: #B7B7B7;
       font-size: 17px;
       line-height: 20px;
       margin-top : 10px;
    }
    a {
        color: white;
    }


`