import React from "react";
import { RenderResult } from "@testing-library/react";

import ButtonIcon, { ButtonIconProps } from "<atoms>/ButtonIcon";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("atoms / ButtonIcon", () => {
  describe("Styles", () => {
    describe("width", () => {      
      test("should have width auto", () => {
        const { ButtonIcon } = setup();
  
        expect(ButtonIcon).toHaveStyleRule("width", "auto");
      });
    });

    describe("height", () => {      
      test("should have 1.2rem for small size", () => {
        const { ButtonIcon } = setup({
          size: "small"
        });
  
        expect(ButtonIcon).toHaveStyleRule("height", "1.2rem");
      });

      test("should have 2.4rem for medium size", () => {
        const { ButtonIcon } = setup({
          size: "medium"
        });
  
        expect(ButtonIcon).toHaveStyleRule("height", "2.4rem");
      });

      test("should have 2.4rem for large size", () => {
        const { ButtonIcon } = setup({
          size: "large"
        });
  
        expect(ButtonIcon).toHaveStyleRule("height", "2.4rem");
      });
    });
  });
  
  describe("Props", () => {
    describe("iconName", () => {
      test("should render corect icon for codesandbox", () => {
        const { ButtonIcon } = setup({
          iconName: "codeSandbox"
        });
  
        expect(ButtonIcon.textContent).toEqual("Btn-CodeSandbox.svg");
      });

      test("should render corect icon for download", () => {
        const { ButtonIcon } = setup({
          iconName: "download"
        });
  
        expect(ButtonIcon.textContent).toEqual("Btn-Download.svg");
      });

      test("should render corect icon for externalLink", () => {
        const { ButtonIcon } = setup({
          iconName: "externalLink"
        });
  
        expect(ButtonIcon.textContent).toEqual("Btn-ExternalLink.svg");
      });

      test("should render corect icon for send", () => {
        const { ButtonIcon } = setup({
          iconName: "send"
        });
  
        expect(ButtonIcon.textContent).toEqual("Btn-Send.svg");
      });
    });
  });
});

interface Setup extends RenderResult {
  ButtonIcon: Element;
}

type ButtonIconTestProps = Partial<ButtonIconProps>;

function setup(addedProps?: ButtonIconTestProps): Setup {
  const props: ButtonIconProps = {
    iconName: "codeSandbox",
    size: "small",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <ButtonIcon {...props} /> 
  );

  return {
    ...utils,
    ButtonIcon: document.querySelector("svg")
  };
}
