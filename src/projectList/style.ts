import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    gap: 40px;
    max-width: 1300px;
    margin: 20px 2px 0 10px;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const Left = styled.div`
    flex: 1;

    .bottonAndTitle {
        display: flex;
        gap: 20px;
    }
    button {
        background: #00ff08;
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        margin-bottom: 20px;
        cursor: pointer;
        font-weight: bold;
    }

    h1 {
        color: #00ff08;
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 20px;
        line-height: 1.6;
        white-space: pre-line;
    }

    .tags {
        margin-bottom: 30px;

        span {
            background: #222;
            padding: 6px 14px;
            margin-right: 10px;
            border-radius: 8px;
            font-size: 14px;
            border: 1px solid #00ff08;
        }
    }

    div {
        display: flex;
        gap: 20px;
    }
`;

export const Preview = styled.div`
    width: 100%;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;

    h2 {
        text-align: center;
        color: #00ff08;
    }

    img {
        width: 90%;
        height: auto;
        border-radius: 12px;
        object-fit: cover;
        border: 2px solid #00ff08;
    }

    p {
        padding-right: 80px;
    }
`;

export const Gallery = styled.div`
    display: flex;
    gap: 15px;
    overflow-x: auto;
    padding-bottom: 10px;

    img {
        height: 110px;
        border-radius: 10px;
        cursor: pointer;
        transition: transform 0.3s;
        border: 1px solid #00ff08;

        &:hover {
            transform: scale(1.1);
        }
    }

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: #00ff08;
        border-radius: 10px;
    }
`;
