import { FaCloudUploadAlt, FaLaptopCode, FaProjectDiagram, FaServer } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-y: hidden;

    span {
        color: #fff;
    }

    h1 {
        color: #00ff08;
        text-align: center;
        padding-top: 70px;
    }
`
export const ContainerEspacialidade = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;
    padding-left: 40px;
    padding-right: 40px;

    div> h3, p {
        color: #fff;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 300px;
        margin-top: 100px;
        border-radius: 30px;

        h3 {
            font-size: 25px;
            font-weight: 900;
            margin: 15px 15px 0 15px;
        }

        p {
            font-size: 16px;
            font-weight: 700;
            margin: 20px;
            line-height: 1.4;
        }
    }

    div:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px #ffffff78;
    }
`
export const FrontFaLaptopCode = styled(FaLaptopCode)`
    color: #00ff08;
    font-size: 80px;
    margin: 15px;
`
export const BackFaServer = styled(FaServer)`
    color: #00ff08;
    font-size: 80px;
    margin: 15px;
`
export const IntegreFaProjectDiagram = styled(FaProjectDiagram)`
    color: #00ff08;
    font-size: 80px;
    margin: 15px;
`
export const DevFaCloudUploadAlt = styled(FaCloudUploadAlt)`
    color: #00ff08;
    font-size: 80px;
    margin: 15px;
`

