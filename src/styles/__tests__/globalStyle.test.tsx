import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { createGlobalStyle } from "styled-components";

import globalStyle from "<styles>/globalStyle";

describe("styles / globalStyle", () => {
  describe("should have correct styles", () => {
    const { sheet } = setup();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { cssRules }: any = sheet;

    test("html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,button,input", () => {
  
      const styles: CSSStyleDeclaration = findCSSStyles({
        cssRules,
        selectorText: "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,button,input"
      });
  
      expect(styles["margin"]).toEqual("0");
      expect(styles["padding"]).toEqual("0");
      expect(styles["border"]).toEqual("0");
      expect(styles["font-family"]).toEqual("'Anonymous Pro',monospace");
    });

    test("article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section", () => {
      const styles: CSSStyleDeclaration = findCSSStyles({
        cssRules,
        selectorText: "article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section"
      });

      expect(styles["display"]).toEqual("block");
    });

    test("html", () => {
      const styles: CSSStyleDeclaration = findCSSStyles({
        cssRules,
        selectorText: "html"
      });

      expect(styles["font-size"]).toEqual("62.5%");
    });

    test("*,*:after,*:before,*::before,*::after", () => {
      const styles: CSSStyleDeclaration = findCSSStyles({
        cssRules,
        selectorText: "*,*:after,*:before,*::before,*::after"
      });

      expect(styles["box-sizing"]).toEqual("border-box");
      expect(styles["outline"]).toEqual("0");
    });

    test("*", () => {
      const styles: CSSStyleDeclaration = findCSSStyles({
        cssRules,
        selectorText: "*"
      });

      expect(styles["-webkit-tap-highlight-color"]).toEqual("transparent");
    });

    test("body", () => {
      const styles: CSSStyleDeclaration = findCSSStyles({
        cssRules,
        selectorText: "body"
      });

      expect(styles["background-color"]).toEqual("#1e2224");
      expect(styles["color"]).toEqual("#78b0b5");
      expect(styles["line-height"]).toEqual("1");
      expect(styles["min-height"]).toEqual("100vh");
      expect(styles["overflow-x"]).toEqual("hidden");
      expect(styles["position"]).toEqual("relative");
      expect(styles["scroll-behavior"]).toEqual("smooth");
    });

    test("::selection", () => {
      const styles: CSSStyleDeclaration = findCSSStyles({
        cssRules,
        selectorText: "::selection"
      });

      expect(styles["color"]).toEqual("#1e2224");
      expect(styles["background"]).toEqual("#bcd8db");
    });
    
    test("h1,h2,h3,h4,h5,h6", () => {
      const styles: CSSStyleDeclaration = findCSSStyles({
        cssRules,
        selectorText: "h1,h2,h3,h4,h5,h6"
      });

      expect(styles["font-family"]).toEqual("ExanModifiedRegular,monospace");
    });

    test("ul,ol", () => {
      const styles: CSSStyleDeclaration = findCSSStyles({
        cssRules,
        selectorText: "ul,ol"
      });

      expect(styles["padding"]).toEqual("0");
      expect(styles["margin"]).toEqual("0");
      expect(styles["list-style"]).toEqual("none");
    });

    test("img", () => {
      const styles: CSSStyleDeclaration = findCSSStyles({
        cssRules,
        selectorText: "img"
      });

      expect(styles["max-width"]).toEqual("100%");
      expect(styles["display"]).toEqual("block");
    });

    test("a", () => {
      const styles: CSSStyleDeclaration = findCSSStyles({
        cssRules,
        selectorText: "a"
      });

      expect(styles["text-decoration"]).toEqual("none");
    });
  });
});

interface Setup extends RenderResult {
  sheet: StyleSheet;
}

function setup(): Setup {
  const GlobalStyle = createGlobalStyle`
    ${globalStyle}
  `;

  const utils = render(
    <GlobalStyle />
  );

  return {
    ...utils,
    sheet: document.head.getElementsByTagName("style") && 
      document.head.getElementsByTagName("style")[0] && 
      document.head.getElementsByTagName("style")[0].sheet
  };
}

interface FindCSSStylesArgs {
  cssRules: CSSStyleRule[];
  selectorText: string;
}

function findCSSStyles({ 
  cssRules = [],
  selectorText
}: FindCSSStylesArgs): CSSStyleDeclaration  {
  return cssRules
    .find(cssRule => cssRule.selectorText === selectorText)
    .style;
}

