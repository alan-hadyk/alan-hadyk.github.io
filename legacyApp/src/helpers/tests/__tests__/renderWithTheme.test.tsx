import { RenderResult } from "@testing-library/react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import renderWithTheme from "helpers/tests/renderWithTheme";

describe("helpers / tests / renderWithTheme", () => {
  test("should render children", () => {
    const { domElement } = setup({
      children: <div>Custom children</div>
    });

    expect(domElement.textContent).toEqual("Custom children");
  });

  test("should pass down theme to children", () => {
    const MockChildren = styled.div`
      ${({
    theme: {
      breakpoints,
      colorPalette,
      easing,
      fontFamilies,
      fontSizes,
      fontWeights,
      spacing,
      transitionTimes,
      zIndex
    }
  }): FlattenSimpleInterpolation => css`
        color: ${colorPalette.blue300};
        font-family: ${fontFamilies.Exan};
        font-size: ${fontSizes.font20};
        font-weight: ${fontWeights.bold};
        height: ${spacing.spacing96};
        transition: all ${transitionTimes.fast} ${easing.easeInOut};
        width: ${breakpoints.breakpoint1920};
        z-index: ${zIndex.layer5};
      `};
    `;

    const { queryByTestId } = setup({
      children: <MockChildren data-testid="childrenComponent" />
    });

    const childrenComponent = queryByTestId("childrenComponent");

    expect(childrenComponent).toHaveStyleRule("color", "#78b0b5");
    expect(childrenComponent).toHaveStyleRule(
      "font-family",
      "ExanModifiedRegular,monospace"
    );
    expect(childrenComponent).toHaveStyleRule("font-size", "20px");
    expect(childrenComponent).toHaveStyleRule("font-weight", "700");
    expect(childrenComponent).toHaveStyleRule("height", "9.6rem");
    expect(childrenComponent).toHaveStyleRule(
      "transition",
      "all 150ms ease-in-out"
    );
    expect(childrenComponent).toHaveStyleRule("width", "1920px");
    expect(childrenComponent).toHaveStyleRule("z-index", "500");
  });
});

interface Setup extends RenderResult {
  domElement: Node;
}

interface RenderWithThemeProps {
  children?: JSX.Element | JSX.Element[];
}

function setup(additionalProps?: RenderWithThemeProps): Setup {
  const props: RenderWithThemeProps = {
    children: <div>PageTemplate</div>,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(props.children);

  const { container } = utils || {};

  return {
    ...utils,
    domElement: container.children[0]
  };
}
