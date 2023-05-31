import styled from "styled-components"
import { Link } from 'react-router-dom'
import MainContentLogin from "../components/MainContentLogin"
//import { ThreeDots } from 'react-loader-spinner'

export default function SignInPage() {
    return (
        <>
            <Content>
                <MainContentLogin/>
                <MainLogin>
                    <div>
                        <form>
                            <input type="email" placeholder='e-mail' required />
                            <input type="password" placeholder='password' required />
                            <button>Log In</button>
                        </form>
                        <Link to="/sign-up">
                            First time? Create an account!
                        </Link>
                    </div>
                </MainLogin>

            </Content>
        </>
    )
}


const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    color: #FFFFFF;

    @media (max-width: 667px) {
        flex-direction: column;
    }
`

const MainLogin = styled.div`
    width: 60vw;
    background-color: #333333;
    display:flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 667px) {
        width: 375px;
        height: 500px;
        padding-top: 0;
    }

    form {
        display:flex;
        flex-direction: column;
        margin: auto;
        align-items: center;

        input {
            width: 390px;
            height: 55px;
            background: #FFFFFF;
            border-radius: 6px;
            margin-bottom: 10px;
            border: none;
            font-family: 'Oswald';
            font-weight: 700;
            font-size: 27px;
            line-height: 40px;
            color: #9F9F9F;
            padding-left: 15px;

            @media (max-width: 667px) {
                width: 330px;
                height: 55px;
                font-size: 20px;
                line-height: 30px;
            }
        }

        button {
            width: 410px;
            height: 55px;
            background: #1877F2;
            border-radius: 6px;
            border: none;
            font-family: 'Oswald';
            font-weight: 700;
            font-size: 27px;
            line-height: 40px;
            color: #FFFFFF;

            @media (max-width: 667px) {
                width: 320px;
                font-size: 20px;
                line-height: 30px;
            }
        }
    }
    a {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-decoration-line: underline;
        color: #FFFFFF;
        margin-top: 20px;
    }
    div {
        display:flex;
        flex-direction: column;
        margin: auto;
        align-items: center;
    }
`