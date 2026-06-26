import styled from "styled-components";

export const Conainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const ContainerInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  margin-top: 80px;
  padding: 0 70px;

  @media (max-width: 1024px) {
    gap: 50px;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

export const InformationAndButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;

  h1 {
    color: #fff;
    font-size: 42px;
    font-weight: 900;
    line-height: 1.3;
  }

  p {
    color: #fff;
    font-size: 20px;
    line-height: 1.8;
    text-align: justify;
  }

  span {
    color: #00ff08;
  }

  button {
    width: 300px;
    height: 55px;
    border: none;
    border-radius: 30px;
    background: #00ff08;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: .3s;
  }

  button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 12px #00ff08;
  }

  @media (max-width: 768px) {
    align-items: center;

    h1 {
      font-size: 32px;
      text-align: center;
    }

    p {
      font-size: 18px;
      text-align: center;
    }

    button {
      width: 100%;
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 16px;
    }

    button {
      height: 48px;
      font-size: 16px;
    }
  }
`;

export const Imagem = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  img {
    width: 100%;
    max-width: 450px;
    height: auto;
    border-radius: 20px;
    animation: flutuar 2.5s ease-in-out infinite alternate;
  }

  @keyframes flutuar {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-25px);
    }
  }

  @media (max-width: 768px) {
    img {
      max-width: 320px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 260px;
    }
  }
`;