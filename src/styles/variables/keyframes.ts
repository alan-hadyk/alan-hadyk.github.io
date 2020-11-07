import { keyframes } from "styled-components";

import colorPalette from "styles/variables/colorPalette";
import spacing from "styles/variables/spacing";

export default {
  blink: keyframes`
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }
    
    100% {
      opacity: 1;
    }
  `,

  drop: keyframes`
    10% {
      opacity: 0.5;
    }

    20% {
      opacity: 1;
      transform: translateY(200%) rotateX(-360deg);
    }

    80% {
      opacity: 1;
      transform: translateY(200%) rotateX(-360deg);
    }

    90% {
      opacity: 0.5;
    }

    100% {
      opacity: 0;
      transform: translateY(400%);
    }
  `,

  glow: keyframes`
    0% {
      filter: drop-shadow(0px 0px 0px ${colorPalette.blue100});
      opacity: 0.99;
    }

    16% {
      filter: drop-shadow(0px 0px ${spacing.spacing4} ${colorPalette.blue100});
    }

    32% {
      filter: drop-shadow(0px 0px 0px ${colorPalette.blue100});
    }

    100% {
      filter: drop-shadow(0px 0px 0px ${colorPalette.blue100});
      opacity: 1;
    }
  `,

  ripple: keyframes`
    from {
      opacity: 1;
      transform: scale(0);
    }

    to {
      opacity: 0;
      transform: scale(10);
    }
  `,

  rotation: keyframes`
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  `
};
