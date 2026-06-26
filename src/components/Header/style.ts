// import styled from "styled-components";

// export const ContainerHeader = styled.div`
//     padding-top: 40px;
//     display: flex;
//     justify-content: space-between;
//     padding-left: 70px;
//     padding-right: 70px;
    
//     img {
//         height: 90px;
//         width: 170px;
//     }

//     button {
//         margin-top: 27px;
//         height: 50px;
//         width: 170px;
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

//     .logout {
//         list-style: none;
//         margin-top: 50px;
//         font-size: 20px;
//         color: #5c5c5c;
//         font-weight: 500;
//         cursor: pointer;

//         &:hover {
//             color: #ff0000;
//         }

//         &:active {
//             transform: scale(0.95);
//         }

//         a {
//             text-decoration: none;
//             color: inherit;
//         }
//     }

//     .messages,
//     .register,
//     .login {
//         list-style: none;
//         margin-top: 50px;
//         font-size: 20px;
//         color: #5c5c5c;
//         font-weight: 500;
//         cursor: pointer;

//         &:hover {
//             color: #37E359;
//         }

//         &:active {
//             transform: scale(0.95);
//         }

//         a {
//             text-decoration: none;
//             color: inherit;
//         }
//     }

//     .logoutUl {
//         display: flex;
//         gap: 20px;
//     }
// `

// export const ContainerAndDash = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
// `

// export const Dash = styled.div`
//     background-color: #5c5c5c;
//     height: 1px;
//     width: 100vw;
// `

// export const Menu = styled.div`
//     ul {
//         padding-top: 50px;
//         display: flex;
//         gap: 30px;
//     }

//     li,
//     a {
//         color: #5c5c5c;
//         font-size: 20px;
//         text-decoration: none;
//         transition: transform 0.3s ease, color 0.3s ease;
//         display: inline-block;
//         position: relative;
//     }

//     a:hover {
//         color: #37E359;
//         transform: scale(1.10);
//     }

//     a::after {
//         content: "";
//         height: 2px;
//         width: 100%;
//         background-color: #37E359;
//         position: absolute;
//         bottom: -5px;
//         left: 0;
//         transform: scaleX(0);
//         transform-origin: center;
//         transition: transform 0.5s ease;
//     }

//     a.active {
//         color: #37E359;
//         font-weight: bold;
//         transform: scale(1.1);
//         transition: 0.3s;
//     }

//     a.active::after {
//         transform: scaleX(1);
//     }

//     a:hover::after {
//         transform: scaleX(1);
//     }
// `;

import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 70px 0;

  img {
    width: 170px;
    height: auto;
  }

  button {
    margin-top: 20px;
    width: 170px;
    height: 50px;
    border: none;
    border-radius: 30px;
    background: #00ff08;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px #00ff08;
  }

  .logout,
  .messages,
  .register,
  .login {
    list-style: none;
    margin-top: 40px;
    font-size: 20px;
    font-weight: 500;
    color: #5c5c5c;
    cursor: pointer;
    transition: 0.3s;

    a {
      text-decoration: none;
      color: inherit;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .logout:hover {
    color: red;
  }

  .messages:hover,
  .register:hover,
  .login:hover {
    color: #37e359;
  }

  .logoutUl {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  @media (max-width: 992px) {
    padding: 30px 30px 0;

    img {
      width: 140px;
    }

    button {
      width: 150px;
      font-size: 16px;
    }

    .logout,
    .messages,
    .register,
    .login {
      font-size: 18px;
      margin-top: 30px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    img {
      width: 140px;
    }

    button {
      margin-top: 0;
      width: 100%;
      max-width: 220px;
    }

    .logoutUl {
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }

    .logout,
    .messages,
    .register,
    .login {
      margin-top: 0;
      font-size: 17px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 120px;
    }

    button {
      height: 45px;
      font-size: 15px;
    }

    .logout,
    .messages,
    .register,
    .login {
      font-size: 15px;
    }
  }
`;

export const ContainerAndDash = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Dash = styled.div`
  width: 100%;
  height: 1px;
  background: #5c5c5c;
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    padding-top: 50px;
    list-style: none;
  }

  li,
  a {
    color: #5c5c5c;
    font-size: 20px;
    text-decoration: none;
    position: relative;
    transition: 0.3s;
  }

  a:hover {
    color: #37e359;
    transform: scale(1.08);
  }

  a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: #37e359;
    transform: scaleX(0);
    transition: 0.3s;
  }

  a:hover::after,
  a.active::after {
    transform: scaleX(1);
  }

  a.active {
    color: #37e359;
    font-weight: bold;
  }

  @media (max-width: 992px) {
    ul {
      gap: 20px;
    }

    a {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    ul {
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      padding-top: 20px;
    }

    a {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    ul {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    a {
      font-size: 15px;
    }
  }
`;