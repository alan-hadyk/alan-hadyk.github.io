import { keyframes } from "styled-components";

import colorPalette from "<styles>/variables/colorPalette";
import spacing from "<styles>/variables/spacing";

export default {
  barChartWidth: keyframes`
    0% {
      width: 100%;
    }
    50% {
      width: 20%;
    }
    100% {
      width: 100%;
    }
  `,
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
  borderDanceHorizontal: keyframes`
    from {
      background-position: left top;
    }
    to {
      background-position: left ${spacing.spacing12} top;
    }
  `,
  borderDanceVertical: keyframes`
    from {
      background-position: left top;
    }
    to {
      background-position: left top ${spacing.spacing12};
    }
  `,
  glow: keyframes`
    0% {
      filter: drop-shadow(0px 0px 0px ${colorPalette.blue100});
    }

    16% {
      filter: drop-shadow(0px 0px ${spacing.spacing4} ${colorPalette.blue100});
    }

    32% {
      filter: drop-shadow(0px 0px 0px ${colorPalette.blue100});
    }

    100% {
      filter: drop-shadow(0px 0px 0px ${colorPalette.blue100});
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
  rippleAlternative: keyframes`
    from {
      height: ${spacing.spacing24};
      opacity: 1;
      width: ${spacing.spacing24};
    }
    to {
      height: ${spacing.spacing120};
      opacity: 0;
      width: ${spacing.spacing120};
    }
  `,
  rotate: keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `
}; 