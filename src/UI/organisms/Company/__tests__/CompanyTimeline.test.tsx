import React from "react";
import { RenderResult } from "@testing-library/react";

import CompanyTimeline from "UI/organisms/Company/CompanyTimeline";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { CompanyTimelineProps } from "UI/organisms/Company/__typings__/CompanyTimeline";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("molecules / CompanyTimeline", () => {
  test("should have correct structure", () => {
    const { CompanyTimelineContainer, Timeline } = setup();

    expect(CompanyTimelineContainer.children[0]).toEqual(Timeline);
  });

  describe("PositionContainer", () => {
    describe("Props", () => {
      describe("bottom", () => {
        test("should have -1.6rem by default", () => {
          const { CompanyTimelineContainer } = setup();

          expect(CompanyTimelineContainer).toHaveStyleRule("bottom", "-1.6rem");
        });

        test("should have correct value passed via timelineBottom prop", () => {
          const { CompanyTimelineContainer } = setup({
            timelineBottom: "spacing32"
          });

          expect(CompanyTimelineContainer).toHaveStyleRule("bottom", "3.2rem");
        });
      });

      describe("left", () => {
        test("should have 50%", () => {
          const { CompanyTimelineContainer } = setup();

          expect(CompanyTimelineContainer).toHaveStyleRule("left", "50%");
        });
      });

      describe("position", () => {
        test("should have absolute", () => {
          const { CompanyTimelineContainer } = setup();

          expect(CompanyTimelineContainer).toHaveStyleRule(
            "position",
            "absolute"
          );
        });
      });

      describe("top", () => {
        test("should have 1.6rem", () => {
          const { CompanyTimelineContainer } = setup();

          expect(CompanyTimelineContainer).toHaveStyleRule("top", "1.6rem");
        });
      });

      describe("transform", () => {
        test("should have translateX(-50%)", () => {
          const { CompanyTimelineContainer } = setup();

          expect(CompanyTimelineContainer).toHaveStyleRule(
            "transform",
            "translateX(-50%)"
          );
        });
      });
    });
  });

  describe("Timeline", () => {
    test("should render", () => {
      const { Timeline } = setup();

      expect(Timeline).toHaveStyleRule("height", "100%");
      expect(Timeline).toHaveStyleRule("position", "relative");
      expect(Timeline).toHaveStyleRule("width", "1.6rem");
      expect(Timeline.children[1]).toHaveStyleRule(
        "background-color",
        "#78b0b5"
      );
      expect(Timeline.children[1]).toHaveStyleRule("bottom", "0");
      expect(Timeline.children[1]).toHaveStyleRule("left", "50%");
      expect(Timeline.children[1]).toHaveStyleRule("position", "absolute");
      expect(Timeline.children[1]).toHaveStyleRule("top", "0");
      expect(Timeline.children[1]).toHaveStyleRule(
        "transform",
        "translateX(-50%)"
      );
      expect(Timeline.children[1]).toHaveStyleRule("width", ".2rem");
    });
  });
});

interface Setup extends RenderResult {
  CompanyTimelineContainer: Element;
  Timeline: Element;
}

function setup(props?: CompanyTimelineProps): Setup {
  const utils: RenderResult = renderWithTheme(<CompanyTimeline {...props} />);

  const { queryAllByTestId }: RenderResult = utils;

  const CompanyTimelineContainer: Element = queryAllByTestId(
    "CompanyTimeline"
  )[0];
  const Timeline: Element = queryAllByTestId("Timeline")[0];

  return {
    ...utils,
    CompanyTimelineContainer,
    Timeline
  };
}
