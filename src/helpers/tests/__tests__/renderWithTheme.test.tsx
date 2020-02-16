import React from "react";
import { RenderResult } from "@testing-library/react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("helpers / tests / renderWithTheme", () => {
  test("should render children", () => {
    const { domElement } = setup({
      children: <div>Custom children</div>
    });

    expect(domElement.textContent).toEqual("Custom children");
  });

  test("should pass down theme to children", () => {
    const MockChildren = styled.div`
      ${({  theme: {
    breakpoints,
    colorPalette,
    fontFamily,
    spacing,
    zIndex
  }}): FlattenSimpleInterpolation => css`
        width: ${breakpoints.breakpoint1920};
        color: ${colorPalette.blue300};
        font-family: ${fontFamily.Exan};
        height: ${spacing.spacing96};
        z-index: ${zIndex.layer5};
      `}
    `;

    const { queryByTestId } = setup({
      children: <MockChildren data-testid="childrenComponent" />
    });

    const childrenComponent = queryByTestId("childrenComponent");

    expect(childrenComponent).toHaveStyleRule("width", "1920px");
    expect(childrenComponent).toHaveStyleRule("color", "#78b0b5");
    expect(childrenComponent).toHaveStyleRule("font-family", "ExanModifiedRegular,monospace");
    expect(childrenComponent).toHaveStyleRule("height", "9.6rem");
    expect(childrenComponent).toHaveStyleRule("z-index", "500");
  });
});

interface Setup extends RenderResult {
  domElement: Node;
}

interface RenderWithThemeProps {
  children?: JSX.Element | JSX.Element[];
}

function setup(addedProps?: RenderWithThemeProps): Setup {
  const props: RenderWithThemeProps = {
    children: <div>PageTemplate</div>,
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(props.children);

  const { container } = utils || {};

  return {
    ...utils,
    domElement: container.children[0]
  };
}
