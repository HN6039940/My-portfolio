import { css, keyframes } from "@emotion/react";
export const rotateHomeAnimation = keyframes`
0%{
    transform: rotate(0deg) scale(1); 

}
40%{
    transform: rotate(0deg) scale(1.1);
}
70%{
    transform: rotate(360deg) scale(1.1);
}
100%{
    transform: rotate(360deg) scale(1);
}
`;

export const rotateHome = css`
  &:hover {
    animation: ${rotateHomeAnimation} 1s ease-in-out;
    transform-origin: center;
  }
`;
