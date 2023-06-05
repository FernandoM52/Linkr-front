import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

export default function RegisterForms() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    name: "",
    photo: "",
  });

  const navigate = useNavigate();
  const [submited, setSubmited] = React.useState(false);

  if (localStorage.getItem("userSessionInfoLinkr")) {
    navigate("/timeline");
  }

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function failedRegister(error) {
    if (error.response && error.response.status === 409) {
      alert("Email já existente");
    } else {
      alert("Ocorreu um erro no seu registro. Tente novamente!");
    }
    setSubmited(false);
    window.location.reload(); // Recarrega a página
  }

  function doRegister(e) {
    e.preventDefault();

    // Verificar se os campos estão preenchidos
    if (
      !form.email.trim() ||
      !form.password.trim() ||
      !form.name.trim() ||
      !form.photo.trim()
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setSubmited(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/sign-up`, {
        email: form.email,
        password: form.password,
        name: form.name,
        photo: form.photo,
      })
      .then(() => navigate("/"))
      .catch((error) => failedRegister(error));
  }

  return (
    <RightSideDiv>
      <RegisterFormDiv>
        <form onSubmit={doRegister}>
          <input
            data-test="email"
            disabled={false}
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={handleForm}
            value={form.email}
          />
          <input
            data-test="password"
            disabled={false}
            name="password"
            type="password"
            placeholder="Senha"
            onChange={handleForm}
            value={form.password}
          />
          <input
            data-test="name"
            disabled={false}
            name="name"
            type="text"
            placeholder="username"
            onChange={handleForm}
            value={form.name}
          />
          <input
            data-test="picture-url"
            disabled={false}
            name="photo"
            type="url"
            placeholder="picture url"
            onChange={handleForm}
            value={form.photo}
          />
          <button data-test="sign-up-btn" disabled={submited} type="submit">
            {submited ? <Loading /> : "Sign Up"}
          </button>
        </form>
        <StyledLink to="/">
          <p data-test="login-link">Switch back to log in</p>
        </StyledLink>
      </RegisterFormDiv>
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
        height:74vh;
        width:100vw;
    }
`;

const RegisterFormDiv = styled.div`
    margin:auto;
    @media (max-width: 600px){
        margin:20px auto auto auto;
    }
    width:80%;
    form{
        display:flex;
        flex-direction: column;
        margin-top:24px;

        input{
            height:65px;
            width:93%;
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
            margin-bottom: 13px;
            padding: 17px 15px;
            border:none;
            border-radius: 5px;
            background-color:#1877F2;
            color:#FFFFFF;
            font-family: 'Raleway',sans-serif;
            font-size: 20px;
            font-weight: 700;
        }
        @media (max-width: 600px){
            button{
                height:65px;
            }
            input{
                height:65px;
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