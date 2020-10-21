import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanyDescription from "<organisms>/CompanyDescription";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { CompanyDescriptionProps } from "<organisms>/__typings__/CompanyDescription.d.ts";

import { IconWithLabelProps } from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("organisms / CompanyDescription", () => {
  test("should have correct structure", () => {
    const {
      CompanyDescriptionContainer,
      DateIconWithLabel,
      DateSpacingContainer,
      IconsWithLabels,
      MainTitle,
      ResponsibilitiesListSpacingContainer,
      ResponsibilitiesSpacingContainer,
      ResponsibilitiesTitle,
      TechStackIconsWithLabelsSpacingContainer,
      TechStackSpacingContainer,
      TechStackTitle,
      UnorderedList
    } = setup();

    expect(CompanyDescriptionContainer.children[0]).toEqual(MainTitle);
    expect(CompanyDescriptionContainer.children[1]).toEqual(
      DateSpacingContainer
    );
    expect(CompanyDescriptionContainer.children[2]).toEqual(
      TechStackSpacingContainer
    );
    expect(CompanyDescriptionContainer.children[3]).toEqual(
      ResponsibilitiesSpacingContainer
    );

    expect(DateSpacingContainer.children[0]).toEqual(DateIconWithLabel);

    expect(TechStackSpacingContainer.children[0]).toEqual(TechStackTitle);
    expect(TechStackSpacingContainer.children[1]).toEqual(
      TechStackIconsWithLabelsSpacingContainer
    );
    expect(TechStackIconsWithLabelsSpacingContainer.children[0]).toEqual(
      IconsWithLabels
    );

    expect(ResponsibilitiesSpacingContainer.children[0]).toEqual(
      ResponsibilitiesTitle
    );
    expect(ResponsibilitiesSpacingContainer.children[1]).toEqual(
      ResponsibilitiesListSpacingContainer
    );
    expect(ResponsibilitiesListSpacingContainer.children[0]).toEqual(
      UnorderedList
    );
  });

  describe("Titles", () => {
    describe("MainTitle", () => {
      test("should render correct content passed via title prop", () => {
        const { MainTitle } = setup({
          title: "Self employed"
        });

        expect(MainTitle.textContent).toEqual("Self employed");
      });

      describe("Props", () => {
        describe("color", () => {
          test("should have #fff", () => {
            const { MainTitle } = setup();

            expect(MainTitle).toHaveStyleRule("color", "#fff");
          });
        });

        describe("fontFamily", () => {
          test("should have ExanModifiedRegular, monospace", () => {
            const { MainTitle } = setup();

            expect(MainTitle).toHaveStyleRule(
              "font-family",
              "ExanModifiedRegular,monospace"
            );
          });
        });

        describe("fontSize", () => {
          test("should have 36px", () => {
            const { MainTitle } = setup();

            expect(MainTitle).toHaveStyleRule("font-size", "36px");
          });
        });

        describe("lineHeight", () => {
          test("should have 4.8rem", () => {
            const { MainTitle } = setup();

            expect(MainTitle).toHaveStyleRule("line-height", "4.8rem");
          });
        });

        describe("textAlign", () => {
          test("should have left by default", () => {
            const { MainTitle } = setup();

            expect(MainTitle).toHaveStyleRule("text-align", "left");
          });

          test("should have center when textAlign prop is center", () => {
            const { MainTitle } = setup({
              textAlign: "center"
            });

            expect(MainTitle).toHaveStyleRule("text-align", "center");
          });
        });

        describe("textTransform", () => {
          test("should have uppercase", () => {
            const { MainTitle } = setup();

            expect(MainTitle).toHaveStyleRule("text-transform", "uppercase");
          });
        });
      });
    });

    describe("TechStackTitle", () => {
      test("should render correct content - Tech stack", () => {
        const { TechStackTitle } = setup();

        expect(TechStackTitle.textContent).toEqual("Tech stack");
      });

      describe("Props", () => {
        let TechStackTitle: Element;

        beforeEach(() => {
          TechStackTitle = setup().TechStackTitle;
        });

        describe("color", () => {
          test("should have #bcd8db", () => {
            expect(TechStackTitle).toHaveStyleRule("color", "#bcd8db");
          });
        });

        describe("fontFamily", () => {
          test("should have 'Anonymous Pro',monospace", () => {
            expect(TechStackTitle).toHaveStyleRule(
              "font-family",
              "'Anonymous Pro',monospace"
            );
          });
        });

        describe("fontSize", () => {
          test("should have 24px", () => {
            expect(TechStackTitle).toHaveStyleRule("font-size", "24px");
          });
        });

        describe("fontWeight", () => {
          test("should have 700", () => {
            expect(TechStackTitle).toHaveStyleRule("font-weight", "700");
          });
        });

        describe("lineHeight", () => {
          test("should have 3.2rem", () => {
            expect(TechStackTitle).toHaveStyleRule("line-height", "3.2rem");
          });
        });
      });
    });

    describe("ResponsibilitiesTitle", () => {
      test("should render correct content - Responsibilities", () => {
        const { ResponsibilitiesTitle } = setup();

        expect(ResponsibilitiesTitle.textContent).toEqual("Responsibilities");
      });

      describe("Props", () => {
        let ResponsibilitiesTitle: Element;

        beforeEach(() => {
          ResponsibilitiesTitle = setup().ResponsibilitiesTitle;
        });

        describe("color", () => {
          test("should have #bcd8db", () => {
            expect(ResponsibilitiesTitle).toHaveStyleRule("color", "#bcd8db");
          });
        });

        describe("fontFamily", () => {
          test("should have 'Anonymous Pro',monospace", () => {
            expect(ResponsibilitiesTitle).toHaveStyleRule(
              "font-family",
              "'Anonymous Pro',monospace"
            );
          });
        });

        describe("fontSize", () => {
          test("should have 24px", () => {
            expect(ResponsibilitiesTitle).toHaveStyleRule("font-size", "24px");
          });
        });

        describe("fontWeight", () => {
          test("should have 700", () => {
            expect(ResponsibilitiesTitle).toHaveStyleRule("font-weight", "700");
          });
        });

        describe("lineHeight", () => {
          test("should have 3.2rem", () => {
            expect(ResponsibilitiesTitle).toHaveStyleRule(
              "line-height",
              "3.2rem"
            );
          });
        });
      });
    });
  });

  describe("DateIconWithLabel", () => {
    describe("Props", () => {
      describe("labelColor", () => {
        test("should have #78b0b5", () => {
          const { DateIconWithLabel } = setup();

          expect(DateIconWithLabel.children[1]).toHaveStyleRule(
            "color",
            "#78b0b5"
          );
        });
      });

      describe("iconName", () => {
        test("should render calendar", () => {
          const { DateIconWithLabel } = setup();

          expect(DateIconWithLabel.children[0].children[0].textContent).toEqual(
            "Icon-Calendar.svg"
          );
        });
      });

      describe("label", () => {
        test("should render correct label passed via date prop", () => {
          const { DateIconWithLabel } = setup({
            date: "July 2016 to present"
          });

          expect(DateIconWithLabel.children[1].textContent).toEqual(
            "July 2016 to present"
          );
        });
      });

      describe("size - medium", () => {
        let DateIconWithLabel: Element;

        beforeEach(() => {
          DateIconWithLabel = setup().DateIconWithLabel;
        });

        describe("SpacingContainer", () => {
          describe("paddingRight", () => {
            test("should have 1.2rem", () => {
              expect(DateIconWithLabel.children[0]).toHaveStyleRule(
                "padding-right",
                "1.2rem"
              );
            });
          });
        });

        describe("Icon", () => {
          describe("height", () => {
            test("should have 3.2rem", () => {
              expect(DateIconWithLabel.children[0].children[0]).toHaveStyleRule(
                "height",
                "3.2rem"
              );
            });
          });
        });

        describe("Text", () => {
          describe("fontSize", () => {
            test("should have 20px", () => {
              expect(DateIconWithLabel.children[1]).toHaveStyleRule(
                "font-size",
                "20px"
              );
            });
          });
        });
      });
    });
  });

  describe("IconsWithLabels", () => {
    const iconsWithLabels: IconWithLabelProps[] = [
      {
        iconName: "brandWebpack",
        label: "Webpack"
      },
      {
        iconName: "node",
        label: "Node"
      }
    ];

    test("there should be correct number of icons", () => {
      const { Icons } = setup({
        iconsWithLabels
      });

      expect(Icons.length).toEqual(3);
    });

    test("icons should render correct SVGs passed via iconsWithLabels.iconName prop", () => {
      const { Icons } = setup({
        iconsWithLabels
      });

      expect(Icons[1].textContent).toEqual("Brand-Webpack.svg");
      expect(Icons[2].textContent).toEqual("Icon-Node.svg");
    });

    test("should have correct content passed via iconsWithLabels.label prop", () => {
      const { IconsWithLabels } = setup({
        iconsWithLabels
      });

      expect(IconsWithLabels.children[0].children[1].textContent).toEqual(
        "Webpack"
      );
      expect(IconsWithLabels.children[1].children[1].textContent).toEqual(
        "Node"
      );
    });

    describe("Props", () => {
      describe("size - small", () => {
        describe("FlexContainer - gap", () => {
          test("should have margin-bottom: 1.6rem and margin-right: 1.6rem in all children", () => {
            const { IconsWithLabels } = setup();

            expect(IconsWithLabels).toHaveStyleRule("margin-bottom", "1.6rem", {
              modifier: "& > *"
            });
            expect(IconsWithLabels).toHaveStyleRule("margin-right", "1.6rem", {
              modifier: "& > *"
            });
          });
        });

        describe("IconContainer - height", () => {
          test("should have 2.8rem", () => {
            const { IconsWithLabels } = setup();

            expect(
              IconsWithLabels.children[0].children[0].children[0]
            ).toHaveStyleRule("height", "2.8rem");
            expect(
              IconsWithLabels.children[1].children[0].children[0]
            ).toHaveStyleRule("height", "2.8rem");
          });
        });

        describe("IconWithLabelSpacingContainer - paddingRight", () => {
          test("should have .8rem", () => {
            const { IconsWithLabels } = setup();

            expect(IconsWithLabels.children[0].children[0]).toHaveStyleRule(
              "padding-right",
              ".8rem"
            );
            expect(IconsWithLabels.children[0].children[0]).toHaveStyleRule(
              "padding-right",
              ".8rem"
            );
          });
        });

        describe("LabelTexts - fontSize", () => {
          test("should have 16px", () => {
            const { IconsWithLabels } = setup();

            expect(IconsWithLabels.children[0].children[1]).toHaveStyleRule(
              "font-size",
              "16px"
            );
            expect(IconsWithLabels.children[1].children[1]).toHaveStyleRule(
              "font-size",
              "16px"
            );
          });
        });
      });

      describe("position - horizontal", () => {
        describe("FlexContainer - flexFlow", () => {
          test("should have row nowrap", () => {
            const { IconsWithLabels } = setup();

            expect(IconsWithLabels).toHaveStyleRule("flex-flow", "row wrap");
          });
        });
      });
    });
  });

  describe("SpacingContainers", () => {
    describe("DateSpacingContainer", () => {
      describe("Props", () => {
        describe("marginBottom", () => {
          test("should have 3.2rem", () => {
            const { DateSpacingContainer } = setup();

            expect(DateSpacingContainer).toHaveStyleRule(
              "margin-bottom",
              "3.2rem"
            );
          });
        });

        describe("marginTop", () => {
          test("should have 3.2rem", () => {
            const { DateSpacingContainer } = setup();

            expect(DateSpacingContainer).toHaveStyleRule(
              "margin-top",
              "3.2rem"
            );
          });
        });
      });
    });

    describe("TechStackSpacingContainer", () => {
      describe("Props", () => {
        describe("marginBottom", () => {
          test("should have 1.6rem", () => {
            const { TechStackSpacingContainer } = setup();

            expect(TechStackSpacingContainer).toHaveStyleRule(
              "margin-bottom",
              "1.6rem"
            );
          });
        });
      });
    });

    describe("TechStackIconsWithLabelsSpacingContainer", () => {
      describe("Props", () => {
        describe("marginLeft", () => {
          test("should have 1.6rem", () => {
            const { TechStackIconsWithLabelsSpacingContainer } = setup();

            expect(TechStackIconsWithLabelsSpacingContainer).toHaveStyleRule(
              "margin-left",
              "1.6rem"
            );
          });
        });

        describe("marginTop", () => {
          test("should have 1.6rem", () => {
            const { TechStackIconsWithLabelsSpacingContainer } = setup();

            expect(TechStackIconsWithLabelsSpacingContainer).toHaveStyleRule(
              "margin-top",
              "1.6rem"
            );
          });
        });
      });
    });

    describe("ResponsibilitiesSpacingContainer", () => {
      describe("Props", () => {
        describe("paddingBottom", () => {
          test("should have 6.8rem by default", () => {
            const { ResponsibilitiesSpacingContainer } = setup();

            expect(ResponsibilitiesSpacingContainer).toHaveStyleRule(
              "padding-bottom",
              "6.8rem"
            );
          });

          test("should have correct value passed via responsibilitiesPaddingBottom props", () => {
            const { ResponsibilitiesSpacingContainer } = setup({
              responsibilitiesPaddingBottom: "spacing64"
            });

            expect(ResponsibilitiesSpacingContainer).toHaveStyleRule(
              "padding-bottom",
              "6.4rem"
            );
          });
        });
      });
    });

    describe("ResponsibilitiesListSpacingContainer", () => {
      describe("Props", () => {
        describe("marginLeft", () => {
          test("should have 1.6rem", () => {
            const { ResponsibilitiesListSpacingContainer } = setup();

            expect(ResponsibilitiesListSpacingContainer).toHaveStyleRule(
              "margin-left",
              "1.6rem"
            );
          });
        });

        describe("marginTop", () => {
          test("should have 1.6rem", () => {
            const { ResponsibilitiesListSpacingContainer } = setup();

            expect(ResponsibilitiesListSpacingContainer).toHaveStyleRule(
              "margin-top",
              "1.6rem"
            );
          });
        });
      });
    });
  });

  describe("UnorderedList", () => {
    describe("Props", () => {
      describe("items", () => {
        test("should render items based on responsibilities prop", () => {
          const responsibilities: CompanyDescriptionProps["responsibilities"] = [
            "Streamline project timelines to ensure application is being developed in React.js with JavaScript",
            "Develop API gateway in the form of Express / Node.js server, along with Apollo / GraphQL stack",
            "Author unit, integration and acceptance test"
          ];

          const { UnorderedList } = setup({
            responsibilities
          });

          expect(UnorderedList.childElementCount).toEqual(
            responsibilities.length
          );
          responsibilities.forEach((resposibility: string, index: number) => {
            expect(UnorderedList.children[index].textContent).toEqual(
              resposibility
            );
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  CompanyDescriptionContainer: Element;
  DateIconWithLabel: Element;
  DateSpacingContainer: Element;
  Icons: Element[];
  IconsWithLabels: Element;
  IconsWithLabelsSpacingContainers: Element[];
  MainTitle: Element;
  ResponsibilitiesListSpacingContainer: Element;
  ResponsibilitiesSpacingContainer: Element;
  ResponsibilitiesTitle: Element;
  TechStackIconsWithLabelsSpacingContainer: Element;
  TechStackSpacingContainer: Element;
  TechStackTitle: Element;
  UnorderedList: Element;
}

type CompanyDescriptionTestProps = Partial<CompanyDescriptionProps>;

function setup(additionalProps?: CompanyDescriptionTestProps): Setup {
  const responsibilities: CompanyDescriptionProps["responsibilities"] = [
    "Create scalable and sane front-end architecture",
    "Orchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage payment systems"
  ];

  const iconsWithLabels: CompanyDescriptionProps["iconsWithLabels"] = [
    {
      iconName: "brandJS",
      label: "Javascript"
    },
    {
      iconName: "brandReact",
      label: "React"
    }
  ];

  const props: CompanyDescriptionProps = {
    date: "August 2018 to present",
    iconsWithLabels,
    responsibilities,
    title: "Front end developer",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <CompanyDescription {...props} />
  );

  const { queryAllByTestId } = utils || {};

  const CompanyDescriptionContainer: Element = queryAllByTestId(
    "CompanyDescription"
  )[0];
  const DateIconWithLabel: Element = queryAllByTestId("IconWithLabel")[0];
  const DateSpacingContainer: Element = queryAllByTestId(
    "DateSpacingContainer"
  )[0];
  const Icons: Element[] = queryAllByTestId("IconContainer");
  const IconsWithLabels: Element = queryAllByTestId("IconsWithLabels")[0];
  const IconsWithLabelsSpacingContainers: Element[] = queryAllByTestId(
    "IconsWithLabelsSpacingContainer"
  );
  const MainTitle: Element = queryAllByTestId("MainTitle")[0];
  const ResponsibilitiesListSpacingContainer: Element = queryAllByTestId(
    "ResponsibilitiesListSpacingContainer"
  )[0];
  const ResponsibilitiesSpacingContainer: Element = queryAllByTestId(
    "ResponsibilitiesSpacingContainer"
  )[0];
  const ResponsibilitiesTitle: Element = queryAllByTestId(
    "ResponsibilitiesTitle"
  )[0];
  const TechStackSpacingContainer: Element = queryAllByTestId(
    "TechStackSpacingContainer"
  )[0];
  const TechStackIconsWithLabelsSpacingContainer: Element = queryAllByTestId(
    "TechStackIconsWithLabelsSpacingContainer"
  )[0];
  const TechStackTitle: Element = queryAllByTestId("TechStackTitle")[0];
  const UnorderedList: Element = queryAllByTestId("UnorderedList")[0];

  return {
    ...utils,
    CompanyDescriptionContainer,
    DateIconWithLabel,
    DateSpacingContainer,
    Icons,
    IconsWithLabels,
    IconsWithLabelsSpacingContainers,
    MainTitle,
    ResponsibilitiesListSpacingContainer,
    ResponsibilitiesSpacingContainer,
    ResponsibilitiesTitle,
    TechStackIconsWithLabelsSpacingContainer,
    TechStackSpacingContainer,
    TechStackTitle,
    UnorderedList
  };
}
