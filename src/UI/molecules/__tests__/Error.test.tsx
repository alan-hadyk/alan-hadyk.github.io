import React from "react";
import { RenderResult } from "@testing-library/react";

import Error from "<molecules>/Error";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ErrorProps
} from "<molecules>/__typings__/Error.d.ts";

describe("molecules / Error", () => {
  test("should have correct structure", () => {
    const {
      Description,
      ErrorIcon,
      FlexContainer,
      SpacingContainer,
      Title
    } = setup();

    expect(SpacingContainer.children[0]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(ErrorIcon);
    expect(FlexContainer.children[1]).toEqual(Title);
    expect(FlexContainer.children[2]).toEqual(Description);
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("paddingBottom", () => {
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-bottom", ".8rem");
        });
      });

      describe("paddingLeft", () => {
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-left", ".8rem");
        });
      });

      describe("paddingRight", () => {
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-right", ".8rem");
        });
      });

      describe("paddingTop", () => {
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-top", ".8rem");
        });
      });

      describe("height", () => {
        test("should have 100%", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("height", "100%");
        });
      });
    });
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("alignItems", () => {
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "center");
        });
      });

      describe("flexFlow", () => {
        test("should have column nowrap", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("flex-flow", "column nowrap");
        });
      });

      describe("height", () => {
        test("should have 100%", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("justifyContent", () => {
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("justify-content", "center");
        });
      });
    });
  });

  describe("ErrorIcon", () => {
    test("should render correct SVG", () => {
      const { ErrorIcon } = setup();

      expect(ErrorIcon.textContent).toEqual("Icon-Warning.svg");
    });

    describe("Styles", () => {
      describe("animation-duration", () => {
        test("should have 3600ms", () => {
          const { ErrorIcon } = setup();

          expect(ErrorIcon).toHaveStyleRule("animation-duration", "3600ms");
        });
      });

      describe("animation-iteration-count", () => {
        test("should have center", () => {
          const { ErrorIcon } = setup();

          expect(ErrorIcon).toHaveStyleRule("animation-iteration-count", "infinite");
        });
      });
      
      describe("animation-timing-function", () => {
        test("should have center", () => {
          const { ErrorIcon } = setup();

          expect(ErrorIcon).toHaveStyleRule("animation-timing-function", "ease-in-out");
        });
      });
    });
  });

  describe("Title", () => {
    test("text should have correct content", () => {
      const { Title } = setup({
        title: "Warning"
      });

      expect(Title.textContent).toEqual("Warning");
    });

    describe("Props", () => {
      describe("font-family", () => {
        test("should have 'Anonymous Pro',monospace", () => {
          const { Title } = setup();

          expect(Title).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
        });
      });

      describe("fontSize", () => {
        test("should have 24px", () => {
          const { Title } = setup();

          expect(Title).toHaveStyleRule("font-size", "24px");
        });
      });

      describe("fontWeight", () => {
        test("should have 700", () => {
          const { Title } = setup();

          expect(Title).toHaveStyleRule("font-weight", "700");
        });
      });

      describe("lineHeight", () => {
        test("should have 2.4rem", () => {
          const { Title } = setup();

          expect(Title).toHaveStyleRule("line-height", "2.4rem");
        });
      });

      describe("paddingTop", () => {
        test("should have 1.2rem", () => {
          const { Title } = setup();

          expect(Title).toHaveStyleRule("padding-top", "1.2rem");
        });
      });

      describe("textTransform", () => {
        test("should have uppercase", () => {
          const { Title } = setup();

          expect(Title).toHaveStyleRule("text-transform", "uppercase");
        });
      });
    });
  });

  describe("Description", () => {
    test("text should have correct content", () => {
      const { Description } = setup({
        description: "Error content"
      });

      expect(Description.textContent).toEqual("Error content");
    });

    describe("Props", () => {
      describe("font-family", () => {
        test("should have 'Anonymous Pro',monospace", () => {
          const { Description } = setup();

          expect(Description).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
        });
      });

      describe("fontSize", () => {
        test("should have 16px", () => {
          const { Description } = setup();

          expect(Description).toHaveStyleRule("font-size", "16px");
        });
      });

      describe("lineHeight", () => {
        test("should have 2.4rem", () => {
          const { Description } = setup();

          expect(Description).toHaveStyleRule("line-height", "2.4rem");
        });
      });

      describe("textTransform", () => {
        test("should have uppercase", () => {
          const { Description } = setup();

          expect(Description).toHaveStyleRule("text-transform", "uppercase");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Description: Element;
  ErrorIcon: Element;
  FlexContainer: Element;
  SpacingContainer: Element;
  Title: Element;
}

type ErrorTestProps = Partial<ErrorProps>;

function setup(additionalProps?: ErrorTestProps): Setup {
  const defaultProps: ErrorProps = {
    description: "Cannot get request",
    title: "Error"
  };

  const props: ErrorProps = { ...defaultProps, ...additionalProps };

  const utils: RenderResult = renderWithTheme(
    <Error {...props} />
  );

  const { queryByTestId, queryAllByTestId } = utils || {};

  const SpacingContainer: Element = queryByTestId("Error");
  const ErrorIcon: Element = queryByTestId("ErrorIcon");
  const Title: Element = queryAllByTestId("Text")[0];
  const Description: Element = queryAllByTestId("Text")[1];
  const FlexContainer: Element = queryByTestId("FlexContainer");

  return {
    ...utils,
    Description,
    ErrorIcon,
    FlexContainer,
    SpacingContainer,
    Title
  };
}
