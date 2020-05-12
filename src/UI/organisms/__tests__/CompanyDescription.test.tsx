import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanyDescription from "<organisms>/CompanyDescription";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  CompanyDescriptionProps
} from "<organisms>/__typings__/CompanyDescription.d.ts";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("organisms / CompanyDescription", () => {
  test("should have correct structure", () => {
    const {
      DateIconWithLabel,
      DateSpacingContainer,
      CompanyDescriptionContainer,
      IconsWithLabels,
      IconsWithLabelsSpacingContainer,
      MainTitle,
      ResponsibilitiesListSpacingContainer,
      ResponsibilitiesSpacingContainer,
      ResponsibilitiesTitle,
      TechStackSpacingContainer,
      TechStackTitle,
      UnorderedList
    } = setup();

    expect(CompanyDescriptionContainer.children[0]).toEqual(MainTitle);
    expect(CompanyDescriptionContainer.children[1]).toEqual(DateSpacingContainer);
    expect(CompanyDescriptionContainer.children[2]).toEqual(TechStackSpacingContainer);
    expect(CompanyDescriptionContainer.children[3]).toEqual(ResponsibilitiesSpacingContainer);

    expect(DateSpacingContainer.children[0]).toEqual(DateIconWithLabel);

    expect(TechStackSpacingContainer.children[0]).toEqual(TechStackTitle);
    expect(TechStackSpacingContainer.children[1]).toEqual(IconsWithLabelsSpacingContainer);
    expect(IconsWithLabelsSpacingContainer.children[0]).toEqual(IconsWithLabels);

    expect(ResponsibilitiesSpacingContainer.children[0]).toEqual(ResponsibilitiesTitle);
    expect(ResponsibilitiesSpacingContainer.children[1]).toEqual(ResponsibilitiesListSpacingContainer);
    expect(ResponsibilitiesListSpacingContainer.children[0]).toEqual(UnorderedList);
  });

  describe("Titles", () => { 
    describe("MainTitle", () => {
      test("should render textContent equal to title prop", () => {
        const { MainTitle } = setup({
          title: "Self employed"
        });
  
        expect(MainTitle.textContent).toEqual("Self employed");
      });

      describe("Props", () => {
        let MainTitle: Element;

        beforeEach(() => {
          MainTitle = setup().MainTitle;
        });

        describe("color", () => {
          test("should have #fff", () => {
            expect(MainTitle).toHaveStyleRule("color", "#fff");
          });
        });
  
        describe("fontFamily", () => {
          test("should have ExanModifiedRegular, monospace", () => {
            expect(MainTitle).toHaveStyleRule("font-family", "ExanModifiedRegular,monospace");
          });
        });
  
        describe("fontSize", () => {
          test("should have 36px", () => {
            expect(MainTitle).toHaveStyleRule("font-size", "36px");
          });
        });

        describe("lineHeight", () => {
          test("should have 3.6rem", () => {
            expect(MainTitle).toHaveStyleRule("line-height", "3.6rem");
          });
        });

        describe("textTransform", () => {
          test("should have uppercase", () => {
            expect(MainTitle).toHaveStyleRule("text-transform", "uppercase");
          });
        });
      });
    });

    describe("TechStackTitle", () => {
      test("should render textContent - Tech stack", () => {
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
            expect(TechStackTitle).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
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
      test("should render textContent - Responsibilites", () => {
        const { ResponsibilitiesTitle } = setup();
  
        expect(ResponsibilitiesTitle.textContent).toEqual("Responsibilites");
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
            expect(ResponsibilitiesTitle).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
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
            expect(ResponsibilitiesTitle).toHaveStyleRule("line-height", "3.2rem");
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

          expect(DateIconWithLabel.children[1]).toHaveStyleRule("color", "#78b0b5");
        });
      });

      describe("iconName", () => {
        test("should render calendar", () => {
          const { DateIconWithLabel } = setup();

          expect(DateIconWithLabel.children[0].children[0].textContent).toEqual("Icon-Calendar.svg");
        });
      });

      describe("label", () => {
        test("should render label equal to date prop", () => {
          const { DateIconWithLabel } = setup({
            date: "July 2016 to present"
          });

          expect(DateIconWithLabel.children[1].textContent).toEqual("July 2016 to present");
        });
      });

      describe("size - medium", () => {
        let DateIconWithLabel: Element;

        beforeEach(() => {
          DateIconWithLabel = setup().DateIconWithLabel;
        });

        describe("SpacingContainer - paddingRight", () => {
          test("should have 1.2rem", () => {
            expect(DateIconWithLabel.children[0]).toHaveStyleRule("padding-right", "1.2rem");
          });
        });

        describe("Icon - height", () => {
          test("should have 3.2rem", () => {
            expect(DateIconWithLabel.children[0].children[0]).toHaveStyleRule("height", "3.2rem");
          });
        });

        describe("Text - fontSize", () => {
          test("should have 20px", () => {
            expect(DateIconWithLabel.children[1]).toHaveStyleRule("font-size", "20px");
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

    test("icons should render correct SVGs passed via iconsWithLabels.iconName props", () => {
      const { Icons } = setup({
        iconsWithLabels
      });

      expect(Icons[1].textContent).toEqual("Brand-Webpack.svg");
      expect(Icons[2].textContent).toEqual("Icon-Node.svg");
    });

    test("should have correct content passed via iconsWithLabels.label props", () => {
      const { IconsWithLabels } = setup({
        iconsWithLabels
      });

      expect(IconsWithLabels.children[0].children[1].textContent).toEqual("Webpack");
      expect(IconsWithLabels.children[1].children[1].textContent).toEqual("Node");
    });

    // describe("Props", () => {
    //   describe("size - large", () => {
    //     describe("FlexContainer - gap", () => {    
    //       test("should have 2.8rem to all children except the first one", () => {
    //         const { IconsWithLabels } = setup();
            
    //         expect(IconsWithLabels).toHaveStyleRule("padding-left", "2.8rem", {
    //           modifier: "& > *"
    //         });
    //         expect(IconsWithLabels).toHaveStyleRule("padding-left", "0", {
    //           modifier: "& > *:first-child"
    //         });
    //       });
    //     });

    //     describe("IconContainer - height", () => {
    //       test("should have 4rem", () => {
    //         const { IconContainers } = setup();
    
    //         expect(IconContainers[0]).toHaveStyleRule("height", "4rem");
    //         expect(IconContainers[1]).toHaveStyleRule("height", "4rem");
    //       });
    //     });

    //     describe("IconWithLabelSpacingContainer - paddingRight", () => {
    //       test("should have 1.2rem", () => {
    //         const { IconWithLabelSpacingContainers } = setup();
    
    //         expect(IconWithLabelSpacingContainers[0]).toHaveStyleRule("padding-right", "1.2rem");
    //         expect(IconWithLabelSpacingContainers[1]).toHaveStyleRule("padding-right", "1.2rem");
    //       });
    //     });

    //     describe("LabelTexts - fontSize", () => {  
    //       test("should have 24px", () => {
    //         const { LabelTexts } = setup();
  
    //         expect(LabelTexts[0]).toHaveStyleRule("font-size", "24px");
    //         expect(LabelTexts[1]).toHaveStyleRule("font-size", "24px");
    //       });
    //     });
    //   });

    //   describe("position - horizontal", () => {
    //     describe("FlexContainer - flexFlow", () => {      
    //       test("should have row nowrap", () => {
    //         const { IconsWithLabels } = setup();
  
    //         expect(IconsWithLabels).toHaveStyleRule("flex-flow", "row nowrap");
    //       });
    //     });
    //   });
    // });
  });

  describe.skip("SpacingContainers", () => { 
    describe("TitleWithDescriptionSpacingContainer", () => { 
      describe("Props", () => {
        describe("marginBottom", () => {      
          test("should have 4rem", () => {
            const { TitleWithDescriptionSpacingContainer } = setup();

            expect(TitleWithDescriptionSpacingContainer).toHaveStyleRule("margin-bottom", "4rem");
          });
        });

        describe("marginTop", () => {      
          test("should have 1.6rem", () => {
            const { TitleWithDescriptionSpacingContainer } = setup();

            expect(TitleWithDescriptionSpacingContainer).toHaveStyleRule("margin-top", "1.6rem");
          });
        });
      });
    });

    describe("UsedTechnologiesSpacingContainer", () => { 
      describe("Props", () => {
        describe("marginBottom", () => {      
          test("should have 4rem", () => {
            const { UsedTechnologiesSpacingContainer } = setup();

            expect(UsedTechnologiesSpacingContainer).toHaveStyleRule("margin-bottom", "4rem");
          });
        });
      });
    });

    describe("IconsWithLabelsSpacingContainer", () => { 
      describe("Props", () => {
        describe("marginTop", () => {      
          test("should have .8rem", () => {
            const { IconsWithLabelsSpacingContainer } = setup();

            expect(IconsWithLabelsSpacingContainer).toHaveStyleRule("margin-top", ".8rem");
          });
        });
      });
    });

    describe("ButtonsSpacingContainer", () => { 
      describe("Props", () => {
        describe("marginTop", () => {      
          test("should have 1.6rem", () => {
            const { ButtonsSpacingContainer } = setup();

            expect(ButtonsSpacingContainer).toHaveStyleRule("margin-top", "1.6rem");
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
  IconsWithLabelsSpacingContainer: Element;
  MainTitle: Element;
  ResponsibilitiesListSpacingContainer: Element;
  ResponsibilitiesSpacingContainer: Element;
  ResponsibilitiesTitle: Element;
  TechStackSpacingContainer: Element;
  TechStackTitle: Element;
  UnorderedList: Element;
}

type CompanyDescriptionTestProps = Partial<CompanyDescriptionProps>;

function setup(addedProps?: CompanyDescriptionTestProps): Setup {
  const responsibilites: CompanyDescriptionProps["responsibilites"] = [
    "Create> scalable and sane front-end architecture", 
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
    responsibilites,
    title: "Front end developer",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <CompanyDescription {...props} />
  );

  const { queryAllByTestId } = utils || {};
  
  const DateIconWithLabel: Element = queryAllByTestId("IconWithLabel")[0];
  const DateSpacingContainer: Element = queryAllByTestId("DateSpacingContainer")[0];
  const CompanyDescriptionContainer: Element = queryAllByTestId("CompanyDescription")[0];
  const Icons: Element[] = queryAllByTestId("IconContainer");
  const IconsWithLabels: Element = queryAllByTestId("IconsWithLabels")[0];
  const IconsWithLabelsSpacingContainer: Element = queryAllByTestId("IconsWithLabelsSpacingContainer")[0];
  const MainTitle: Element = queryAllByTestId("MainTitle")[0];
  const ResponsibilitiesListSpacingContainer: Element = queryAllByTestId("ResponsibilitiesListSpacingContainer")[0];
  const ResponsibilitiesSpacingContainer: Element = queryAllByTestId("ResponsibilitiesSpacingContainer")[0];
  const ResponsibilitiesTitle: Element = queryAllByTestId("ResponsibilitiesTitle")[0];
  const TechStackSpacingContainer: Element = queryAllByTestId("TechStackSpacingContainer")[0];
  const TechStackTitle: Element = queryAllByTestId("TechStackTitle")[0];
  const UnorderedList: Element = queryAllByTestId("UnorderedList")[0];

  return {
    ...utils,
    DateIconWithLabel,
    DateSpacingContainer,
    CompanyDescriptionContainer,
    Icons,
    IconsWithLabels,
    IconsWithLabelsSpacingContainer,
    MainTitle,
    ResponsibilitiesListSpacingContainer,
    ResponsibilitiesSpacingContainer,
    ResponsibilitiesTitle,
    TechStackSpacingContainer,
    TechStackTitle,
    UnorderedList
  };
}
 