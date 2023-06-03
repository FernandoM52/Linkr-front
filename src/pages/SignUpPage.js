import styled from 'styled-components';
import RegisterForms from '../components/RegisterForms';
import LinkrIntro from "../components/LinkrIntro";

export default function Register() {
    return (
        <RegisterDiv>
            <LinkrIntro />
            <RegisterForms />
        </RegisterDiv>
    )
}

const RegisterDiv = styled.div`
    display:flex;
    width:100vw;
    height:100vh;
    min-height:100vh;
    @media (max-width: 600px){
        flex-direction: column;
    }
`;