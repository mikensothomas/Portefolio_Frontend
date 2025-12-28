import styled from "styled-components";

export const ContainerHeader = styled.div`
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    padding-left: 70px;
    padding-right: 70px;
    
    img {
        height: 90px;
        width: 170px;
    }

    button {
        margin-top: 27px;
        height: 50px;
        width: 170px;
        background-color: #00ff08;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        border-radius: 30px;
        transition: .2s;
        border: 0;
    }

    button:hover {
        box-shadow: 0px 0px 8px #00ff08;
        transform: scale(1.05);
    }
`

export const ContainerAndDash = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Dash = styled.div`
    background-color: #5c5c5c;
    height: 1px;
    width: 100vw;
`

export const Menu = styled.div`
    ul {
        padding-top: 50px;
        display: flex;
        gap: 80px;
    }

    li,
    a {
        color: #5c5c5c;
        font-size: 20px;
        text-decoration: none;
        transition: transform 0.3s ease, color 0.3s ease;
        display: inline-block;
        position: relative;
    }

    a:hover {
        color: #37E359;
        transform: scale(1.10);
    }

    a::after {
        content: "";
        height: 2px;
        width: 100%;
        background-color: #37E359;
        position: absolute;
        bottom: -5px;
        left: 0;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.5s ease;
    }

    a.active {
        color: #37E359;
        font-weight: bold;
        transform: scale(1.1);
        transition: 0.3s;
    }

    a.active::after {
        transform: scaleX(1);
    }

    a:hover::after {
        transform: scaleX(1);
    }
`;