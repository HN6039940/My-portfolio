import { css, keyframes } from "@emotion/react";

export const skillContainerHoverAnimation = keyframes`
    0% {
        left: -110%;
        top: 90%;
    }
    50% {
        left: 15%;
        top: -30%;
    }
    100% {
        left: -20%;
        top: -20%;
    }
    `;

export const skillContainer = css`
  &::before {
    content: "";
    position: absolute;
    width: 140%;
    height: 140%;
    background-color: #f23869;
    z-index: 0;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    top: 60%;
    left: -100%;
    transform: rotate(45deg);
  }
  &:hover::before {
    animation: ${skillContainerHoverAnimation} 0.5s ease forwards;
  }
`;
