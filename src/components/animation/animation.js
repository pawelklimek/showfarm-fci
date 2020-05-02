import styled from "styled-components";

export const HoverAnimationStyle = styled.div`
  animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) ${({showDelay}) => showDelay}s both;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

