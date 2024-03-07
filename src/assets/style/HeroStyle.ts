import { css, keyframes } from "@emotion/react";

const heroBgImageAnimation = keyframes`
   0%{
        background-position: top;
    }
    25%{
        background-position: right;
    }
    50%{
        background-position: left;
    }75%{
        background-position: bottom;
    
    }100%{
        background-position: top;
    
    }

`;

export const heroBgImage = css`
  animation: ${heroBgImageAnimation} 20s ease-in-out alternate infinite;
`;

const shakeIconAnimation = keyframes`
    0% {
        
        transform: rotate(0deg) scale(1);
    }
    15%,45%,75%{
        transform: rotate(30deg) scale(1.2);
        filter: drop-shadow(0 0 15px #ffffff);
    }
    30%,60%,90% {
        transform: rotate(-20deg) scale(1.1);


    }
    100% {
        transform: rotate(0deg) scale(1);
    }
    `;

export const shakeIcon = css`
  &:hover {
    animation: ${shakeIconAnimation} 1s ease-in-out;
  }
`;

export const palseImage = keyframes`
0%{
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff;
}
20%{
    transform: scale(1.1);
    opacity: 0.8;
    
}
40%{
    transform: scale(1.2);
    opacity: 0.6;
}
60%{
    transform: scale(1.3);
    opacity: 0.4;
}
80%{
    transform: scale(1.4);
    opacity: 0.2;
}
100%{
    transform: scale(1.5);
    opacity: 0;
    box-shadow: none;
}
    
`;

export const pulse = (time: number) => css`
  animation: ${palseImage} 4s linear infinite;
  animation-delay: ${time}s;
`;
