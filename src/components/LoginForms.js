import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../providers/auth";
import Loading from "./Loading";

export default function LoginForms() {
    const [form, setForm] = React.useState({
        email: "",
        password: "",
    });
    const { setUser } = React.useContext(AuthContext);
    const navigate = useNavigate();
    const [submited, setSubmited] = React.useState(false);

    if (localStorage.getItem("userSessionInfoLinkr")) {
        setUser(JSON.parse(localStorage.getItem("userSessionInfoLinkr")));
        navigate("/timeline");
    }

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function failedLogin(error) {
        if (error.response && error.response.status === 401) {
            alert("Email e/ou senha incorretas.");
        } else {
            alert("Ocorreu um erro durante o login. Tente novamente!");
        }
        setSubmited(false);
    }

    function didLogin(response) {
        setUser(response.data);
        navigate("/timeline");
        const userSessionInfoLinkr = JSON.stringify(response.data);
        localStorage.setItem("userSessionInfoLinkr", userSessionInfoLinkr);
    }

    function doLogin(e) {
        e.preventDefault();

        // Verificar se os campos estão preenchidos
        if (!form.email.trim() || !form.password.trim()) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        setSubmited(true);
        axios
            .post(`${process.env.REACT_APP_API_URL}/`, {
                email: form.email,
                password: form.password,
            })
            .then((response) => didLogin(response))
            .catch((error) => failedLogin(error));
    }

    return (
        <RightSideDiv>
            <LoginFormDiv>
                <form onSubmit={doLogin}>
                    <input
                        data-test="email"
                        disabled={false}
                        name="email"
                        type="email"
                        placeholder="e-mail"
                        onChange={handleForm}
                        value={form.email}
                    />
                    <input
                        data-test="password"
                        disabled={false}
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={handleForm}
                        value={form.password}
                    />
                    <button data-test="login-btn" disabled={submited} type="submit">
                        {submited ? <Loading /> : "Log in"}
                    </button>
                </form>
                <StyledLink to="/sign-up">
                    <p data-test="sign-up-link">First time? Create an account!</p>
                </StyledLink>
            </LoginFormDiv>
        </RightSideDiv>
    );
}


const RightSideDiv = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #333333;
    width:40vw;
    height:100vh;
    @media (max-width: 600px){
        width:100vw;
        height:74vh;
    }
`;

const LoginFormDiv = styled.div`
    margin:auto;
    @media (max-width: 600px){
        margin:20px auto auto auto;
    }
    width:80%;
    form{
        display:flex;
        flex-direction: column;
        margin-top:24px;
        margin-bottom:22px;
        input{
            height:65px;
            width:100%;
            border:none;
            border-radius:5px;
            margin-bottom:13px;
            padding:17px 15px 17px 15px;
            color:#000000;
            font-size: 27px;
            font-family: 'Oswald';
            &::placeholder{
                font-family: 'Oswald';
                font-size: 27px;
                font-weight: 700;
                color:#9F9F9F; 
            }
        }
        button{
            cursor:pointer;
            height: 65px;
            width: 100%;
            border:none;
            border-radius: 5px;
            background-color:#1877F2;
            color:#FFFFFF;
            font-family: 'Raleway',sans-serif;
            font-size: 20px;
            font-weight: 700;
        }
        @media (max-width: 600px){
            input{
                height:55px;
            }
            button{
                height:55px;
            }
        }
    }
`;

const StyledLink = styled(Link)`
    color:#ffffff;
    width:100%;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;
    text-align: center;
`;