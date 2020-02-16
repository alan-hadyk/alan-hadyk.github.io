import React from "react";
import { RenderResult } from "@testing-library/react";

import Logo from "<molecules>/Logo";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / Logo", () => {
  describe("Image", () => {    
    describe("Styles", () => {
      describe("height", () => {      
        test("should have 4.8rem", () => {
          const { Image } = setup();
    
          expect(Image).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("width", () => {      
        test("should have auto", () => {
          const { Image } = setup();
    
          expect(Image).toHaveStyleRule("width", "auto");
        });
      });
    });
  });

  describe("Link", () => {    
    describe("props", () => {
      describe("height", () => {      
        test("should have 100%", () => {
          const { Link } = setup();
    
          expect(Link.getAttribute("height")).toEqual("100%");
        });
      });

      describe("href", () => {      
        test("should have '/'", () => {
          const { Link } = setup();
    
          expect(Link.getAttribute("href")).toEqual("/");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Image: SVGSVGElement;
  Link: HTMLElement;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <Logo />
  );

  return {
    ...utils,
    Image: document.querySelector("svg"),
    Link: document.querySelector("a")
  };
}
