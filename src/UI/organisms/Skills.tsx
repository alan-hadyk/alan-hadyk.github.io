import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

// import Text from "<atoms>/Text";

// import Hexagon from "<molecules>/Hexagon";
// import IconsWithLabels from "<molecules>/IconsWithLabels";

// import FlexContainer from "<layout>/FlexContainer";
// import FlexItem from "<layout>/FlexItem";

import {
  SkillsProps
} from "<organisms>/__typings__/Skills.d.ts";

const Skills = ({ children }: SkillsProps): JSX.Element => (
  <Skills.Container>
    {children.map((child, index: number) => (
      <Skills.ItemOuterContainer key={index}>
        <Skills.ItemInnerContainer>
          {child}
        </Skills.ItemInnerContainer>
      </Skills.ItemOuterContainer>
    ))}
  </Skills.Container>
);

Skills.Container = styled.div`
  ${({
    theme: {
      colorPalette,
      fontFamilies,
      fontSizes,
      fontWeights,
      spacing
    }
  }): FlattenSimpleInterpolation => css`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    overflow: hidden;

    @media (min-width:901px) {
      padding-bottom: 5.5%;
    }

    @media (max-width: 900px) and (min-width:601px) { /* <- 3-2  hexagons per row */
      padding-bottom: 7.4%;
    }
    
    @media (max-width: 600px) { /* <- 2-1  hexagons per row */
      padding-bottom: 11.2%;
    }
  `}
`;

Skills.ItemOuterContainer = styled.div`
  ${({
    theme: {
      colorPalette,
      fontFamilies,
      fontSizes,
      fontWeights,
      spacing
    }
  }): FlattenSimpleInterpolation => css`
    outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
    position: relative;
    visibility: hidden;

    &::after {
      content: '';
      display: block;
      padding-bottom: 86.602%;  /* =  100 / tan(60) * 1.5 */
    }

    @media (min-width:901px) {
      width: 25%; /* = 100 / 4 */

      &:nth-child(7n+5) { /* first hexagon of even rows */
        margin-left:12.5%;  /* = width of .hex / 2  to indent even rows */
      }
    }

    @media (max-width: 900px) and (min-width:601px) { /* <- 3-2  hexagons per row */
      width: 33.333%; /* = 100 / 3 */

      &:nth-child(5n+4) { /* first hexagon of even rows */
        margin-left:16.666%;  /* = width of .hex / 2  to indent even rows */
      }
    }
    
    @media (max-width: 600px) { /* <- 2-1  hexagons per row */
      width: 50%; /* = 100 / 3 */

      &:nth-child(3n+3) { /* first hexagon of even rows */
        margin-left:25%;  /* = width of .hex / 2  to indent even rows */
      }
    }
  `}
`;

Skills.ItemInnerContainer = styled.div`
  ${({
    theme: {
      colorPalette,
      fontFamilies,
      fontSizes,
      fontWeights,
      spacing
    }
  }): FlattenSimpleInterpolation => css`
    margin: 0 2%;
    outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
    overflow: hidden;
    padding-bottom: 110.851%; /* =  width / sin(60) */
    position: absolute;
    visibility: hidden;
    width: 96%;

    & * {
      outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
      visibility: visible;
    }
  `}
`;
 
export default Skills;