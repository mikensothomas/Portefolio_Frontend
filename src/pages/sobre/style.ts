import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 70px 0;
    h1 {
    color: #00ff08;
    text-align: center;
    margin-bottom: 70px;
    font-size: 40px;
    font-weight: 900;
  }
`;

export const ImageAndText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 0 70px;

  img {
    width: 100%;
    max-width: 350px;
    height: auto;
    border-radius: 25px;
    background: #00ff08;
    box-shadow: 0 0 40px #ffffff78;
  }

  @media (max-width: 1024px) {
    gap: 50px;
    padding: 0 40px;

    img {
      max-width: 300px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
    padding: 0 20px;

    img {
      max-width: 260px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 220px;
    }
  }
`;

export const TitleAndParagraph = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  h1 {
    color: #00ff08;
    font-size: 40px;

    span {
      color: #fff;
    }
  }

  p {
    color: #fff;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.8;
    text-align: justify;
  }

  div {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    align-items: center;

    h1 {
      font-size: 32px;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 16px;
    }

    div {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 15px;
    }
  }
`;