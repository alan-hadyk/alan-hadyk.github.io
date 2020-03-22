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
      FlexContainer,
      IconWarning,
      SpacingContainer,
      Texts
    } = setup();

    expect(SpacingContainer.children[0]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(IconWarning);
    expect(FlexContainer.children[1]).toEqual(Texts[0]);
    expect(FlexContainer.children[2]).toEqual(Texts[1]);
  });

  describe("Error", () => {
    describe("Props", () => {
      describe("title", () => {
        test("should have Error", () => {
          const { Texts } = setup();

          expect(Texts[0].textContent).toEqual("Error");
        });
      });

      describe("description", () => {
        test("should have Cannot get request", () => {
          const { Texts } = setup();

          expect(Texts[1].textContent).toEqual("Cannot get request");
        });
      });
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

    describe("IconWarning", () => {
      test("should render correct SVG", () => {
        const { IconWarning } = setup();

        expect(IconWarning.textContent).toEqual("Icon-Warning.svg");
      });
    });

    describe("Texts", () => {
      describe("Text[0]", () => {
        test("text should have correct content", () => {
          const { Texts } = setup();

          expect(Texts[0].textContent).toEqual("Error");
        });

        describe("Props", () => {
          describe("font-family", () => {
            test("should have 'Anonymous Pro',monospace", () => {
              const { Texts } = setup();

              expect(Texts[0]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
            });
          });

          describe("fontSize", () => {
            test("should have 24px", () => {
              const { Texts } = setup();

              expect(Texts[0]).toHaveStyleRule("font-size", "24px");
            });
          });

          describe("fontWeight", () => {
            test("should have 700", () => {
              const { Texts } = setup();

              expect(Texts[0]).toHaveStyleRule("font-weight", "700");
            });
          });

          describe("lineHeight", () => {
            test("should have 2.4rem", () => {
              const { Texts } = setup();

              expect(Texts[0]).toHaveStyleRule("line-height", "2.4rem");
            });
          });

          describe("paddingTop", () => {
            test("should have 1.2rem", () => {
              const { Texts } = setup();

              expect(Texts[0]).toHaveStyleRule("padding-top", "1.2rem");
            });
          });

          describe("textTransform", () => {
            test("should have uppercase", () => {
              const { Texts } = setup();

              expect(Texts[0]).toHaveStyleRule("text-transform", "uppercase");
            });
          });
        });
      });

      describe("Text[1]", () => {
        test("text should have correct content", () => {
          const { Texts } = setup();

          expect(Texts[1].textContent).toEqual("Cannot get request");
        });

        describe("Props", () => {
          describe("font-family", () => {
            test("should have 'Anonymous Pro',monospace", () => {
              const { Texts } = setup();

              expect(Texts[1]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
            });
          });

          describe("fontSize", () => {
            test("should have 16px", () => {
              const { Texts } = setup();

              expect(Texts[1]).toHaveStyleRule("font-size", "16px");
            });
          });

          describe("lineHeight", () => {
            test("should have 2.4rem", () => {
              const { Texts } = setup();

              expect(Texts[1]).toHaveStyleRule("line-height", "2.4rem");
            });
          });

          describe("textTransform", () => {
            test("should have uppercase", () => {
              const { Texts } = setup();

              expect(Texts[1]).toHaveStyleRule("text-transform", "uppercase");
            });
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  IconWarning: SVGSVGElement;
  SpacingContainer: Element;
  Texts: Element[];
}

type ErrorTestProps = Partial<ErrorProps>;

function setup(addedProps?: ErrorTestProps): Setup {
  const defaultProps: ErrorProps = {
    description: "Cannot get request",
    title: "Error"
  };

  const props: ErrorProps = { ...defaultProps, ...addedProps };

  const utils: RenderResult = renderWithTheme(
    <Error {...props} />
  );

  const { queryByTestId, queryAllByTestId } = utils || {};

  const SpacingContainer: Element = queryByTestId("Error");
  const FlexContainer: Element = queryByTestId("FlexContainer");
  const IconWarning: SVGSVGElement = document.querySelector("svg");
  const Texts: Element[] = queryAllByTestId("Text");

  return {
    ...utils,
    FlexContainer,
    IconWarning,
    SpacingContainer,
    Texts
  };
}
