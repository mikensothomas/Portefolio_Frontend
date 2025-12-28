import styled from "styled-components";

export const Conainer = styled.div`
    height: 100vh;
    width: 100vw;
`

export const ContainerInformation = styled.div`
    display: flex;
    gap: 200px;
    margin-top: 110px;
    padding-left: 70px;
    padding-right: 70px;
`

export const InformationAndButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    h1{
        color: #fff;
        font-size: 32px;
        font-weight: 900;
    }

    p{
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        text-align: justify;
    }

    span {
        color: #00ff08;
    }

    button {
        margin-top: 27px;
        height: 50px;
        width: 300px;
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

export const Imagem = styled.div`
    img {
        height: 475px;
        width: 450px;
        position: relative;
        animation: flutuar 1s ease-in-out infinite alternate;
        border-radius: 20px;
    }

    @keyframes flutuar {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-80px);
        }
    }
`