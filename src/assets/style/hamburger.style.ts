import { css, keyframes } from "@emotion/react";

export const closeBar = (moveY: number, rotateDeg: number) => css`
  transform: translateY(${moveY}px) rotate(${rotateDeg}deg);
  transition: transform 0.6s ease-in-out;
`;

export const openBar = css`
  transform: translateY(0) rotate(0deg);
  transition: transform 0.6s ease-in-out;
`;

const desappearBarAnimation = keyframes`

    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }

`;

export const desappearBar = css`
  animation: ${desappearBarAnimation} 0.2s ease-in-out forwards;
`;

export const appearBarAnimation = keyframes`

    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }

`;

export const appearBar = css`
  animation: ${appearBarAnimation} 0.2s ease-in-out forwards;
`;
