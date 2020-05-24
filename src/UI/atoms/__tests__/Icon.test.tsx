import React from "react";
import { RenderResult } from "@testing-library/react";

import Icon from "<atoms>/Icon";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  IconProps
} from "<atoms>/__typings__/Icon.d.ts";

describe("atoms / Icon", () => {
  describe("Styles", () => {
    describe("height", () => {
      test("should have auto by default", () => {
        const { IconContainer } = setup();

        expect(IconContainer).toHaveStyleRule("height", "auto");
      });

      test("should have 1.2rem when passed via height prop", () => {
        const { IconContainer } = setup({
          height: "spacing12"
        });

        expect(IconContainer).toHaveStyleRule("height", "1.2rem");
      });

      test("should have 2.4rem when passed via height prop", () => {
        const { IconContainer } = setup({
          height: "spacing24"
        });

        expect(IconContainer).toHaveStyleRule("height", "2.4rem");
      });

    });

    describe("overflow", () => {
      test("should have visible by default", () => {
        const { IconContainer } = setup();

        expect(IconContainer).toHaveStyleRule("overflow", "visible");
      });

      test("should have hidden when passed via overflow prop", () => {
        const { IconContainer } = setup({
          overflow: "hidden"
        });

        expect(IconContainer).toHaveStyleRule("overflow", "hidden");
      });
    });

    describe("width", () => {
      test("should have auto by default", () => {
        const { IconContainer } = setup();

        expect(IconContainer).toHaveStyleRule("width", "auto");
      });

      test("should have 2.4rem when passed via width prop", () => {
        const { IconContainer } = setup({
          width: "spacing24"
        });

        expect(IconContainer).toHaveStyleRule("width", "2.4rem");
      });

      test("should have 100% when passed via width prop", () => {
        const { IconContainer } = setup({
          width: "100%"
        });

        expect(IconContainer).toHaveStyleRule("width", "100%");
      });
    });

    describe("animation-duration, animation-iteration-count,animation-timing-function", () => {
      describe("when shouldRotate is true", () => {
        let IconContainer: Element;

        beforeEach(() => {
          IconContainer = setup({
            shouldRotate: true
          }).IconContainer;
        });

        describe("animation-duration", () => {
          test("should have 3600ms", () => {
            expect(IconContainer).toHaveStyleRule("animation-duration", "3600ms");
          });
        });

        describe("animation-iteration-count", () => {
          test("should have infinite", () => {
            expect(IconContainer).toHaveStyleRule("animation-iteration-count", "infinite");
          });
        });

        describe("animation-timing-function", () => {
          test("should have linear", () => {
            expect(IconContainer).toHaveStyleRule("animation-timing-function", "linear");
          });
        });
      });

      describe("should not have rotate animation when shouldRotate is false", () => {
        let IconContainer: Element;

        beforeEach(() => {
          IconContainer = setup({
            shouldRotate: false
          }).IconContainer;
        });

        test("animation-name", () => {
          expect(IconContainer).not.toHaveStyleRule("animation-name");
        });

        test("animation-duration", () => {
          expect(IconContainer).not.toHaveStyleRule("animation-duration");
        });

        test("animation-iteration-count", () => {
          expect(IconContainer).not.toHaveStyleRule("animation-iteration-count");
        });

        test("animation-timing-function", () => {
          expect(IconContainer).not.toHaveStyleRule("animation-timing-function");
        });
      });
    });

    describe("svg", () => {
      describe("height", () => {
        test("should have 100% if isResponsive: true", () => {
          const { IconContainer } = setup({
            isResponsive: true
          });
  
          expect(IconContainer).toHaveStyleRule("height", "100%", {
            modifier: "svg"
          });
        });
  
        test("should have 100% if isHeightResponsive: true", () => {
          const { IconContainer } = setup({
            isHeightResponsive: true
          });
  
          expect(IconContainer).toHaveStyleRule("height", "100%", {
            modifier: "svg"
          });
        });  
  
        test("should have auto if isResponsive: false and isHeightResponsive: false ", () => {
          const { IconContainer } = setup({
            isHeightResponsive: false,
            isResponsive: false
          });
  
          expect(IconContainer).toHaveStyleRule("height", "auto", {
            modifier: "svg"
          });
        });  
      });
      
      describe("width", () => {
        test("should have 100% if isResponsive: true and isHeightResponsive: false", () => {
          const { IconContainer } = setup({
            isHeightResponsive: false,
            isResponsive: true
          });
  
          expect(IconContainer).toHaveStyleRule("width", "100%", {
            modifier: "svg"
          });
        });
  
        test("should have auto if isResponsive: false and isHeightResponsive: false", () => {
          const { IconContainer } = setup({
            isHeightResponsive: false,
            isResponsive: false
          });
  
          expect(IconContainer).toHaveStyleRule("width", "auto", {
            modifier: "svg"
          });
        });
  
        test("should have auto if isResponsive: true and isHeightResponsive: true", () => {
          const { IconContainer } = setup({
            isHeightResponsive: true,
            isResponsive: true
          });
  
          expect(IconContainer).toHaveStyleRule("width", "auto", {
            modifier: "svg"
          });
        });
  
        test("should have auto if isResponsive: false and isHeightResponsive: true", () => {
          const { IconContainer } = setup({
            isHeightResponsive: true,
            isResponsive: false
          });
  
          expect(IconContainer).toHaveStyleRule("width", "auto", {
            modifier: "svg"
          });
        });
      });
  
      describe("path", () => {
        describe("fill", () => {
          describe("when isActive is true", () => {
            test("should have #78b0b5", () => {
              const { IconContainer } = setup({
                isActive: true
              });

              expect(IconContainer).toHaveStyleRule("fill", "#78b0b5", {
                modifier: "svg path"
              });
            });
          });

          test("should not have fill when isActive is false", () => {
            const { IconContainer } = setup({
              isActive: false
            });

            expect(IconContainer).not.toHaveStyleRule("fill", {
              modifier: "svg path"
            });
          });
        });
      });
    
      describe("animation-delay, animation-duration, animation-iteration-count, animation-timing-function", () => {
        describe("when shouldDisplayGlowAnimation is true", () => {
          describe("animation-delay", () => {
            test("should have 0ms by default", () => {
              const { IconContainer } = setup({
                shouldDisplayGlowAnimation: true
              });

              expect(IconContainer).toHaveStyleRule("animation-delay", "0ms", {
                modifier: "svg"
              });
            });

            test("should have 150ms when passed via animationDelay prop", () => {
              const { IconContainer } = setup({
                animationDelay: "150ms",
                shouldDisplayGlowAnimation: true
              });

              expect(IconContainer).toHaveStyleRule("animation-delay", "150ms", {
                modifier: "svg"
              });
            });
          });

          describe("animation-duration", () => {
            test("should have 900ms by default", () => {
              const { IconContainer } = setup({
                shouldDisplayGlowAnimation: true
              });

              expect(IconContainer).toHaveStyleRule("animation-duration", "900ms", {
                modifier: "svg"
              });
            });

            test("should have 300ms when passed via animationTime prop", () => {
              const { IconContainer } = setup({
                animationTime: "default",
                shouldDisplayGlowAnimation: true
              });

              expect(IconContainer).toHaveStyleRule("animation-duration", "300ms", {
                modifier: "svg"
              });
            });
          });

          describe("animation-iteration-count", () => {
            test("should have infinite", () => {
              const { IconContainer } = setup({
                shouldDisplayGlowAnimation: true
              });

              expect(IconContainer).toHaveStyleRule("animation-iteration-count", "infinite", {
                modifier: "svg"
              });
            });
          });

          describe("animation-timing-function", () => {
            test("should have ease-in-out", () => {
              const { IconContainer } = setup({
                shouldDisplayGlowAnimation: true
              });

              expect(IconContainer).toHaveStyleRule("animation-timing-function", "ease-in-out", {
                modifier: "svg"
              });
            });
          });
        });

        describe("should not have glow animation when shouldDisplayGlowAnimation is false", () => {
          let IconContainer: Element;

          beforeEach(() => {
            IconContainer = setup({
              shouldDisplayGlowAnimation: false
            }).IconContainer;
          });
          
          test("animation-name", () => {
            expect(IconContainer).not.toHaveStyleRule("animation-name", {
              modifier: "svg"
            });
          });

          test("animation-delay", () => {
            expect(IconContainer).not.toHaveStyleRule("animation-delay", {
              modifier: "svg"
            });
          });

          test("animation-duration", () => {
            expect(IconContainer).not.toHaveStyleRule("animation-duration", {
              modifier: "svg"
            });
          });

          test("animation-iteration-count", () => {
            expect(IconContainer).not.toHaveStyleRule("animation-iteration-count", {
              modifier: "svg"
            });
          });

          test("animation-timing-function", () => {
            expect(IconContainer).not.toHaveStyleRule("animation-timing-function", {
              modifier: "svg"
            });
          });
        });
      });

      describe("filter", () => {
        test("should have drop-shadow(0px 0px .4rem rgba(255,255,255,0.5)) - shouldGlow: true", () => {
          const { IconContainer } = setup({
            shouldGlow: true
          });

          expect(IconContainer).toHaveStyleRule("filter", "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", {
            modifier: "svg"
          });
        });

        test("should not have filter - shouldGlow: false ", () => {
          const { IconContainer } = setup({
            shouldGlow: false
          });

          expect(IconContainer).not.toHaveStyleRule("filter", "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", {
            modifier: "svg"
          });
        });
      });

      describe("transition", () => {
        describe("when shouldGlowOnHover is true", () => {
          test("should have all 900ms ease-in-out 0ms", () => {
            const { IconContainer } = setup({
              shouldGlowOnHover: true
            });

            expect(IconContainer).toHaveStyleRule("transition", "all 900ms ease-in-out 0ms", {
              modifier: "svg"
            });
          });

          test("should have all 150ms ease-in-out 0ms when animationTime: fast", () => {
            const { IconContainer } = setup({
              animationTime: "fast",
              shouldGlowOnHover: true
            });

            expect(IconContainer).toHaveStyleRule("transition", "all 150ms ease-in-out 0ms", {
              modifier: "svg"
            });
          });

          test("should have all 900ms ease-in-out 150ms when animationDelay: 150ms", () => {
            const { IconContainer } = setup({
              animationDelay: "150ms",
              shouldGlowOnHover: true
            });

            expect(IconContainer).toHaveStyleRule("transition", "all 900ms ease-in-out 150ms", {
              modifier: "svg"
            }); 
          });
        });

        test("should not have transition when shouldGlowOnHover is false", () => {
          const { IconContainer } = setup({
            shouldGlowOnHover: false
          });

          expect(IconContainer).not.toHaveStyleRule("transition", {
            modifier: "svg"
          });
        });
      });

      describe(":hover", () => {
        describe("filter", () => {
          test("should have drop-shadow(0px 0px .4rem rgba(255,255,255,0.5)) - shouldGlowOnHover: true", () => {
            const { IconContainer } = setup({
              shouldGlowOnHover: true
            });

            expect(IconContainer).toHaveStyleRule("filter", "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", {
              modifier: "svg:hover"
            });
          });

          test("should not have filter - shouldGlowOnHover: false ", () => {
            const { IconContainer } = setup({
              shouldGlowOnHover: false
            });

            expect(IconContainer).not.toHaveStyleRule("filter", "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", {
              modifier: "svg:hover"
            });
          });

        });
      });
    });
  });

  describe("Props", () => {
    describe("iconName", () => {
      test("should render correct icon for apollo", () => {
        const { IconComponent } = setup({
          iconName: "apollo"
        });

        expect(IconComponent.textContent).toEqual("Icon-Apollo.svg");
      });

      test("should render correct icon for brandJS", () => {
        const { IconComponent } = setup({
          iconName: "brandJS"
        });
  
        expect(IconComponent.textContent).toEqual("Brand-JS.svg");
      });

      test("should render correct icon for brandReact", () => {
        const { IconComponent } = setup({
          iconName: "brandReact"
        });
  
        expect(IconComponent.textContent).toEqual("Brand-React.svg");
      });

      test("should render correct icon for brandWebpack", () => {
        const { IconComponent } = setup({
          iconName: "brandWebpack"
        });
  
        expect(IconComponent.textContent).toEqual("Brand-Webpack.svg");
      });

      test("should render correct icon for btnCodeSandbox", () => {
        const { IconComponent } = setup({
          iconName: "btnCodeSandbox"
        });

        expect(IconComponent.textContent).toEqual("Btn-CodeSandbox.svg");
      });

      test("should render correct icon for btnDownload", () => {
        const { IconComponent } = setup({
          iconName: "btnDownload"
        });

        expect(IconComponent.textContent).toEqual("Btn-Download.svg");
      });

      test("should render correct icon for btnExternalLink", () => {
        const { IconComponent } = setup({
          iconName: "btnExternalLink"
        });

        expect(IconComponent.textContent).toEqual("Btn-ExternalLink.svg");
      });

      test("should render correct icon for btnSend", () => {
        const { IconComponent } = setup({
          iconName: "btnSend"
        });

        expect(IconComponent.textContent).toEqual("Btn-Send.svg");
      });

      test("should render corect icon for calendar", () => {
        const { IconComponent } = setup({
          iconName: "calendar"
        });

        expect(IconComponent.textContent).toEqual("Icon-Calendar.svg");
      });

      test("should render corect icon for chrome", () => {
        const { IconComponent } = setup({
          iconName: "chrome"
        });

        expect(IconComponent.textContent).toEqual("Icon-Chrome.svg");
      });

      test("should render corect icon for codeSandbox", () => {
        const { IconComponent } = setup({
          iconName: "codeSandbox"
        });

        expect(IconComponent.textContent).toEqual("Icon-CodeSandbox.svg");
      });

      test("should render corect icon for companyOmise", () => {
        const { IconComponent } = setup({
          iconName: "companyOmise"
        });

        expect(IconComponent.textContent).toEqual("Company-Omise.svg");
      });

      test("should render corect icon for firefox", () => {
        const { IconComponent } = setup({
          iconName: "firefox"
        });

        expect(IconComponent.textContent).toEqual("Icon-Firefox.svg");
      });

      test("should render corect icon for hexagon", () => {
        const { IconComponent } = setup({
          iconName: "hexagon"
        });

        expect(IconComponent.textContent).toEqual("Hexagon.svg");
      });

      test("should render corect icon for hexagonWithPattern", () => {
        const { IconComponent } = setup({
          iconName: "hexagonWithPattern"
        });

        expect(IconComponent.textContent).toEqual("Hexagon-With-Pattern.svg");
      });

      test("should render corect icon for earth", () => {
        const { IconComponent } = setup({
          iconName: "earth"
        });

        expect(IconComponent.textContent).toEqual("Icon-Earth.svg");
      });

      test("should render corect icon for gitHub", () => {
        const { IconComponent } = setup({
          iconName: "gitHub"
        });

        expect(IconComponent.textContent).toEqual("Icon-GitHub.svg");
      });

      test("should render correct icon for graphql", () => {
        const { IconComponent } = setup({
          iconName: "graphql"
        });

        expect(IconComponent.textContent).toEqual("Icon-Graphql.svg");
      });

      test("should render corect icon for ie", () => {
        const { IconComponent } = setup({
          iconName: "ie"
        });

        expect(IconComponent.textContent).toEqual("Icon-IE.svg");
      });

      test("should render corect icon for javascript", () => {
        const { IconComponent } = setup({
          iconName: "javascript"
        });

        expect(IconComponent.textContent).toEqual("Icon-Javascript.svg");
      });

      test("should render correct icon for linkedIn", () => {
        const { IconComponent } = setup({
          iconName: "linkedIn"
        });

        expect(IconComponent.textContent).toEqual("Icon-LinkedIn.svg");
      });

      test("should render correct icon for logo", () => {
        const { IconComponent } = setup({
          iconName: "logo"
        });

        expect(IconComponent.textContent).toEqual("Icon-Logo.svg");
      });

      test("should render correct icon for node", () => {
        const { IconComponent } = setup({
          iconName: "node"
        });

        expect(IconComponent.textContent).toEqual("Icon-Node.svg");
      });


      test("should render corect icon for opera", () => {
        const { IconComponent } = setup({
          iconName: "opera"
        });

        expect(IconComponent.textContent).toEqual("Icon-Opera.svg");
      });

      test("should render corect icon for react", () => {
        const { IconComponent } = setup({
          iconName: "react"
        });

        expect(IconComponent.textContent).toEqual("Icon-React.svg");
      });

      test("should render correct icon for reactLogo", () => {
        const { IconComponent } = setup({
          iconName: "reactLogo"
        });

        expect(IconComponent.textContent).toEqual("Icon-ReactLogo.svg");
      });

      test("should render corect icon for safari", () => {
        const { IconComponent } = setup({
          iconName: "safari"
        });

        expect(IconComponent.textContent).toEqual("Icon-Safari.svg");
      });

      test("should render corect icon for typescript", () => {
        const { IconComponent } = setup({
          iconName: "typescript"
        });

        expect(IconComponent.textContent).toEqual("Icon-Typescript.svg");
      });

      test("should render corect icon for unknown", () => {
        const { IconComponent } = setup({
          iconName: "unknown"
        });

        expect(IconComponent.textContent).toEqual("Icon-Unknown.svg");
      });

      test("should render corect icon for webpack", () => {
        const { IconComponent } = setup({
          iconName: "webpack"
        });

        expect(IconComponent.textContent).toEqual("Icon-Webpack.svg");
      });
    });
  });
});

interface Setup extends RenderResult {
  IconComponent: Element;
  IconContainer: Element;
}

type IconTestProps = Partial<IconProps>;

function setup(additionalProps?: IconTestProps): Setup {
  const props: IconProps = {
    iconName: "codeSandbox",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <Icon {...props} />
  );

  const { queryByTestId }: RenderResult = utils;

  const IconContainer: Element = queryByTestId("IconContainer");
  const IconComponent: Element = document.querySelector("svg");

  return {
    ...utils,
    IconComponent,
    IconContainer
  };
}
