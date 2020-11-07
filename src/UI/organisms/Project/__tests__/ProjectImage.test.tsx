import React from "react";
import { RenderResult } from "@testing-library/react";

import ProjectImage from "UI/organisms/Project/ProjectImage";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { ProjectImageProps } from "UI/organisms/Project/__typings__/ProjectImage";

interface Detect {
  name: string;
}

jest.mock("detect-browser", () => ({
  detect: (): Detect => ({ name: "chrome" })
}));

describe("organisms / ProjectImage", () => {
  test("should have correct structure", () => {
    const { Hexagon, Icon, IconContainer } = setup();

    expect(Hexagon.children[0]).toEqual(IconContainer);
    expect(IconContainer.children[0]).toEqual(Icon);
  });

  describe("Hexagon", () => {
    describe("Props", () => {
      describe("fill", () => {
        test("should have pattern", () => {
          const { Hexagon } = setup();

          expect(Hexagon.children[0].textContent).toEqual(
            "Hexagon-With-Pattern.svg"
          );
        });
      });
    });
  });

  describe("Icon", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have auto", () => {
          const { HexagonInnerContainer } = setup();

          expect(HexagonInnerContainer.children[0]).toHaveStyleRule(
            "height",
            "auto"
          );
        });
      });

      describe("projectIcon", () => {
        test("should have correct icon passed via iconName prop", () => {
          const { HexagonInnerContainer } = setup({
            projectIcon: "react"
          });

          expect(HexagonInnerContainer.children[0].textContent).toEqual(
            "Icon-React.svg"
          );
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { HexagonInnerContainer } = setup();

          expect(HexagonInnerContainer.children[0]).toHaveStyleRule(
            "width",
            "100%"
          );
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Hexagon: Element;
  HexagonInnerContainer: Element;
  Icon: SVGSVGElement;
  IconContainer: Element;
}

type ProjectImageTestProps = Partial<ProjectImageProps>;

function setup(additionalProps?: ProjectImageTestProps): Setup {
  const props: ProjectImageProps = {
    projectIcon: "react",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<ProjectImage {...props} />);

  const { queryAllByTestId } = utils || {};

  const Hexagon: Element = queryAllByTestId("ProjectImage")[0];
  const HexagonInnerContainer: Element = queryAllByTestId(
    "HexagonInnerContainer"
  )[0];
  const Icon: SVGSVGElement = document.querySelectorAll("svg")[0];
  const IconContainer: Element = queryAllByTestId("IconContainer")[0];

  return {
    ...utils,
    Hexagon,
    HexagonInnerContainer,
    Icon,
    IconContainer
  };
}
