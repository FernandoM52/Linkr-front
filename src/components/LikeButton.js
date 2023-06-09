import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useContext, useEffect, useState } from 'react';
import api from '../services/api';
import { AuthContext } from '../providers/auth';

export default function LikeButton({ postId, likesCount, isLiked }) {
    const [isLikedState, setIsLikedState] = useState(isLiked);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        setIsLikedState(isLiked);
    }, [isLiked, likesCount]);

    function handleLikeClick() {
        const body = { postId }

        const promise = api.likePost(user.token, body)
        promise
            .then(res => setIsLikedState((prevIsLiked) => !prevIsLiked))
            .catch(err => console.log(err.response.data));
    }

    return (
        <Container>
            <Tippy content="Curtir" placement='bottom' data-test="tooltip">
                {isLikedState ? (
                    <AiFillHeart
                        data-test="like-btn"
                        color="#AC0000"
                        onClick={handleLikeClick}
                    />
                ) : (
                    <AiOutlineHeart
                        data-test="like-btn"
                        color="#FFFFFF"
                        onClick={handleLikeClick}
                    />
                )}
            </Tippy>
            <p data-test="counter">{likesCount} likes</p>
        </Container>
    );
}

const Container = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   gap: 5px;
   width: 50px;
   margin-bottom: 10px;

   svg{
    cursor: pointer;
    font-size: 25px;
   }
   p{
    color: #FFFFFF;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
   }
`

const Tooltip = styled(Tippy)`
    background: rgba(255, 255, 255, 0.9);
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    color:red;
    border-radius: 3px;
    
    .tippy-arrow {
        color: rgba(255, 255, 255, 0.9);
    }

`
