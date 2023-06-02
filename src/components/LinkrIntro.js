import React from 'react';
import styled from 'styled-components';

export default function LinkrIntro(){
    return(
        <React.Fragment>
            <Intro>
                <ContentDiv>
                    <h1>linkr</h1>
                    <p>save, share and discover</p>
                    <p>the best links on the web</p>
                </ContentDiv>
            </Intro>
        </React.Fragment>
    )
}

const Intro = styled.div`
    display:flex;
    background-color:#151515;
    width:60vw;
    height:100vh;
    @media (max-width: 600px){
        width:100vw;
        height:26vh;
    }
`;
const ContentDiv = styled.div`
    margin:auto;
    h1{
        font-family: 'Passion One',sans-serif;
        font-size: 106px;
        font-weight: 700;
        text-align: left;
        color:#FFFFFF;
    }
    p{
        font-family: 'Oswald',sans-serif;
        font-size: 43px;
        font-weight: 700;
        text-align: left;
        color:#FFFFFF;
    }
    @media (max-width: 600px){
        h1{
            font-size: 76px;
            text-align: center;
        }
        p{
            font-size: 23px;
            text-align: center;
            line-height: 34px;
        }
    }
`;