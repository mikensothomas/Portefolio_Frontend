import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 60px;
    width: 100vw;
`

export const Dash = styled.div`
    p {
        height: 1px;
        width: 100%;
        background-color: #00ff08;
    }
`
export const IconeRedes = styled.div`
    display: flex;
    gap: 65%;

    div {
        display: flex;
        gap: 20px;
    }
`
export const Email = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    pointer-events: auto;
    text-decoration: none;
    color: inherit;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.4;
    }

    a {
        font-size: 20px;
        font-weight: 600;
        font-family: 'Times New Roman', Times, serif;
    }
`
export const OutlineEmail = styled(MdOutlineEmail)`
    font-size: 25px;
    color: #00ff08;
    margin-left: 30px;
`
export const Instagram = styled(FaFacebook)`
    color: #00ff08;
    font-size: 40px;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 20px #ffffff78;
    }

    &:active {
        opacity: 0.5;
    }
`
export const Facebook = styled(FaInstagram)`
    color: #00ff08;
    font-size: 40px;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 20px #ffffff78;
    }

    &:active {
        opacity: 0.5;
    } 
`
export const Youtube = styled(IoLogoYoutube)`
    color: #00ff08;
    font-size: 40px;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 20px #ffffff78;
    }

    &:active {
        opacity: 0.5;
    }
`