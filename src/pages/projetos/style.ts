// import styled from "styled-components";
// import { SlArrowLeft } from "react-icons/sl";
// import { SlArrowRight } from "react-icons/sl";

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
//   min-width: 100vw;

//   h1 {
//     margin-top: 30px;
//     margin-bottom: 20px;
//     text-align: center;
//     color: #fff;

//     span {
//       color: #00ff08;
//     }
//   }
// `;

// export const ContentWrapper = styled.div`
//   flex: 1;
//   position: relative;
// `;

// export const Projects = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;

//   .imgBox {
//     width: 100%;
//     max-width: 1200px;
//     padding: 20px 0;
//   }

//   .swiper {
//     width: 100%;
//     padding-bottom: 30px;
//   }

//   .swiper-slide {
//     display: flex;
//     justify-content: center;
//   }

//   .card {
//     width: 350px;
//     height: 410px;
//     overflow: hidden;
//     border-radius: 25px 25px 0 0;
//     padding: 10px;
//     background: #95eb98ff;
//     cursor: pointer;
//   }

//   .card img {
//     width: 100%;
//     height: auto;
//     display: block;
//     transform: translateY(0);
//     transition: transform 5.6s ease;
//   }

//   .card h2 {
//     position: absolute;
//     top: 0;
//     left: 2.5%;
//     width: 95%;
//     height: 100%;
//     border-radius: 25px 25px 0 0;
//     background: rgba(0, 0, 0, 0.6);
//     opacity: 0;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 20px;
//     transition: opacity 0.6s ease;

//     color: #fff;
//     font-size: 32px;
//     font-weight: 700;
//     transform: translateY(20px);
//     transition: opacity 0.6s ease, transform 0.6s ease;

//     &:hover {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
//   .card h2 span {
//     font-size: 20px;
//   }

//   .card h2 span:nth-child(2) {
//     color: #4caf50;
//     font-size: 14px;
//   }

//   .card h2 span:nth-child(3) {
//     color: #ff9800;
//     font-weight: bold;
//   }

//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 25px 25px 0 0;
//     cursor: pointer;
//     transition: transform 5.6s ease;
      
//   }

//   .card:hover img {
//       transform: translateY(-80%);
//   }
// `;

// export const Right = styled(SlArrowRight)`
//   background: #00ff08;
//   font-size: 40px;
//   border-radius: 30px;
//   position: absolute;
//   right: 70px;
//   top: 55%;
//   box-shadow: 0 0 0 10px rgba(55, 227, 89, 0.2);
//   cursor: pointer;
//   padding: 10px;
//   z-index: 10;

//   &:hover {
//       opacity: 0.8;
//   }

//   &:active {
//       opacity: 0.5;
//   }
// `;

// export const Left = styled(SlArrowLeft)`
//   background: #00ff08;
//   font-size: 40px;
//   border-radius: 30px;
//   position: absolute;
//   left: 70px;
//   top: 55%;
//   box-shadow: 0 0 0 10px rgba(55, 227, 89, 0.2);
//   cursor: pointer;
//   padding: 10px;
//   z-index: 10;

//   &:hover {
//       opacity: 0.8;
//   }

//   &:active {
//       opacity: 0.5;
//   }
// `;

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