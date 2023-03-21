import { RenderResult } from "@testing-library/react";

import Corner from "UI/atoms/Corner";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { CornerProps } from "UI/atoms/__typings__/Corner";

describe("atoms / Corner", () => {
  describe("Styles", () => {
    describe("border-left", () => {
      test("should have thin solid #fff", () => {
        const { CornerContainer } = setup();

        expect(CornerContainer).toHaveStyleRule(
          "border-left",
          "thin solid #fff"
        );
      });
    });

    describe("border-top", () => {
      test("should have thin solid #fff", () => {
        const { CornerContainer } = setup();

        expect(CornerContainer).toHaveStyleRule(
          "border-top",
          "thin solid #fff"
        );
      });
    });

    describe("height", () => {
      test("should have .8rem", () => {
        const { CornerContainer } = setup();

        expect(CornerContainer).toHaveStyleRule("height", ".8rem");
      });
    });

    describe("position", () => {
      test("should have absolute", () => {
        const { CornerContainer } = setup();

        expect(CornerContainer).toHaveStyleRule("position", "absolute");
      });
    });

    describe("opacity", () => {
      test("should have 1 when is active", () => {
        const { CornerContainer } = setup({
          isActive: true
        });

        expect(CornerContainer).toHaveStyleRule("opacity", "1");
      });

      test("should have 0.5 when is not active", () => {
        const { CornerContainer } = setup();

        expect(CornerContainer).toHaveStyleRule("opacity", "0.5");
      });
    });

    describe("transition", () => {
      test("should have all 150ms ease-in-out", () => {
        const { CornerContainer } = setup();

        expect(CornerContainer).toHaveStyleRule(
          "transition",
          "all 150ms ease-in-out"
        );
      });
    });

    describe("width", () => {
      test("should have .8rem", () => {
        const { CornerContainer } = setup();

        expect(CornerContainer).toHaveStyleRule("width", ".8rem");
      });
    });
  });

  describe("Props", () => {
    describe("position", () => {
      describe("topLeft", () => {
        describe("left", () => {
          test("should have 0", () => {
            const { CornerContainer } = setup({
              position: "topLeft"
            });

            expect(CornerContainer).toHaveStyleRule("left", "0");
          });
        });

        describe("top", () => {
          test("should have 0", () => {
            const { CornerContainer } = setup({
              position: "topLeft"
            });

            expect(CornerContainer).toHaveStyleRule("top", "0");
          });
        });

        describe("transform", () => {
          test("should have rotate(0)", () => {
            const { CornerContainer } = setup({
              position: "topLeft"
            });

            expect(CornerContainer).toHaveStyleRule("transform", "rotate(0)");
          });
        });
      });

      describe("topRight", () => {
        describe("left", () => {
          test("should have calc(100% - 8px)", () => {
            const { CornerContainer } = setup({
              position: "topRight"
            });

            expect(CornerContainer).toHaveStyleRule("left", "calc(100% - 8px)");
          });
        });

        describe("top", () => {
          test("should have 0", () => {
            const { CornerContainer } = setup({
              position: "topRight"
            });

            expect(CornerContainer).toHaveStyleRule("top", "0");
          });
        });

        describe("transform", () => {
          test("should have rotate(90deg)", () => {
            const { CornerContainer } = setup({
              position: "topRight"
            });

            expect(CornerContainer).toHaveStyleRule(
              "transform",
              "rotate(90deg)"
            );
          });
        });
      });

      describe("bottomLeft", () => {
        describe("left", () => {
          test("should have 0", () => {
            const { CornerContainer } = setup({
              position: "bottomLeft"
            });

            expect(CornerContainer).toHaveStyleRule("left", "0");
          });
        });

        describe("top", () => {
          test("should have calc(100% - 8px)", () => {
            const { CornerContainer } = setup({
              position: "bottomLeft"
            });

            expect(CornerContainer).toHaveStyleRule("top", "calc(100% - 8px)");
          });
        });

        describe("transform", () => {
          test("should have rotate(270deg)", () => {
            const { CornerContainer } = setup({
              position: "bottomLeft"
            });

            expect(CornerContainer).toHaveStyleRule(
              "transform",
              "rotate(270deg)"
            );
          });
        });
      });

      describe("bottomRight", () => {
        describe("left", () => {
          test("should have calc(100% - 8px)", () => {
            const { CornerContainer } = setup({
              position: "bottomRight"
            });

            expect(CornerContainer).toHaveStyleRule("left", "calc(100% - 8px)");
          });
        });

        describe("top", () => {
          test("should have calc(100% - 8px)", () => {
            const { CornerContainer } = setup({
              position: "bottomRight"
            });

            expect(CornerContainer).toHaveStyleRule("top", "calc(100% - 8px)");
          });
        });

        describe("transform", () => {
          test("should have rotate(180deg)", () => {
            const { CornerContainer } = setup({
              position: "bottomRight"
            });

            expect(CornerContainer).toHaveStyleRule(
              "transform",
              "rotate(180deg)"
            );
          });
        });
      });
    });

    describe("isActive", () => {
      describe("position topLeft when isActive is true", () => {
        describe("left", () => {
          test("should have -8px", () => {
            const { CornerContainer } = setup({
              isActive: true,
              position: "topLeft"
            });

            expect(CornerContainer).toHaveStyleRule("left", "-8px");
          });
        });

        describe("top", () => {
          test("should have -8px", () => {
            const { CornerContainer } = setup({
              isActive: true,
              position: "topLeft"
            });

            expect(CornerContainer).toHaveStyleRule("top", "-8px");
          });
        });

        describe("transform", () => {
          test("should have top rotate(0)", () => {
            const { CornerContainer } = setup({
              isActive: true,
              position: "topLeft"
            });

            expect(CornerContainer).toHaveStyleRule("transform", "rotate(0)");
          });
        });
      });

      describe("position topRight when isActive is true", () => {
        describe("left", () => {
          test("should have 100%", () => {
            const { CornerContainer } = setup({
              isActive: true,
              position: "topRight"
            });

            expect(CornerContainer).toHaveStyleRule("left", "100%");
          });
        });

        describe("top", () => {
          test("should have -8px", () => {
            const { CornerContainer } = setup({
              isActive: true,
              position: "topRight"
            });

            expect(CornerContainer).toHaveStyleRule("top", "-8px");
          });
        });

        describe("transform", () => {
          test("should have top rotate(90deg)", () => {
            const { CornerContainer } = setup({
              isActive: true,
              position: "topRight"
            });

            expect(CornerContainer).toHaveStyleRule(
              "transform",
              "rotate(90deg)"
            );
          });
        });
      });

      describe("position bottomLeft when isActive is true", () => {
        describe("left", () => {
          test("should have -8px", () => {
            const { CornerContainer } = setup({
              isActive: true,
              position: "bottomLeft"
            });

            expect(CornerContainer).toHaveStyleRule("left", "-8px");
          });
        });

        describe("top", () => {
          test("should have 100%", () => {
            const { CornerContainer } = setup({
              isActive: true,
              position: "bottomLeft"
            });

            expect(CornerContainer).toHaveStyleRule("top", "100%");
          });
        });

        describe("transform", () => {
          test("should have top rotate(270deg)", () => {
            const { CornerContainer } = setup({
              isActive: true,
              position: "bottomLeft"
            });

            expect(CornerContainer).toHaveStyleRule(
              "transform",
              "rotate(270deg)"
            );
          });
        });
      });

      describe("position bottomRight when isActive is true", () => {
        describe("left", () => {
          test("should have 100%", () => {
            const { CornerContainer } = setup({
              isActive: true,
              position: "bottomRight"
            });

            expect(CornerContainer).toHaveStyleRule("left", "100%");
          });
        });

        describe("top", () => {
          test("should have 100%", () => {
            const { CornerContainer } = setup({
              isActive: true,
              position: "bottomRight"
            });

            expect(CornerContainer).toHaveStyleRule("top", "100%");
          });
        });

        describe("transform", () => {
          test("should have top rotate(180deg)", () => {
            const { CornerContainer } = setup({
              isActive: true,
              position: "bottomRight"
            });

            expect(CornerContainer).toHaveStyleRule(
              "transform",
              "rotate(180deg)"
            );
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  CornerContainer: Element;
}

type CornerTestProps = Partial<CornerProps>;

function setup(additionalProps?: CornerTestProps): Setup {
  const props: CornerProps = {
    position: "topLeft",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<Corner {...props} />);

  const { container } = utils || {};

  return {
    ...utils,
    CornerContainer: container.children[0]
  };
}
