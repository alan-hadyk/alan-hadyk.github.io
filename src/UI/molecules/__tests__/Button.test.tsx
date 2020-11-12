import React from "react";
import {
  act,
  fireEvent,
  RenderResult,
  waitForElementToBeRemoved
} from "@testing-library/react";
import { css } from "styled-components";

import Button from "UI/molecules/Button";

import renderWithTheme from "helpers/tests/renderWithTheme";

import isIE11 from "helpers/browser/isIE11";

jest.mock("helpers/browser/isIE11", () => jest.fn());

jest.mock("react-device-detect", () => ({
  __esModule: true,
  isMobile: false
}));

import * as reactDeviceDetect from "react-device-detect";

import { ButtonProps } from "UI/molecules/__typings__/Button";

describe("molecules / Button", () => {
  test("should have correct structure", () => {
    const {
      ButtonContainer,
      ButtonInnerContainer,
      Corners,
      FlexContainer,
      IconContainer,
      SpacingContainer,
      ButtonText
    } = setup();

    expect(ButtonContainer.children[0]).toEqual(Corners[0]);
    expect(ButtonContainer.children[1]).toEqual(Corners[1]);
    expect(ButtonContainer.children[2]).toEqual(Corners[2]);
    expect(ButtonContainer.children[3]).toEqual(Corners[3]);
    expect(ButtonContainer.children[4]).toEqual(ButtonInnerContainer);
    expect(ButtonInnerContainer.children[0]).toEqual(SpacingContainer);
    expect(SpacingContainer.children[0]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(ButtonText);
    expect(FlexContainer.children[1]).toEqual(IconContainer);
  });

  describe("ButtonContainer", () => {
    describe("Styles", () => {
      describe("background-color", () => {
        test("should have #2b595e for type: primary", () => {
          const { ButtonContainer } = setup({
            type: "primary"
          });

          expect(ButtonContainer).toHaveStyleRule(
            "background-color",
            "#2b595e"
          );
        });

        test("should have transparent for type: secondary", () => {
          const { ButtonContainer } = setup({
            type: "secondary"
          });

          expect(ButtonContainer).toHaveStyleRule(
            "background-color",
            "transparent"
          );
        });
      });

      describe("border", () => {
        test("should have none for type: primary", () => {
          const { ButtonContainer } = setup({
            type: "primary"
          });

          expect(ButtonContainer).toHaveStyleRule("border", "none");
        });

        test("should have 1px solid for type: secondary", () => {
          const { ButtonContainer } = setup({
            type: "secondary"
          });

          expect(ButtonContainer).toHaveStyleRule("border", "1px solid");
        });
      });

      describe("border-color", () => {
        test("should have undefined for type: primary", () => {
          const { ButtonContainer } = setup({
            type: "primary"
          });

          expect(ButtonContainer).not.toHaveStyleRule("border-color");
        });

        test("should have #2b595e for type: secondary", () => {
          const { ButtonContainer } = setup({
            type: "secondary"
          });

          expect(ButtonContainer).toHaveStyleRule("border-color", "#2b595e");
        });
      });

      describe("color", () => {
        test("should have #fff", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule("color", "#fff");
        });
      });

      describe("cursor", () => {
        test("should have pointer", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule("cursor", "pointer");
        });
      });

      describe("height", () => {
        test("should have 4rem for size: small", () => {
          const { ButtonContainer } = setup({
            size: "small"
          });

          expect(ButtonContainer).toHaveStyleRule("height", "4rem");
        });

        test("should have 4.8rem for size: medium", () => {
          const { ButtonContainer } = setup({
            size: "medium"
          });

          expect(ButtonContainer).toHaveStyleRule("height", "4.8rem");
        });

        test("should have 5.6rem for size: large", () => {
          const { ButtonContainer } = setup({
            size: "large"
          });

          expect(ButtonContainer).toHaveStyleRule("height", "5.6rem");
        });
      });

      describe("outline", () => {
        test("should have 0", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule("outline", "0");
        });
      });

      describe("position", () => {
        test("should have relative", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule("position", "relative");
        });
      });

      describe("text-transform", () => {
        test("should have lowercase", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule(
            "text-transform",
            "lowercase"
          );
        });
      });

      describe("transition", () => {
        test("should have all 150ms ease-in-out", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule(
            "transition",
            "all 150ms ease-in-out"
          );
        });
      });

      describe("width", () => {
        test("should have auto by default", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule("width", "auto");
        });

        test("should have correct value passed via width prop", () => {
          const { ButtonContainer } = setup({
            width: "100%"
          });

          expect(ButtonContainer).toHaveStyleRule("width", "100%");
        });
      });

      describe(":hover", () => {
        describe("box-shadow", () => {
          test("should have inset 0px 0px 1.6rem 0px rgba(103,210,223,0.5)", () => {
            const { ButtonContainer } = setup();

            expect(ButtonContainer).toHaveStyleRule(
              "box-shadow",
              "inset 0px 0px 1.6rem 0px rgba(103,210,223,0.5)",
              {
                modifier: ":hover"
              }
            );
          });
        });
      });
    });

    describe("Event handlers", () => {
      test("should activate button onMouseEnter, and deactivate onMouseLeave", () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mockReactDeviceDetect: any = (reactDeviceDetect as unknown) as jest.Mock;
        mockReactDeviceDetect.isMobile = false;

        const { ButtonContainer, Corners } = setup();

        for (const Corner of Corners) {
          expect(Corner.getAttribute("opacity")).toEqual("0.5");
        }
        expect(Corners[0]).toHaveStyleRule("left", "0");
        expect(Corners[0]).toHaveStyleRule("top", "0");
        expect(Corners[1]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[1]).toHaveStyleRule("top", "0");
        expect(Corners[2]).toHaveStyleRule("left", "0");
        expect(Corners[2]).toHaveStyleRule("top", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("top", "calc(100% - 8px)");

        act(() => {
          fireEvent.mouseEnter(ButtonContainer);
        });

        for (const Corner of Corners) {
          expect(Corner.getAttribute("opacity")).toEqual("1");
        }
        expect(Corners[0]).toHaveStyleRule("left", "-8px");
        expect(Corners[0]).toHaveStyleRule("top", "-8px");
        expect(Corners[1]).toHaveStyleRule("left", "100%");
        expect(Corners[1]).toHaveStyleRule("top", "-8px");
        expect(Corners[2]).toHaveStyleRule("left", "-8px");
        expect(Corners[2]).toHaveStyleRule("top", "100%");
        expect(Corners[3]).toHaveStyleRule("left", "100%");
        expect(Corners[3]).toHaveStyleRule("top", "100%");

        fireEvent.mouseLeave(ButtonContainer);

        for (const Corner of Corners) {
          expect(Corner.getAttribute("opacity")).toEqual("0.5");
        }
        expect(Corners[0]).toHaveStyleRule("left", "0");
        expect(Corners[0]).toHaveStyleRule("top", "0");
        expect(Corners[1]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[1]).toHaveStyleRule("top", "0");
        expect(Corners[2]).toHaveStyleRule("left", "0");
        expect(Corners[2]).toHaveStyleRule("top", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("top", "calc(100% - 8px)");
      });

      test("should not activate button onMouseEnter when isMobile is true", () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mockReactDeviceDetect: any = (reactDeviceDetect as unknown) as jest.Mock;
        mockReactDeviceDetect.isMobile = true;

        const { ButtonContainer, Corners } = setup();

        for (const Corner of Corners) {
          expect(Corner.getAttribute("opacity")).toEqual("0.5");
        }
        expect(Corners[0]).toHaveStyleRule("left", "0");
        expect(Corners[0]).toHaveStyleRule("top", "0");
        expect(Corners[1]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[1]).toHaveStyleRule("top", "0");
        expect(Corners[2]).toHaveStyleRule("left", "0");
        expect(Corners[2]).toHaveStyleRule("top", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("top", "calc(100% - 8px)");

        act(() => {
          fireEvent.mouseEnter(ButtonContainer);
        });

        for (const Corner of Corners) {
          expect(Corner.getAttribute("opacity")).toEqual("0.5");
        }
        expect(Corners[0]).toHaveStyleRule("left", "0");
        expect(Corners[0]).toHaveStyleRule("top", "0");
        expect(Corners[1]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[1]).toHaveStyleRule("top", "0");
        expect(Corners[2]).toHaveStyleRule("left", "0");
        expect(Corners[2]).toHaveStyleRule("top", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("top", "calc(100% - 8px)");
      });

      test("should append ripple onClick", async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mockReactDeviceDetect: any = (reactDeviceDetect as unknown) as jest.Mock;
        mockReactDeviceDetect.isMobile = false;

        const { ButtonContainer, Corners } = setup();

        for (const Corner of Corners) {
          expect(Corner.getAttribute("opacity")).toEqual("0.5");
        }
        expect(Corners[0]).toHaveStyleRule("left", "0");
        expect(Corners[0]).toHaveStyleRule("top", "0");
        expect(Corners[1]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[1]).toHaveStyleRule("top", "0");
        expect(Corners[2]).toHaveStyleRule("left", "0");
        expect(Corners[2]).toHaveStyleRule("top", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("top", "calc(100% - 8px)");

        act(() => {
          fireEvent.mouseEnter(ButtonContainer);
        });

        for (const Corner of Corners) {
          expect(Corner.getAttribute("opacity")).toEqual("1");
        }
        expect(Corners[0]).toHaveStyleRule("left", "-8px");
        expect(Corners[0]).toHaveStyleRule("top", "-8px");
        expect(Corners[1]).toHaveStyleRule("left", "100%");
        expect(Corners[1]).toHaveStyleRule("top", "-8px");
        expect(Corners[2]).toHaveStyleRule("left", "-8px");
        expect(Corners[2]).toHaveStyleRule("top", "100%");
        expect(Corners[3]).toHaveStyleRule("left", "100%");
        expect(Corners[3]).toHaveStyleRule("top", "100%");

        act(() => {
          fireEvent.mouseUp(ButtonContainer, {
            clienX: 123,
            clientY: 456
          });
        });

        for (const Corner of Corners) {
          expect(Corner.getAttribute("opacity")).toEqual("0.5");
        }
        expect(Corners[0]).toHaveStyleRule("left", "0");
        expect(Corners[0]).toHaveStyleRule("top", "0");
        expect(Corners[1]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[1]).toHaveStyleRule("top", "0");
        expect(Corners[2]).toHaveStyleRule("left", "0");
        expect(Corners[2]).toHaveStyleRule("top", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("top", "calc(100% - 8px)");

        const ripple: HTMLElement = document.querySelector(".ripple");

        expect(ripple).toBeTruthy();

        await waitForElementToBeRemoved(() =>
          document.querySelector(".ripple")
        );

        expect(document.querySelector(".ripple")).toBeFalsy();
      });

      test("should append ripple onClick - isMobile: true", async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mockReactDeviceDetect: any = (reactDeviceDetect as unknown) as jest.Mock;
        mockReactDeviceDetect.isMobile = true;

        const { ButtonContainer, Corners } = setup();

        for (const Corner of Corners) {
          expect(Corner.getAttribute("opacity")).toEqual("0.5");
        }
        expect(Corners[0]).toHaveStyleRule("left", "0");
        expect(Corners[0]).toHaveStyleRule("top", "0");
        expect(Corners[1]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[1]).toHaveStyleRule("top", "0");
        expect(Corners[2]).toHaveStyleRule("left", "0");
        expect(Corners[2]).toHaveStyleRule("top", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("top", "calc(100% - 8px)");

        act(() => {
          fireEvent.mouseEnter(ButtonContainer);
        });

        for (const Corner of Corners) {
          expect(Corner.getAttribute("opacity")).toEqual("0.5");
        }
        expect(Corners[0]).toHaveStyleRule("left", "0");
        expect(Corners[0]).toHaveStyleRule("top", "0");
        expect(Corners[1]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[1]).toHaveStyleRule("top", "0");
        expect(Corners[2]).toHaveStyleRule("left", "0");
        expect(Corners[2]).toHaveStyleRule("top", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("top", "calc(100% - 8px)");

        act(() => {
          fireEvent.mouseUp(ButtonContainer, {
            clienX: 123,
            clientY: 456
          });
        });

        for (const Corner of Corners) {
          expect(Corner.getAttribute("opacity")).toEqual("0.5");
        }
        expect(Corners[0]).toHaveStyleRule("left", "0");
        expect(Corners[0]).toHaveStyleRule("top", "0");
        expect(Corners[1]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[1]).toHaveStyleRule("top", "0");
        expect(Corners[2]).toHaveStyleRule("left", "0");
        expect(Corners[2]).toHaveStyleRule("top", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("left", "calc(100% - 8px)");
        expect(Corners[3]).toHaveStyleRule("top", "calc(100% - 8px)");

        const ripple: HTMLElement = document.querySelector(".ripple");

        expect(ripple).toBeTruthy();

        await waitForElementToBeRemoved(() =>
          document.querySelector(".ripple")
        );

        expect(document.querySelector(".ripple")).toBeFalsy();
      });

      test("should fire onClick prop when ButtonContainer is clicked", () => {
        const onClick = jest.fn();
        const { ButtonContainer } = setup({
          onClick
        });

        expect(onClick).toHaveBeenCalledTimes(0);

        act(() => {
          fireEvent.mouseUp(ButtonContainer);
        });

        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("ButtonInnerContainer", () => {
    describe("Styles", () => {
      describe("align-items", () => {
        test("should have center", () => {
          const { ButtonInnerContainer } = setup();

          expect(ButtonInnerContainer).toHaveStyleRule("align-items", "center");
        });
      });

      describe("display", () => {
        test("should have flex", () => {
          const { ButtonInnerContainer } = setup();

          expect(ButtonInnerContainer).toHaveStyleRule("display", "flex");
        });
      });

      describe("height", () => {
        test("should have 100%", () => {
          const { ButtonInnerContainer } = setup();

          expect(ButtonInnerContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("overflow", () => {
        test("should have hidden", () => {
          const { ButtonInnerContainer } = setup();

          expect(ButtonInnerContainer).toHaveStyleRule("overflow", "hidden");
        });
      });

      describe("position", () => {
        test("should have relative", () => {
          const { ButtonInnerContainer } = setup();

          expect(ButtonInnerContainer).toHaveStyleRule("position", "relative");
        });
      });
    });
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("paddingRight", () => {
        test("should have 1.6rem when size is small", () => {
          const { SpacingContainer } = setup({
            size: "small"
          });

          expect(SpacingContainer).toHaveStyleRule("padding-right", "1.6rem");
        });

        test("should have 2.4rem when size is medium", () => {
          const { SpacingContainer } = setup({
            size: "medium"
          });

          expect(SpacingContainer).toHaveStyleRule("padding-right", "2.4rem");
        });

        test("should have 2.4rem when size is large", () => {
          const { SpacingContainer } = setup({
            size: "large"
          });

          expect(SpacingContainer).toHaveStyleRule("padding-right", "2.4rem");
        });
      });

      describe("paddingLeft", () => {
        test("should have 1.6rem when size is small", () => {
          const { SpacingContainer } = setup({
            size: "small"
          });

          expect(SpacingContainer).toHaveStyleRule("padding-left", "1.6rem");
        });

        test("should have 2.4rem when size is medium", () => {
          const { SpacingContainer } = setup({
            size: "medium"
          });

          expect(SpacingContainer).toHaveStyleRule("padding-left", "2.4rem");
        });

        test("should have 2.4rem when size is large", () => {
          const { SpacingContainer } = setup({
            size: "large"
          });

          expect(SpacingContainer).toHaveStyleRule("padding-left", "2.4rem");
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("flexFlow", () => {
        test("should have row nowrap", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });
    });
  });

  describe("ButtonText", () => {
    test("text should have correct content", () => {
      const { ButtonText } = setup();

      expect(ButtonText.textContent).toEqual("Text content");
    });

    describe("Props", () => {
      describe("fontFamily", () => {
        test("should have ExanModifiedRegular,monospace for all browsers except IE", () => {
          const { ButtonText } = setup();
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => false);

          expect(ButtonText).toHaveStyleRule(
            "font-family",
            "ExanModifiedRegular,monospace"
          );
        });

        test("should have AnonymousPro,monospace for IE", () => {
          const { ButtonText } = setup();
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => true);

          expect(ButtonText).toHaveStyleRule(
            "font-family",
            "'Anonymous Pro',monospace"
          );
        });
      });

      describe("hasMargin", () => {
        test("should have margin-right 0 when iconName is not passed", () => {
          const { ButtonText } = setup({
            iconName: undefined
          });

          expect(ButtonText).toHaveStyleRule("margin-right", "0");
        });

        test("should have margin-right .8rem when iconName is passed and size is small", () => {
          const { ButtonText } = setup({
            iconName: "btnCodeSandbox",
            size: "small"
          });

          expect(ButtonText).toHaveStyleRule("margin-right", ".8rem");
        });

        test("should have margin-right 1.6rem when iconName is passed and size is medium", () => {
          const { ButtonText } = setup({
            iconName: "btnCodeSandbox",
            size: "medium"
          });

          expect(ButtonText).toHaveStyleRule("margin-right", "1.6rem");
        });

        test("should have margin-right 1.6rem when iconName is passed and size is large", () => {
          const { ButtonText } = setup({
            iconName: "btnCodeSandbox",
            size: "large"
          });

          expect(ButtonText).toHaveStyleRule("margin-right", "1.6rem");
        });
      });

      describe("size", () => {
        describe("fontSize", () => {
          test("should have 20px when size is small", () => {
            const { ButtonText } = setup({
              size: "small"
            });

            expect(ButtonText.children[0]).toHaveStyleRule("font-size", "20px");
          });

          test("should have 24px when size is medium", () => {
            const { ButtonText } = setup({
              size: "medium"
            });

            expect(ButtonText.children[0]).toHaveStyleRule("font-size", "24px");
          });

          test("should have 28px when size is large", () => {
            const { ButtonText } = setup({
              size: "large"
            });

            expect(ButtonText.children[0]).toHaveStyleRule("font-size", "28px");
          });
        });
      });

      describe("textTransform", () => {
        test("should have lowercase for all browsers except IE", () => {
          const { ButtonText } = setup();
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => false);

          expect(ButtonText).toHaveStyleRule("text-transform", "lowercase");
        });

        test("should have uppercase for IE", () => {
          const { ButtonText } = setup();
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => true);

          expect(ButtonText).toHaveStyleRule("text-transform", "uppercase");
        });
      });
    });
  });

  describe("Icon", () => {
    test("should render icon if iconName is passed", () => {
      const { Icon } = setup({
        iconName: "btnCodeSandbox"
      });

      expect(Icon).toBeTruthy();
    });

    test("should not render icon if iconName is not passed", () => {
      const { Icon } = setup({
        iconName: undefined
      });

      expect(Icon).toBeFalsy();
    });

    describe("Props", () => {
      describe("iconName", () => {
        test("should render correct icon for codesandbox", () => {
          const { Icon } = setup({
            iconName: "btnCodeSandbox"
          });

          expect(Icon.textContent).toEqual("Btn-CodeSandbox.svg");
        });

        test("should render correct icon for download", () => {
          const { Icon } = setup({
            iconName: "btnDownload"
          });

          expect(Icon.textContent).toEqual("Btn-Download.svg");
        });

        test("should render correct icon for externalLink", () => {
          const { Icon } = setup({
            iconName: "btnExternalLink"
          });

          expect(Icon.textContent).toEqual("Btn-ExternalLink.svg");
        });
      });

      describe("height", () => {
        test("should have 2.4rem when size is large", () => {
          const { IconContainer } = setup({
            size: "large"
          });

          expect(IconContainer).toHaveStyleRule("height", "2.4rem");
        });

        test("should have 2.4rem when size is medium", () => {
          const { IconContainer } = setup({
            size: "medium"
          });

          expect(IconContainer).toHaveStyleRule("height", "2.4rem");
        });

        test("should have 1.2rem when size is small", () => {
          const { IconContainer } = setup({
            size: "small"
          });

          expect(IconContainer).toHaveStyleRule("height", "1.2rem");
        });
      });

      describe("isHeightResponsive", () => {
        describe("svg", () => {
          describe("height", () => {
            test("should have 100%", () => {
              const { IconContainer } = setup();

              expect(IconContainer).toHaveStyleRule("height", "100%", {
                modifier: "svg"
              });
            });
          });
        });
      });

      describe("width", () => {
        test("should have auto by default", () => {
          const { ButtonText } = setup();

          expect(ButtonText).toHaveStyleRule("width", "auto");
        });

        test("should have correct value passed via iconWidth prop", () => {
          const { ButtonText } = setup({
            iconWidth: "spacing24"
          });

          expect(ButtonText).toHaveStyleRule("width", "24px");
        });
      });
    });
  });

  describe(".ripple", () => {
    describe("Styles", () => {
      describe("animation-duration", () => {
        test("should have 900ms", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule(
            "animation-duration",
            "900ms",
            {
              modifier: css` .ripple`
            }
          );
        });
      });

      describe("background-color", () => {
        test("should have rgba(120,176,181,0.5)", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule(
            "background-color",
            "rgba(120,176,181,0.5)",
            {
              modifier: css` .ripple`
            }
          );
        });
      });

      describe("border-radius", () => {
        test("should have 50%", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule("border-radius", "50%", {
            modifier: css` .ripple`
          });
        });
      });

      describe("height", () => {
        test("should have 2.4rem", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule("height", "2.4rem", {
            modifier: css` .ripple`
          });
        });
      });

      describe("margin-left", () => {
        test("should have -1.2rem", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule("margin-left", "-1.2rem", {
            modifier: css` .ripple`
          });
        });
      });

      describe("margin-top", () => {
        test("should have -1.2rem", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule("margin-top", "-1.2rem", {
            modifier: css` .ripple`
          });
        });
      });

      describe("opacity", () => {
        test("should have 0", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule("opacity", "0", {
            modifier: css` .ripple`
          });
        });
      });

      describe("position", () => {
        test("should have absolute", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule("position", "absolute", {
            modifier: css` .ripple`
          });
        });
      });

      describe("width", () => {
        test("should have 2.4rem", () => {
          const { ButtonContainer } = setup();

          expect(ButtonContainer).toHaveStyleRule("width", "2.4rem", {
            modifier: css` .ripple`
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ButtonContainer: Element;
  ButtonInnerContainer: Element;
  ButtonText: Element;
  Corners: Element[];
  FlexContainer: Element;
  Icon: Element;
  IconContainer: Element;
  SpacingContainer: Element;
}

type ButtonTestProps = Partial<ButtonProps>;

function setup(additionalProps?: ButtonTestProps): Setup {
  const props: ButtonProps = {
    buttonText: "Text content",
    iconName: "btnCodeSandbox",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<Button {...props} />);

  const { queryAllByTestId, queryByTestId } = utils || {};

  const ButtonContainer: Element = document.querySelector("button");
  const ButtonInnerContainer: Element = queryByTestId("ButtonInnerContainer");
  const ButtonText: Element = queryByTestId("ButtonText");
  const Corners: Element[] = queryAllByTestId("Corner");
  const FlexContainer: Element = queryByTestId("FlexContainer");
  const Icon: Element = document.querySelector("svg");
  const IconContainer: Element = queryByTestId("IconContainer");
  const SpacingContainer: Element = queryByTestId("ButtonSpacingContainer");

  return {
    ...utils,
    ButtonContainer,
    ButtonInnerContainer,
    ButtonText,
    Corners,
    FlexContainer,
    Icon,
    IconContainer,
    SpacingContainer
  };
}
