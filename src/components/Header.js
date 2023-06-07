import React, { useContext, useState } from "react";
import styled from "styled-components";
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import { AuthContext } from "../providers/auth";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Header({ setReload }) {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);
    const { user } = useContext(AuthContext);

    function logout() {
        localStorage.removeItem('userSessionInfoLinkr');
        const removeSession = axios.delete(`${process.env.REACT_APP_API_URL}/logout/${user.token}`);
        removeSession.then((answer) => navigate('/'));
        removeSession.catch((error) => alert(error.response.data));
    }

    return (
        <HeaderStyle>
            <h1 onClick={() => navigate("/timeline")}>linkr</h1>
            <SearchBar setReload={setReload} />
            <UserImage>
                {menu ? (
                    <SlArrowUp
                        onClick={() => setMenu(!menu)}
                        color="white"
                        cursor="pointer"
                    />

                ) : (
                    <SlArrowDown
                        onClick={() => setMenu(!menu)}
                        color="white"
                        cursor="pointer"
                    />
                )}
                <LogOut onClick={() => logout()} open={menu} data-test="menu">
                    <p data-test="logout">Logout</p>
                </LogOut>
                <img src={user.user?.photo} onClick={() => setMenu(!menu)} data-test="avatar" alt="User Avatar" />
            </UserImage>
        </HeaderStyle>
    );
}




const HeaderStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 7%;
    background-color: rgb(21, 21, 21);
    top: 0px;
    left: 0px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    z-index: 3;
    h1 {
        padding-left: 2%;
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 49px;
        line-height: 54px;
        color: #FFFFFF;
        cursor:pointer;
        @media (max-width: 415px){
            font-size: 45px;
            line-height: 49px;
        }
    }
`
const UserImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 2%;
    width: 6%;
    @media (max-width: 950px){
        width: 8%
    }
    @media (max-width: 550px){
        width: 10%
    }
    svg{
        font-size: 18px;
    }
    img {
        cursor:pointer;
        width: 54%;
        height: 54%;
        border-radius: 26px;
        @media (max-width: 415px){
            width: 44px;
            height: 44px;
        }
    }
`;

const LogOut = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 47px;
    background-color: #151515;
    border-radius: 0px 0px 0px 20px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    text-align: center;
    position: absolute;
    bottom: -45px;
    color: #FFFFFF;
    right: 0;
    display: ${props => !props.open ? 'none!important' : 'block'};
    cursor: pointer;
    :hover{
        opacity: 0.5;
    }
    @media (max-width: 600px){
        width: 15%;
    }
    p{
        padding-top: 6%;
        @media (max-width: 600px){
            padding-top: 12%;
        }
    }
`
