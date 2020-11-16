import React from "react";
import { RenderResult } from "@testing-library/react";

import Icon from "UI/atoms/Icon";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { IconProps } from "UI/atoms/__typings__/Icon";

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

      describe("mask", () => {
        describe("fill", () => {
          describe("when isActive is true", () => {
            test("should have #78b0b5", () => {
              const { IconContainer } = setup({
                isActive: true
              });

              expect(IconContainer).toHaveStyleRule("fill", "#78b0b5", {
                modifier: "svg mask"
              });
            });
          });

          test("should not have fill when isActive is false", () => {
            const { IconContainer } = setup({
              isActive: false
            });

            expect(IconContainer).not.toHaveStyleRule("fill", {
              modifier: "svg mask"
            });
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

              expect(IconContainer).toHaveStyleRule(
                "animation-delay",
                "150ms",
                {
                  modifier: "svg"
                }
              );
            });
          });

          describe("animation-duration", () => {
            test("should have 900ms by default", () => {
              const { IconContainer } = setup({
                shouldDisplayGlowAnimation: true
              });

              expect(IconContainer).toHaveStyleRule(
                "animation-duration",
                "900ms",
                {
                  modifier: "svg"
                }
              );
            });

            test("should have 300ms when passed via animationTime prop", () => {
              const { IconContainer } = setup({
                animationTime: "default",
                shouldDisplayGlowAnimation: true
              });

              expect(IconContainer).toHaveStyleRule(
                "animation-duration",
                "300ms",
                {
                  modifier: "svg"
                }
              );
            });
          });

          describe("animation-iteration-count", () => {
            test("should have infinite", () => {
              const { IconContainer } = setup({
                shouldDisplayGlowAnimation: true
              });

              expect(IconContainer).toHaveStyleRule(
                "animation-iteration-count",
                "infinite",
                {
                  modifier: "svg"
                }
              );
            });
          });

          describe("animation-timing-function", () => {
            test("should have ease-in-out", () => {
              const { IconContainer } = setup({
                shouldDisplayGlowAnimation: true
              });

              expect(IconContainer).toHaveStyleRule(
                "animation-timing-function",
                "ease-in-out",
                {
                  modifier: "svg"
                }
              );
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
            expect(IconContainer).not.toHaveStyleRule(
              "animation-iteration-count",
              {
                modifier: "svg"
              }
            );
          });

          test("animation-timing-function", () => {
            expect(IconContainer).not.toHaveStyleRule(
              "animation-timing-function",
              {
                modifier: "svg"
              }
            );
          });
        });
      });

      describe("filter", () => {
        test("should have drop-shadow(0px 0px .4rem rgba(255,255,255,0.5)) - shouldGlow: true", () => {
          const { IconContainer } = setup({
            shouldGlow: true
          });

          expect(IconContainer).toHaveStyleRule(
            "filter",
            "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))",
            {
              modifier: "svg"
            }
          );
        });

        test("should not have filter - shouldGlow: false ", () => {
          const { IconContainer } = setup({
            shouldGlow: false
          });

          expect(IconContainer).not.toHaveStyleRule(
            "filter",
            "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))",
            {
              modifier: "svg"
            }
          );
        });
      });

      describe("transition", () => {
        describe("when shouldGlowOnHover is true", () => {
          test("should have all 900ms ease-in-out 0ms", () => {
            const { IconContainer } = setup({
              shouldGlowOnHover: true
            });

            expect(IconContainer).toHaveStyleRule(
              "transition",
              "all 900ms ease-in-out 0ms",
              {
                modifier: "svg"
              }
            );
          });

          test("should have all 150ms ease-in-out 0ms when animationTime: fast", () => {
            const { IconContainer } = setup({
              animationTime: "fast",
              shouldGlowOnHover: true
            });

            expect(IconContainer).toHaveStyleRule(
              "transition",
              "all 150ms ease-in-out 0ms",
              {
                modifier: "svg"
              }
            );
          });

          test("should have all 900ms ease-in-out 150ms when animationDelay: 150ms", () => {
            const { IconContainer } = setup({
              animationDelay: "150ms",
              shouldGlowOnHover: true
            });

            expect(IconContainer).toHaveStyleRule(
              "transition",
              "all 900ms ease-in-out 150ms",
              {
                modifier: "svg"
              }
            );
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

            expect(IconContainer).toHaveStyleRule(
              "filter",
              "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))",
              {
                modifier: "svg:hover"
              }
            );
          });

          test("should not have filter - shouldGlowOnHover: false ", () => {
            const { IconContainer } = setup({
              shouldGlowOnHover: false
            });

            expect(IconContainer).not.toHaveStyleRule(
              "filter",
              "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))",
              {
                modifier: "svg:hover"
              }
            );
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

      test("should render correct icon for brandAfterEffects", () => {
        const { IconImage } = setup({
          iconName: "brandAfterEffects"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandAfterEffects.svg"
        );
      });

      test("should render correct icon for brandAirbnb", () => {
        const { IconImage } = setup({
          iconName: "brandAirbnb"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandAirbnb.svg"
        );
      });

      test("should render correct icon for brandApollo", () => {
        const { IconImage } = setup({
          iconName: "brandApollo"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandApollo.svg"
        );
      });

      test("should render correct icon for brandBamboo", () => {
        const { IconImage } = setup({
          iconName: "brandBamboo"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandBamboo.svg"
        );
      });

      test("should render correct icon for brandBasecamp", () => {
        const { IconImage } = setup({
          iconName: "brandBasecamp"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandBasecamp.svg"
        );
      });

      test("should render correct icon for brandBuildkite", () => {
        const { IconImage } = setup({
          iconName: "brandBuildkite"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandBuildkite.svg"
        );
      });

      test("should render correct icon for brandCSS", () => {
        const { IconImage } = setup({
          iconName: "brandCSS"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandCSS.svg"
        );
      });

      test("should render correct icon for brandCSSModules", () => {
        const { IconImage } = setup({
          iconName: "brandCSSModules"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandCSSModules.svg"
        );
      });

      test("should render correct icon for brandCoffeeScript", () => {
        const { IconImage } = setup({
          iconName: "brandCoffeeScript"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandCoffeeScript.svg"
        );
      });

      test("should render correct icon for brandCorel", () => {
        const { IconImage } = setup({
          iconName: "brandCorel"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandCorel.svg"
        );
      });

      test("should render correct icon for brandCypress", () => {
        const { IconImage } = setup({
          iconName: "brandCypress"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandCypress.svg"
        );
      });

      test("should render correct icon for brandDocker", () => {
        const { IconImage } = setup({
          iconName: "brandDocker"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandDocker.svg"
        );
      });

      test("should render correct icon for brandDocpad", () => {
        const { IconImage } = setup({
          iconName: "brandDocpad"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandDocpad.svg"
        );
      });

      test("should render correct icon for brandEmber", () => {
        const { IconImage } = setup({
          iconName: "brandEmber"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandEmber.svg"
        );
      });

      test("should render correct icon for brandExpress", () => {
        const { IconImage } = setup({
          iconName: "brandExpress"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandExpress.svg"
        );
      });

      test("should render correct icon for brandFigma", () => {
        const { IconImage } = setup({
          iconName: "brandFigma"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandFigma.svg"
        );
      });

      test("should render correct icon for brandGallery", () => {
        const { IconImage } = setup({
          iconName: "brandGallery"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandGallery.svg"
        );
      });

      test("should render correct icon for brandGithub", () => {
        const { IconImage } = setup({
          iconName: "brandGithub"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandGithub.svg"
        );
      });

      test("should render correct icon for brandGitlab", () => {
        const { IconImage } = setup({
          iconName: "brandGitlab"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandGitlab.svg"
        );
      });

      test("should render correct icon for brandGraphQL", () => {
        const { IconImage } = setup({
          iconName: "brandGraphQL"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandGraphQL.svg"
        );
      });

      test("should render correct icon for brandGrunt", () => {
        const { IconImage } = setup({
          iconName: "brandGrunt"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandGrunt.svg"
        );
      });

      test("should render correct icon for brandGulp", () => {
        const { IconImage } = setup({
          iconName: "brandGulp"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandGulp.svg"
        );
      });

      test("should render correct icon for brandHTML", () => {
        const { IconImage } = setup({
          iconName: "brandHTML"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandHTML.svg"
        );
      });

      test("should render correct icon for brandJEST", () => {
        const { IconImage } = setup({
          iconName: "brandJEST"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandJEST.svg"
        );
      });

      test("should render correct icon for brandJIRA", () => {
        const { IconImage } = setup({
          iconName: "brandJIRA"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandJIRA.svg"
        );
      });

      test("should render correct icon for brandJQuery", () => {
        const { IconImage } = setup({
          iconName: "brandJQuery"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandJQuery.svg"
        );
      });

      test("should render correct icon for brandJS", () => {
        const { IconImage } = setup({
          iconName: "brandJS"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandJS.svg"
        );
      });

      test("should render correct icon for brandJenkins", () => {
        const { IconImage } = setup({
          iconName: "brandJenkins"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandJenkins.svg"
        );
      });

      test("should render correct icon for brandLESS", () => {
        const { IconImage } = setup({
          iconName: "brandLESS"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandLESS.svg"
        );
      });

      test("should render correct icon for brandNode", () => {
        const { IconImage } = setup({
          iconName: "brandNode"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandNode.svg"
        );
      });

      test("should render correct icon for brandPhabricator", () => {
        const { IconImage } = setup({
          iconName: "brandPhabricator"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandPhabricator.svg"
        );
      });

      test("should render correct icon for brandPhotoshop", () => {
        const { IconImage } = setup({
          iconName: "brandPhotoshop"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandPhotoshop.svg"
        );
      });

      test("should render correct icon for brandPrestaShop", () => {
        const { IconImage } = setup({
          iconName: "brandPrestaShop"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandPrestaShop.svg"
        );
      });

      test("should render correct icon for brandQuire", () => {
        const { IconImage } = setup({
          iconName: "brandQuire"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandQuire.svg"
        );
      });

      test("should render correct icon for brandQunit", () => {
        const { IconImage } = setup({
          iconName: "brandQunit"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandQunit.svg"
        );
      });

      test("should render correct icon for brandREST", () => {
        const { IconImage } = setup({
          iconName: "brandREST"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandREST.svg"
        );
      });

      test("should render correct icon for brandRails", () => {
        const { IconImage } = setup({
          iconName: "brandRails"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandRails.svg"
        );
      });

      test("should render correct icon for brandReact", () => {
        const { IconImage } = setup({
          iconName: "brandReact"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandReact.svg"
        );
      });

      test("should render correct icon for brandRedmine", () => {
        const { IconImage } = setup({
          iconName: "brandRedmine"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandRedmine.svg"
        );
      });

      test("should render correct icon for brandRedux", () => {
        const { IconImage } = setup({
          iconName: "brandRedux"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandRedux.svg"
        );
      });

      test("should render correct icon for brandRuby", () => {
        const { IconImage } = setup({
          iconName: "brandRuby"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandRuby.svg"
        );
      });

      test("should render correct icon for brandSass", () => {
        const { IconImage } = setup({
          iconName: "brandSass"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandSass.svg"
        );
      });

      test("should render correct icon for brandSinatra", () => {
        const { IconImage } = setup({
          iconName: "brandSinatra"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandSinatra.svg"
        );
      });

      test("should render correct icon for brandSketch", () => {
        const { IconImage } = setup({
          iconName: "brandSketch"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandSketch.svg"
        );
      });

      test("should render correct icon for brandStash", () => {
        const { IconImage } = setup({
          iconName: "brandStash"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandStash.svg"
        );
      });

      test("should render correct icon for brandStyledComponents", () => {
        const { IconImage } = setup({
          iconName: "brandStyledComponents"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandStyledComponents.svg"
        );
      });

      test("should render correct icon for brandTS", () => {
        const { IconImage } = setup({
          iconName: "brandTS"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandTS.svg"
        );
      });

      test("should render correct icon for brandTaskade", () => {
        const { IconImage } = setup({
          iconName: "brandTaskade"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandTaskade.svg"
        );
      });

      test("should render correct icon for brandTestingLibrary", () => {
        const { IconImage } = setup({
          iconName: "brandTestingLibrary"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandTestingLibrary.svg"
        );
      });

      test("should render correct icon for brandTrello", () => {
        const { IconImage } = setup({
          iconName: "brandTrello"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandTrello.svg"
        );
      });

      test("should render correct icon for brandWebpack", () => {
        const { IconImage } = setup({
          iconName: "brandWebpack"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandWebpack.svg"
        );
      });

      test("should render correct icon for brandWebsocket", () => {
        const { IconImage } = setup({
          iconName: "brandWebsocket"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandWebsocket.svg"
        );
      });

      test("should render correct icon for brandZeplin", () => {
        const { IconImage } = setup({
          iconName: "brandZeplin"
        });

        expect(IconImage.getAttribute("src")).toEqual(
          "/images/svg/brandZeplin.svg"
        );
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

      test("should render correct icon for calendar", () => {
        const { IconComponent } = setup({
          iconName: "calendar"
        });

        expect(IconComponent.textContent).toEqual("Icon-Calendar.svg");
      });

      test("should render correct icon for chrome", () => {
        const { IconComponent } = setup({
          iconName: "chrome"
        });

        expect(IconComponent.textContent).toEqual("Icon-Chrome.svg");
      });

      test("should render correct icon for codeSandbox", () => {
        const { IconComponent } = setup({
          iconName: "codeSandbox"
        });

        expect(IconComponent.textContent).toEqual("Icon-CodeSandbox.svg");
      });

      test("should render correct icon for companyDIH", () => {
        const { IconComponent } = setup({
          iconName: "companyDIH"
        });

        expect(IconComponent.textContent).toEqual("Company-DiH.svg");
      });

      test("should render correct icon for companyOmise", () => {
        const { IconComponent } = setup({
          iconName: "companyOmise"
        });

        expect(IconComponent.textContent).toEqual("Company-Omise.svg");
      });

      test("should render correct icon for companySAP", () => {
        const { IconComponent } = setup({
          iconName: "companySAP"
        });

        expect(IconComponent.textContent).toEqual("Company-SAP.svg");
      });

      test("should render correct icon for companyShiji", () => {
        const { IconComponent } = setup({
          iconName: "companyShiji"
        });

        expect(IconComponent.textContent).toEqual("Company-Shiji.svg");
      });

      test("should render correct icon for earth", () => {
        const { IconComponent } = setup({
          iconName: "earth"
        });

        expect(IconComponent.textContent).toEqual("Icon-Earth.svg");
      });

      test("should render correct icon for firefox", () => {
        const { IconComponent } = setup({
          iconName: "firefox"
        });

        expect(IconComponent.textContent).toEqual("Icon-Firefox.svg");
      });

      test("should render correct icon for gitHub", () => {
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

      test("should render correct icon for hexagon", () => {
        const { IconComponent } = setup({
          iconName: "hexagon"
        });

        expect(IconComponent.textContent).toEqual("Hexagon.svg");
      });

      test("should render correct icon for hexagonWithPattern", () => {
        const { IconComponent } = setup({
          iconName: "hexagonWithPattern"
        });

        expect(IconComponent.textContent).toEqual("Hexagon-With-Pattern.svg");
      });

      test("should render correct icon for ie", () => {
        const { IconComponent } = setup({
          iconName: "ie"
        });

        expect(IconComponent.textContent).toEqual("Icon-IE.svg");
      });

      test("should render correct icon for javascript", () => {
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

      test("should render correct icon for logoShortcut", () => {
        const { IconComponent } = setup({
          iconName: "logoShortcut"
        });

        expect(IconComponent.textContent).toEqual("Icon-Logo-Shortcut.svg");
      });

      test("should render correct icon for node", () => {
        const { IconComponent } = setup({
          iconName: "node"
        });

        expect(IconComponent.textContent).toEqual("Icon-Node.svg");
      });

      test("should render correct icon for opera", () => {
        const { IconComponent } = setup({
          iconName: "opera"
        });

        expect(IconComponent.textContent).toEqual("Icon-Opera.svg");
      });

      test("should render correct icon for react", () => {
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

      test("should render correct icon for safari", () => {
        const { IconComponent } = setup({
          iconName: "safari"
        });

        expect(IconComponent.textContent).toEqual("Icon-Safari.svg");
      });

      test("should render correct icon for typescript", () => {
        const { IconComponent } = setup({
          iconName: "typescript"
        });

        expect(IconComponent.textContent).toEqual("Icon-Typescript.svg");
      });

      test("should render correct icon for unknown", () => {
        const { IconComponent } = setup({
          iconName: "unknown"
        });

        expect(IconComponent.textContent).toEqual("Icon-Unknown.svg");
      });

      test("should render correct icon for webpack", () => {
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
  IconImage: Element;
}

type IconTestProps = Partial<IconProps>;

function setup(additionalProps?: IconTestProps): Setup {
  const props: IconProps = {
    iconName: "codeSandbox",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<Icon {...props} />);

  const { queryByTestId }: RenderResult = utils;

  const IconContainer: Element = queryByTestId("IconContainer");
  const IconComponent: Element = document.querySelector("svg");
  const IconImage: Element = queryByTestId("IconImage");

  return {
    ...utils,
    IconComponent,
    IconContainer,
    IconImage
  };
}
