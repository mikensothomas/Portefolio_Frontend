// import { FaLaptopCode, FaServer } from "react-icons/fa";
// import styled from "styled-components";

// export const Container = styled.div`
//     height: 100vh;
//     width: 100vw;
//     min-height: 100vh;

//     span {
//         color: #fff;
//     }

//     h1 {
//         color: #00ff08;
//         text-align: center;
//         padding-top: 70px;
//     }
// `
// export const ContainerEspacialidade = styled.div`
//     display: flex;
//     justify-content: space-between;
//     gap: 50px;
//     padding: 0 80px 0 80px;

//     div> h3, p {
//         color: #fff;
//     }

//     div {
//         display: flex;
//         flex-direction: column;
//         gap: 30px;
//         height: 300px;
//         margin-top: 100px;
//         border-radius: 30px;

//         h3 {
//             font-size: 25px;
//             font-weight: 900;
//             margin: 15px 15px 0 15px;
//         }

//         p {
//             font-size: 16px;
//             font-weight: 700;
//             margin: 20px;
//             line-height: 1.4;
//         }
//     }

//     div:hover {
//         transform: scale(1.05);
//         box-shadow: 0 0 20px #ffffff78;
//     }
// `
// export const FrontFaLaptopCode = styled(FaLaptopCode)`
//     color: #00ff08;
//     font-size: 80px;
//     margin: 15px;
// `
// export const BackFaServer = styled(FaServer)`
//     color: #00ff08;
//     font-size: 80px;
//     margin: 15px;
// `

import { FaLaptopCode, FaServer } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 70px 0;

  span {
    color: #fff;
  }

  h1 {
    color: #00ff08;
    text-align: center;
    margin-bottom: 70px;
  }

  @media (max-width: 768px) {
    padding: 50px 20px;

    h1 {
      font-size: 32px;
      margin-bottom: 40px;
    }
  }
`;

export const ContainerEspacialidade = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 0 80px;

  div {
    flex: 1;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 25px;
    border-radius: 30px;
    transition: .3s;
    background: rgba(255,255,255,0.02);

    h3 {
      color: #fff;
      font-size: 26px;
      font-weight: 900;
    }

    p {
      color: #fff;
      font-size: 17px;
      font-weight: 500;
      line-height: 1.7;
      text-align: justify;
    }

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 0 20px #ffffff78;
    }
  }

  @media (max-width: 1024px) {
    padding: 0 40px;
    gap: 25px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    gap: 30px;

    div {
      max-width: 100%;
    }

    h3 {
      text-align: center;
    }

    p {
      text-align: center;
    }
  }
`;

export const FrontFaLaptopCode = styled(FaLaptopCode)`
  color: #00ff08;
  font-size: 80px;

  @media (max-width: 768px) {
    font-size: 60px;
    align-self: center;
  }

  @media (max-width: 480px) {
    font-size: 50px;
  }
`;

export const BackFaServer = styled(FaServer)`
  color: #00ff08;
  font-size: 80px;

  @media (max-width: 768px) {
    font-size: 60px;
    align-self: center;
  }

  @media (max-width: 480px) {
    font-size: 50px;
  }
`;