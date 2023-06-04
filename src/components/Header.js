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
            <div>
                {menu ? (
                    <SlArrowDown
                        onClick={() => setMenu(!menu)}
                        color="white"
                        size={'25'}
                        cursor="pointer"
                    />
                ) : (
                    <SlArrowUp
                        onClick={() => setMenu(!menu)}
                        color="white"
                        size={'25'}
                        cursor="pointer"
                    />
                )}
                <LogOut onClick={() => logout()} open={menu} data-test="menu">
                    <p data-test="logout">Logout</p>
                </LogOut>
                <img src={user.user?.photo} onClick={() => setMenu(!menu)} data-test="avatar" alt="User Avatar" />
            </div>
        </HeaderStyle>
    );
}




const HeaderStyle = styled.div`
    position: fixed;
    width: -webkit-fill-available;
    margin: 0px auto;
    background-color: rgb(21, 21, 21);
    top: 0px;
    left: 0px;
    height: 72px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    z-index: 3;
        h1 {
            font-family: 'Passion One';
            font-style: normal;
            font-weight: 700;
            font-size: 49px;
            color: #FFFFFF;
            cursor:pointer;
        }
        div {
            display: flex;          
            align-items: center;
            gap: 10px;
            
        }
        img {
            cursor:pointer;
            width: 53px;
            height: 53px;
            border-radius: 26.5px
        }
`

const LogOut = styled.div`
    width: 150px;
    height: 47px;
    background-color: #151515;
    border-radius: 0px 0px 0px 20px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    position: absolute;
    bottom: -45px;
    cursor: pointer;
    color: #FFFFFF;
    right: 0;
    padding-left: 40px;
    display: ${props => !props.open ? 'none!important' : 'block'}
`
