// import styled from "styled-components";

// export const Conainer = styled.div`
//     height: 100vh;
//     width: 100vw;
//     min-height: 100vh;
//     min-width: 100vw;
// `

// export const ContainerInformation = styled.div`
//     display: flex;
//     gap: 200px;
//     margin-top: 110px;
//     padding-left: 70px;
//     padding-right: 70px;
// `

// export const InformationAndButton = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 40px;
//     h1{
//         color: #fff;
//         font-size: 32px;
//         font-weight: 900;
//     }

//     p{
//         font-size: 20px;
//         font-weight: 400;
//         color: #fff;
//         text-align: justify;
//     }

//     span {
//         color: #00ff08;
//     }

//     button {
//         margin-top: 27px;
//         height: 50px;
//         width: 300px;
//         background-color: #00ff08;
//         font-family: 'Poppins', sans-serif;
//         font-size: 18px;
//         font-weight: 600;
//         cursor: pointer;
//         border-radius: 30px;
//         transition: .2s;
//         border: 0;
//     }

//     button:hover {
//         box-shadow: 0px 0px 8px #00ff08;
//         transform: scale(1.05);
//     }
// `

// export const Imagem = styled.div`
//     img {
//         height: 475px;
//         width: 450px;
//         position: relative;
//         animation: flutuar 1s ease-in-out infinite alternate;
//         border-radius: 20px;
//     }

//     @keyframes flutuar {
//         from {
//             transform: translateY(0);
//         }
//         to {
//             transform: translateY(-80px);
//         }
//     }
// `

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