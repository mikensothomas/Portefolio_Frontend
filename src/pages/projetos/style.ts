import styled from "styled-components";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

export const Container = styled.div`
  h1 {
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    color: #fff;

    span {
        color: #00ff08;
    }
  }
`;

export const Projects = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .imgBox {
    width: 100%;
    max-width: 1200px;
    padding: 20px 0;
  }

  .swiper {
    width: 100%;
    padding-bottom: 30px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .card {
    width: 350px;
    height: 410px;
    overflow: hidden;
    border-radius: 25px 25px 0 0;
    padding: 10px;
    background: #95eb98ff;
    cursor: pointer;
  }

  .card img {
    width: 100%;
    height: auto;
    display: block;
    transform: translateY(0);
    transition: transform 5.6s ease;
  }

  .card h2 {
    position: absolute;
    top: 0;
    left: 2.5%;
    width: 95%;
    height: 100%;
    border-radius: 25px 25px 0 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.6s ease;

    color: #fff;
    font-size: 32px;
    font-weight: 700;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    &:hover {
      opacity: 1;
      transform: translateY(0);
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 25px 25px 0 0;
    cursor: pointer;
    transition: transform 5.6s ease;
      
  }

  .card:hover img {
      transform: translateY(-80%);
  }
`;

export const Right = styled(SlArrowRight)`
  background: #00ff08;
  font-size: 40px;
  border-radius: 30px;
  position: absolute;
  right: 70px;
  top: 55%;
  box-shadow: 0 0 0 10px rgba(55, 227, 89, 0.2);
  cursor: pointer;
  padding: 10px;
  z-index: 10;

  &:hover {
      opacity: 0.8;
  }

  &:active {
      opacity: 0.5;
  }
`;

export const Left = styled(SlArrowLeft)`
  background: #00ff08;
  font-size: 40px;
  border-radius: 30px;
  position: absolute;
  left: 70px;
  top: 55%;
  box-shadow: 0 0 0 10px rgba(55, 227, 89, 0.2);
  cursor: pointer;
  padding: 10px;
  z-index: 10;

  &:hover {
      opacity: 0.8;
  }

  &:active {
      opacity: 0.5;
  }
`;