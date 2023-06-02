import styled from 'styled-components';
import LoginForms from "../components/LoginForms";
import LinkrIntro from "../components/LinkrIntro";


export default function Login() {
    return (
        <LoginDiv>
            <LinkrIntro />
            <LoginForms />
        </LoginDiv>
    )
}

const LoginDiv = styled.div`
    display:flex;
    width:100vw;
    height:100vh;
    min-height:100vh;
    @media (max-width: 600px){
        flex-direction: column;
    }
`;