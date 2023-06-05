import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // opcional
import { AuthContext } from '../providers/auth';

export default function LikeButton({ postId }) {

    return (
        <>
            <Tippy placement='bottom' data-test="tooltip">
                <Likes>
                        <AiOutlineHeart
                            data-test="like-btn"
                            size={'25px'}
                            cursor={'pointer'}
                        />
                    <p data-test="counter">likes</p>
                </Likes>
            </Tippy>
        </>
    );
}


const Likes = styled.div`
   width: inherit;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
    gap: 5px;
   width: 50px;
   margin-bottom: 10px;
    p {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        cursor: pointer;

        }
`

const Tooltip = styled(Tippy)`
    background: rgba(255, 255, 255, 0.9);
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    color:#505050;
    border-radius: 3px;
    
    .tippy-arrow {
        color: rgba(255, 255, 255, 0.9);
    }

`
