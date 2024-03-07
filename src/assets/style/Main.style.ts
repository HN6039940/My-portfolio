import { css, keyframes } from "@emotion/react";

export const moveBgAnimation = keyframes`
0%{
    background-position: 0% 50%;
}
50%{
    background-position: 100% 50%;
}
100%{
    background-position: 0% 50%;
}
`;

export const moveBg = css`
  animation: ${moveBgAnimation} 30s linear infinite;
  background-size: 400% 400%;
`;
