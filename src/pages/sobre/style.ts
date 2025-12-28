import styled from "styled-components";

export const ImageAndText = styled.div`
    display: flex;
    color: aliceblue;
    gap: 110px;
    margin: 100px;

    img {
        height: 420px;
        width: auto;
        margin-bottom: 20px;
        background: #00ff08;
        border-radius: 25px;
        box-shadow: 0 0 100px #ffffff78;
    }
`
export const TitleAndParagraph = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
        text-align: justify;
        line-height: 1.5;
        font-size: 17px;
        font-weight: 600;
    }

    h1 {
        color: #00ff08;
        font-size: 40px;

        span {
            color: #fff;
        }
    }

    div {
        display: flex;
        gap: 20px;
    }
`