// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";
// import { MdOutlineEmail } from "react-icons/md";
// import styled from "styled-components";

// export const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//     height: 60px;
//     width: 100vw;
// `

// export const Dash = styled.div`
//     p {
//         height: 1px;
//         width: 100%;
//         background-color: #00ff08;
//     }
// `
// export const IconeRedes = styled.div`
//     display: flex;
//     gap: 65%;

//     div {
//         display: flex;
//         gap: 20px;
//     }
// `
// export const Email = styled.a`
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     cursor: pointer;
//     pointer-events: auto;
//     text-decoration: none;
//     color: inherit;

//     &:hover {
//         opacity: 0.8;
//     }

//     &:active {
//         opacity: 0.4;
//     }

//     a {
//         font-size: 20px;
//         font-weight: 600;
//         font-family: 'Times New Roman', Times, serif;
//     }
// `
// export const OutlineEmail = styled(MdOutlineEmail)`
//     font-size: 25px;
//     color: #00ff08;
//     margin-left: 30px;
// `
// export const Instagram = styled(FaFacebook)`
//     color: #00ff08;
//     font-size: 40px;
//     cursor: pointer;

//     &:hover {
//         box-shadow: 0 0 20px #ffffff78;
//     }

//     &:active {
//         opacity: 0.5;
//     }
// `
// export const Facebook = styled(FaInstagram)`
//     color: #00ff08;
//     font-size: 40px;
//     cursor: pointer;

//     &:hover {
//         box-shadow: 0 0 20px #ffffff78;
//     }

//     &:active {
//         opacity: 0.5;
//     } 
// `
// export const Youtube = styled(IoLogoYoutube)`
//     color: #00ff08;
//     font-size: 40px;
//     cursor: pointer;

//     &:hover {
//         box-shadow: 0 0 20px #ffffff78;
//     }

//     &:active {
//         opacity: 0.5;
//     }
// `

import styled, { css } from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

export const Container = styled.footer`
  width: 100%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Dash = styled.div`
  width: 100%;

  p {
    width: 100%;
    height: 2px;
    background-color: #00ff08;
  }
`;

export const IconeRedes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  div {
    display: flex;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;

    div {
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 480px) {
    div {
      gap: 15px;
    }
  }
`;

export const Email = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  span {
    font-size: 20px;
    font-weight: 600;
    font-family: "Times New Roman", Times, serif;
  }

  @media (max-width: 768px) {
    justify-content: center;

    span {
      font-size: 17px;
    }
  }

  @media (max-width: 480px) {
    span {
      font-size: 15px;
      word-break: break-word;
    }
  }
`;

export const OutlineEmail = styled(MdOutlineEmail)`
  color: #00ff08;
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const IconStyle = css`
  color: #00ff08;
  font-size: 40px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.15);
    filter: drop-shadow(0 0 10px #00ff08);
  }

  &:active {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    font-size: 34px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const Facebook = styled(FaFacebook)`
  ${IconStyle}
`;

export const Instagram = styled(FaInstagram)`
  ${IconStyle}
`;

export const Youtube = styled(IoLogoYoutube)`
  ${IconStyle}
`;