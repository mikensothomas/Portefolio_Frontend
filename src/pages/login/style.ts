import styled from "styled-components";

export const Conatiner = styled.div`
    color: #fff;
    padding: 10px 400px;
    
    h1 {
        text-align: center;
        margin-bottom: 50px;
        font-size: 50px;
        font-weight: 900;

        span {
            color: #00ff08;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;

        input,
        textarea {
            background-color: #242424;
            border: 0;
            outline: 0;
            padding: 20px 15px;
            border-radius: 15px;
            color: #fff;
            font-size: 18px;
        }

        input:focus,
        textarea:focus {
            border-color: var(--color-primary-500);
            box-shadow: 0 0 0 3px rgba(55, 227, 89, 0.2);
        }
    }

    button {
        color: #fff;
        background: #00ff08;
        align-items: center;
        border: none;
        border-radius: 10px;
        height: 60px;
        cursor: pointer;
        font-size: 20px;
        font-weight: 600;
        box-shadow: 0 0 10px #ffffff78;
        margin-top: 25px;

        &:hover {
            opacity: 0.8;
        }

        &:active {
            opacity: 0.5;
        }
    }
`