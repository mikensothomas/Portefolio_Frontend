import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 70px 0;
  position: relative;

  img {
    width: 110px;
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

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    z-index: 1001;
  }

  .hamburger span {
    width: 35px;
    height: 8px;
    background: #fff;
    transition: 0.3s;
  }

  .logout,
  .messages,
  .register,
  .login {
    list-style: none;
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
        font-size: 15px;
        margin-top: 0;
        cursor: pointer;
    }

    .logout span {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 15px;
        line-height: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;

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

    .hamburger {
      display: flex;
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

  @media (max-width: 768px) {
    ul {
        position: absolute;
        top: 90px;
        left: 0;
        width: 100%;
        background: #111;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 30px 0;
        display: none;
        z-index: 1000;
    }

    &.open ul {
        display: flex;
    }

    li {
        font-size: 18px;
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