import styled from "styled-components";

export const Containers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Conatiner = styled.div`
  color: #fff;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 40px;

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
      width: 100%;
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


  @media (max-width: 900px) {
    padding: 10px 20px;

    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 600px) {
    padding: 10px 15px;

    h1 {
      font-size: 30px;
      margin-bottom: 30px;
    }

    form input,
    form textarea {
      font-size: 16px;
      padding: 15px 12px;
    }

    button {
      height: 50px;
      font-size: 18px;
    }
  }
`;