import { RenderResult } from "@testing-library/react";

import CompanyOmise from "pages/Home/sections/experience/companies/CompanyOmise";

import renderWithTheme from "helpers/tests/renderWithTheme";

jest.mock("helpers/browser/isSafari", () => jest.fn());
jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("pages / Home / sections / experience / companies / CompanyOmise", () => {
  describe("Props", () => {
    describe("date", () => {
      test("should render August 2018 to March 2021", () => {
        const { CompanyDescriptions } = setup();

        CompanyDescriptions.forEach((CompanyDescription: Element) => {
          expect(
            CompanyDescription.children[1].children[0].children[1].textContent
          ).toEqual("August 2018 to March 2021");
        });
      });
    });

    describe("iconsWithLabels", () => {
      test("should render correct icons with labels", () => {
        const { CompanyDescriptions } = setup();

        let IconsWithLabels: Element;

        CompanyDescriptions.forEach((CompanyDescriptions: Element) => {
          IconsWithLabels =
            CompanyDescriptions.children[2].children[1].children[0];

          expect(
            IconsWithLabels.children[0].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandJS.svg");
          expect(IconsWithLabels.children[0].children[1].textContent).toEqual(
            "Javascript"
          );

          expect(
            IconsWithLabels.children[1].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandRuby.svg");
          expect(IconsWithLabels.children[1].children[1].textContent).toEqual(
            "Ruby"
          );

          expect(
            IconsWithLabels.children[2].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandReact.svg");
          expect(IconsWithLabels.children[2].children[1].textContent).toEqual(
            "React"
          );

          expect(
            IconsWithLabels.children[3].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandRails.svg");
          expect(IconsWithLabels.children[3].children[1].textContent).toEqual(
            "Ruby on Rails"
          );

          expect(
            IconsWithLabels.children[4].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandSinatra.svg");
          expect(IconsWithLabels.children[4].children[1].textContent).toEqual(
            "Sinatra"
          );

          expect(
            IconsWithLabels.children[5].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandStyledComponents.svg");
          expect(IconsWithLabels.children[5].children[1].textContent).toEqual(
            "styled components"
          );

          expect(
            IconsWithLabels.children[6].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandWebpack.svg");
          expect(IconsWithLabels.children[6].children[1].textContent).toEqual(
            "Webpack"
          );

          expect(
            IconsWithLabels.children[7].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandJEST.svg");
          expect(IconsWithLabels.children[7].children[1].textContent).toEqual(
            "JEST"
          );

          expect(
            IconsWithLabels.children[8].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandAirbnb.svg");
          expect(IconsWithLabels.children[8].children[1].textContent).toEqual(
            "Enzyme"
          );

          expect(
            IconsWithLabels.children[9].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandTestingLibrary.svg");
          expect(IconsWithLabels.children[9].children[1].textContent).toEqual(
            "React Testing Library"
          );

          expect(
            IconsWithLabels.children[10].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandCypress.svg");
          expect(IconsWithLabels.children[10].children[1].textContent).toEqual(
            "Cypress"
          );

          expect(
            IconsWithLabels.children[11].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandNode.svg");
          expect(IconsWithLabels.children[11].children[1].textContent).toEqual(
            "Node.js"
          );

          expect(
            IconsWithLabels.children[12].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandExpress.svg");
          expect(IconsWithLabels.children[12].children[1].textContent).toEqual(
            "Express"
          );

          expect(
            IconsWithLabels.children[13].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandApollo.svg");
          expect(IconsWithLabels.children[13].children[1].textContent).toEqual(
            "Apollo"
          );

          expect(
            IconsWithLabels.children[14].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandGraphQL.svg");
          expect(IconsWithLabels.children[14].children[1].textContent).toEqual(
            "GraphQL"
          );

          expect(
            IconsWithLabels.children[15].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandDocker.svg");
          expect(IconsWithLabels.children[15].children[1].textContent).toEqual(
            "Docker"
          );

          expect(
            IconsWithLabels.children[16].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandJenkins.svg");
          expect(IconsWithLabels.children[16].children[1].textContent).toEqual(
            "Jenkins"
          );

          expect(
            IconsWithLabels.children[17].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandBuildkite.svg");
          expect(IconsWithLabels.children[17].children[1].textContent).toEqual(
            "Buildkite"
          );

          expect(
            IconsWithLabels.children[18].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandBasecamp.svg");
          expect(IconsWithLabels.children[18].children[1].textContent).toEqual(
            "Basecamp"
          );

          expect(
            IconsWithLabels.children[19].children[0].children[0].getAttribute(
              "src"
            )
          ).toEqual("/images/svg/brandGallery.svg");
          expect(IconsWithLabels.children[19].children[1].textContent).toEqual(
            "Gallery"
          );
        });
      });
    });

    describe("responsibilities", () => {
      test("should render correct responsibilities", () => {
        const { CompanyDescriptions } = setup();
        let UnorderedList: Element;

        CompanyDescriptions.forEach((CompanyDescription: Element) => {
          UnorderedList =
            CompanyDescription.children[3].children[1].children[0];

          expect(UnorderedList.textContent).toEqual(
            "Create scalable and sane front-end architectureOrchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage payment systemsApply development and certify adherence to best practices to deliver application based on React.jsStreamline project timelines to ensure application is being developedDevelop API gateway in the form of Express / Node.js server, along with Apollo / GraphQL stackTransform and create reusable componentsAuthor unit, integration and acceptance testsDemonstrate expertise in the utilization of GraphQL to communicate with backendMentor junior front-end developers"
          );
        });
      });
    });

    describe("title", () => {
      test("should render Software engineer", () => {
        const { CompanyDescriptions } = setup();
        let Title: string;

        CompanyDescriptions.forEach((CompanyDescription: Element) => {
          Title = CompanyDescription.children[0].textContent;

          expect(Title).toEqual("Software engineer");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  CompanyDescriptions: Element[];
  Logos: Element[];
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<CompanyOmise />);

  const { queryAllByTestId } = utils || {};

  const CompanyDescriptions: Element[] = queryAllByTestId("CompanyDescription");
  const Logos: Element[] = queryAllByTestId("Logo");

  return {
    ...utils,
    CompanyDescriptions,
    Logos
  };
}
