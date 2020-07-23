import { createGlobalStyle } from 'styled-components';
import { device } from 'themes/media';

const GlobalStyle = createGlobalStyle`
  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(75%); }
    100% {
      opacity: 1;
      transform: translate(0); } 
  }

  @keyframes growReveal {
    0% {
      opacity: 0;
      transform: scale(.8);
    }
    10% {
      text-shadow: 0 0 10px ${({ palette }) => palette.white}
    }
    90% {
      opacity: 1;
      transform: scale(1);
      text-shadow: 0 0 20px ${({ palette }) => palette.white};
    }
    100% {
      /* transform: scale(1); */
      color: ${({ palette }) => palette.white};
    }
  }

  @keyframes moveInTop {
    0% {
      opacity: 0;
      transform: translateY(-75%); }
    85% {
      transform: translateY(15%);}
    100% {
      opacity: 1;
      transform: translate(0); } 
  }

  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(150%) skewX(-20deg);
    }
    50% {
      transform: skewX(-20deg);
    }
    90% {
      transform: translateX(-25%) skewX(10deg);
    }
    100% {
      opacity: 1;
      transform: translate(0) skewX(0);
    } 
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-150%) skewX(20deg); }

    50% {
      transform: skewX(20deg);
    }
    90% {
      transform: translateX(25%) skewX(-10deg);
    }
    100% {
      opacity: 1;
      transform: translate(0) skew(0); } 
  }

  @keyframes slideInDown {
    0% {
      opacity: 0;
      transform: translateY(-100%); }
    100% {
      opacity: 1;
      transform: translate(0); } 
  }

  @keyframes slideOutUp {
    100% {
      opacity: 0;
      transform: translate(0); }
    0% {
      opacity: 1;
      transform: translateY(-75%); } 
  }

  * { 
    margin: 0;
    padding: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
    -moz-box-sizing: inherit; 
    -webkit-box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 50%;

    @media ${device.md} {
      font-size: 62.5%; 
    }

    @media ${device.xl} {
      font-size: 75%; 
    }
  }

  body {
    background-image: ${({ palette }) => `linear-gradient(to right bottom, ${palette.primary[0]}, ${palette.complement[0]})`};
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    font-size: 1.8rem;
    font-family: ${({ fonts }) => fonts.sans};

    address, h1, h2, h3, h4, h5, h6 {
      font-family: ${({ fonts }) => fonts.serif}
    }
    
    * {
      display: flex;
      flex-flow: column;
      align-items: center;
      color: ${({ palette }) => palette.font.default};
    }
    
    h1 {
    }

    h2 {
    }

    @media ${device.md} {
      font-size: 1.4rem;
    }
  }
`;

export default GlobalStyle;
