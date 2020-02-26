import React from "react";
import { RenderResult } from "@testing-library/react";

import Icon from "<atoms>/Icon";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  IconProps
} from "<atoms>/__typings__/Icon";

describe("atoms / Icon", () => {
  describe("Styles", () => {
    describe("width", () => {      
      test("should have width auto", () => {
        const { Icon } = setup();
  
        expect(Icon).toHaveStyleRule("width", "auto");
      });
    });

    describe("height", () => {      
      test("should have 1.2rem for spacing12 height", () => {
        const { Icon } = setup({
          height: "spacing12"
        });
  
        expect(Icon).toHaveStyleRule("height", "1.2rem");
      });

      test("should have 2.4rem for spacing24 height", () => {
        const { Icon } = setup({
          height: "spacing24"
        });
  
        expect(Icon).toHaveStyleRule("height", "2.4rem");
      });

      test("should have 2.4rem for spacing24 height", () => {
        const { Icon } = setup({
          height: "spacing24"
        });
  
        expect(Icon).toHaveStyleRule("height", "2.4rem");
      });
    });
  });
  
  describe("Props", () => {
    describe("iconName", () => {
      test("should render corect icon for codesandbox", () => {
        const { Icon } = setup({
          iconName: "codeSandbox"
        });
  
        expect(Icon.textContent).toEqual("Btn-CodeSandbox.svg");
      });

      test("should render corect icon for download", () => {
        const { Icon } = setup({
          iconName: "download"
        });
  
        expect(Icon.textContent).toEqual("Btn-Download.svg");
      });

      test("should render corect icon for externalLink", () => {
        const { Icon } = setup({
          iconName: "externalLink"
        });
  
        expect(Icon.textContent).toEqual("Btn-ExternalLink.svg");
      });

      test("should render corect icon for send", () => {
        const { Icon } = setup({
          iconName: "send"
        });
  
        expect(Icon.textContent).toEqual("Btn-Send.svg");
      });
    });
  });
});

interface Setup extends RenderResult {
  Icon: Element;
}

type IconTestProps = Partial<IconProps>;

function setup(addedProps?: IconTestProps): Setup {
  const props: IconProps = {
    height: "spacing12",
    iconName: "codeSandbox",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <Icon {...props} /> 
  );

  return {
    ...utils,
    Icon: document.querySelector("svg")
  };
}
