import { keyframes } from "styled-components";

export default {
  ripple: keyframes`
    from {
      opacity: 1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(10);
    }
  `
}; 