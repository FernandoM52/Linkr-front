import styled from "styled-components"

export default function MainContentLogin() {
    return (
        <>
            <MainContent>
                <div>
                    <h1>linkr</h1>
                </div>
                <div>
                    <p>
                        save, share and discover the best links on the web
                    </p>
                </div>
            </MainContent>
        </>
    )
}

const MainContent = styled.div`
    width: 100vw;
    background-color: #151515;
    font-family: 'Passion One';
    font-weight: 700;
    padding-top: 170px;
    
    @media (max-width: 667px) {
        width: 375px;
        height: 175px;
        padding-top: 0;
    }

    div {
        font-size: 106px;
        line-height: 117px;
        width: 442px;
        height: 128px;
        margin: auto;
        padding-right: 150px;
        display: flex;
        flex-direction: column;

        @media (max-width: 667px) {
            font-size: 76px;
            line-height: 84px;
            padding-right: 0;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: auto;
            margin-bottom: 20px;
        }
    }

    div:first-of-type {
        margin-bottom: -20px;
    }

    p {
        font-size: 43px;
        line-height: 64px;
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;

        @media (max-width: 667px) {
            font-size: 23px;
            line-height: 34px;
            text-align: center;
            width: 237px;
        }
    }
`

