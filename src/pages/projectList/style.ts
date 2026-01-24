import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at top, #0f0f0f, #050505);
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  color: #ffffff;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
`;

export const Left = styled.div`
  width: 100%;

  .bottonAndTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  button {
    padding: 10px 22px;
    border-radius: 14px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    background: linear-gradient(135deg, #00ff08, #00cc06);
    color: #000;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 255, 8, 0.25);
    }

    &:active {
      transform: scale(0.96);
    }
  }

  h1 {
    font-size: 2.4rem;
    color: #00ff08;
    letter-spacing: 1px;
  }

  p {
    text-align: center;
    line-height: 1.8;
    font-size: 1.05rem;
    opacity: 0.9;
    margin-bottom: 35px;
    white-space: pre-line;
  }

  .tecnologias {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 30px 0;

    span {
      padding: 8px 18px;
      border-radius: 999px;
      background: rgba(0, 255, 8, 0.08);
      border: 1px solid #00ff08;
      color: #00ff08;
      font-size: 14px;
      transition: all 0.3s ease;

      &:hover {
        background: #00ff08;
        color: #000;
      }
    }
  }

  .slides {
    text-align: center;
    color: #00ff08;
    min-width: 100px;
    border-radius: 999px;
    background-color: #000;
    border: 1px solid rgba(0, 255, 8, 0.25);
  }
`;

export const Preview = styled.div`
  background: linear-gradient(180deg, #0f0f0f, #090909);
  border-radius: 24px;
  padding: 30px;
  margin-bottom: 35px;
  border: 1px solid rgba(0, 255, 8, 0.25);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    color: #00ff08;
    margin-bottom: 10px;
    font-size: 1.6rem;
  }

  p {
    text-align: center;
    margin-bottom: 20px;
    opacity: 0.8;
  }

  img {
    width: 80%;
    max-height: 520px;
    object-fit: cover;
    border-radius: 18px;
    border: 2px solid #00ff08;
    animation: fadeIn 0.4s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.98);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Gallery = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 10px;

  img {
    height: 120px;
    min-width: 180px;
    object-fit: cover;
    border-radius: 14px;
    cursor: pointer;
    border: 1px solid #00ff08;
    opacity: 0.7;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      transform: scale(1.08);
      box-shadow: 0 10px 30px rgba(0, 255, 8, 0.25);
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

export const ButtonAndT = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  button {
    background: transparent;
    color: #00ff08;
    border: 2px solid #00ff08;

    &:hover {
      background: #00ff08;
      color: #000;
    }
  }
`;

export const ButtonEdDl = styled.div`
  display: flex;
  gap: 12px;

  .delete {
    background: linear-gradient(135deg, #ff2e2e, #cc0000);
    color: #fff;

    &:hover {
      box-shadow: 0 10px 25px rgba(255, 46, 46, 0.35);
    }
  }
`;