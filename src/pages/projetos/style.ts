import styled from "styled-components";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;

  h1 {
    text-align: center;
    color: #fff;
    margin-bottom: 40px;

    span {
      color: #00ff08;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
      margin-bottom: 25px;
    }
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  h1 {
    color: #00ff08;
    text-align: center;
    margin-bottom: 70px;
    font-size: 40px;
    font-weight: 900;
  }
`;

export const Projects = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .imgBox {
    width: 100%;
    max-width: 1200px;
    padding: 20px;
  }

  .swiper {
    width: 100%;
    padding-bottom: 40px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .card {
    position: relative;
    width: 350px;
    height: 420px;
    overflow: hidden;
    border-radius: 25px;
    background: #95eb98ff;
    cursor: pointer;
  }

  .card img {
    width: 100%;
    display: block;
    transition: transform 5s ease;
  }

  .card:hover img {
    transform: translateY(-70%);
  }

  .card h2 {
    position: absolute;
    inset: 0;
    border-radius: 25px;
    background: rgba(0,0,0,.65);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    opacity: 0;
    transition: .4s;

    color: white;
    font-size: 30px;
    text-align: center;
    padding: 20px;
  }

  .card:hover h2 {
    opacity: 1;
  }

  .card h2 span:nth-child(1) {
    font-size: 18px;
    margin-top: 10px;
  }

  .card h2 span:nth-child(2) {
    color: #4caf50;
    font-size: 15px;
  }

  .card h2 span:nth-child(3) {
    color: orange;
    font-size: 16px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .card {
      width: 280px;
      height: 340px;
    }

    .card h2 {
      font-size: 22px;
    }

    .card:hover img {
      transform: translateY(-55%);
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 240px;
      height: 300px;
    }

    .card h2 {
      font-size: 18px;
    }

    .card h2 span:nth-child(1) {
      font-size: 15px;
    }

    .card h2 span:nth-child(2),
    .card h2 span:nth-child(3) {
      font-size: 13px;
    }
  }
`;

export const Right = styled(SlArrowRight)`
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);

  font-size: 42px;
  background: #00ff08;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 20;
  box-shadow: 0 0 15px rgba(55,227,89,.3);
  transition: .3s;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    right: 10px;
    font-size: 32px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    padding: 6px;
  }
`;

export const Left = styled(SlArrowLeft)`
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translateY(-50%);

  font-size: 42px;
  background: #00ff08;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 20;
  box-shadow: 0 0 15px rgba(55,227,89,.3);
  transition: .3s;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    left: 10px;
    font-size: 32px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    padding: 6px;
  }
`;