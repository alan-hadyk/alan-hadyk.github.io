import React from "react";
import { RenderResult } from "@testing-library/react";

import FlexContainer from "<layout>/FlexContainer";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { FlexContainerProps } from "<layout>/__typings__/FlexContainer.d.ts";

describe("layout / FlexContainer", () => {
  test("should render children", () => {
    const { FlexContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(FlexContainer.textContent).toEqual("Custom children");
  });

  describe("Styles", () => {
    describe("align-items", () => {
      test("should have center by default", () => {
        const { FlexContainer } = setup();

        expect(FlexContainer).toHaveStyleRule("align-items", "center");
      });

      test("should have stretch passed via alignItems prop", () => {
        const { FlexContainer } = setup({
          alignItems: "stretch"
        });

        expect(FlexContainer).toHaveStyleRule("align-items", "stretch");
      });

      test("should have flex-start passed via alignItems prop", () => {
        const { FlexContainer } = setup({
          alignItems: "flex-start"
        });

        expect(FlexContainer).toHaveStyleRule("align-items", "flex-start");
      });

      test("should have flex-end passed via alignItems prop", () => {
        const { FlexContainer } = setup({
          alignItems: "flex-end"
        });

        expect(FlexContainer).toHaveStyleRule("align-items", "flex-end");
      });

      test("should have baseline passed via alignItems prop", () => {
        const { FlexContainer } = setup({
          alignItems: "baseline"
        });

        expect(FlexContainer).toHaveStyleRule("align-items", "baseline");
      });
    });

    describe("display", () => {
      test("should have flex", () => {
        const { FlexContainer } = setup();

        expect(FlexContainer).toHaveStyleRule("display", "flex");
      });
    });

    describe("flex-flow", () => {
      test("should have row wrap by default", () => {
        const { FlexContainer } = setup();

        expect(FlexContainer).toHaveStyleRule("flex-flow", "row wrap");
      });

      test("should have row nowrap passed via flexFlow prop", () => {
        const { FlexContainer } = setup({
          flexFlow: "row nowrap"
        });

        expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
      });

      test("should have column wrap passed via flexFlow prop", () => {
        const { FlexContainer } = setup({
          flexFlow: "column wrap"
        });

        expect(FlexContainer).toHaveStyleRule("flex-flow", "column wrap");
      });

      test("should have column nowrap passed via flexFlow prop", () => {
        const { FlexContainer } = setup({
          flexFlow: "column nowrap"
        });

        expect(FlexContainer).toHaveStyleRule("flex-flow", "column nowrap");
      });
    });

    describe("height", () => {
      test("should have unset by default", () => {
        const { FlexContainer } = setup();

        expect(FlexContainer).toHaveStyleRule("height", "unset");
      });

      test("should have correct value passed via height prop", () => {
        const { FlexContainer } = setup({
          height: "spacing48"
        });

        expect(FlexContainer).toHaveStyleRule("height", "4.8rem");
      });

      test("should have 50% passed via height prop", () => {
        const { FlexContainer } = setup({
          height: "50%"
        });

        expect(FlexContainer).toHaveStyleRule("height", "50%");
      });

      test("should have 100% passed via height prop", () => {
        const { FlexContainer } = setup({
          height: "100%"
        });

        expect(FlexContainer).toHaveStyleRule("height", "100%");
      });
    });

    describe("justify-content", () => {
      test("should have center by default", () => {
        const { FlexContainer } = setup();

        expect(FlexContainer).toHaveStyleRule("justify-content", "center");
      });

      test("should have flex-start passed via justifyContent prop", () => {
        const { FlexContainer } = setup({
          justifyContent: "flex-start"
        });

        expect(FlexContainer).toHaveStyleRule("justify-content", "flex-start");
      });

      test("should have flex-end passed via justifyContent prop", () => {
        const { FlexContainer } = setup({
          justifyContent: "flex-end"
        });

        expect(FlexContainer).toHaveStyleRule("justify-content", "flex-end");
      });

      test("should have space-between passed via justifyContent prop", () => {
        const { FlexContainer } = setup({
          justifyContent: "space-between"
        });

        expect(FlexContainer).toHaveStyleRule(
          "justify-content",
          "space-between"
        );
      });
    });

    describe("max-width", () => {
      test("should have unset by default", () => {
        const { FlexContainer } = setup();

        expect(FlexContainer).toHaveStyleRule("max-width", "unset");
      });

      test("should have 2.4rem passed via maxWidth prop", () => {
        const { FlexContainer } = setup({
          maxWidth: "spacing24"
        });

        expect(FlexContainer).toHaveStyleRule("max-width", "2.4rem");
      });

      test("should have 4.8rem passed via maxWidth prop", () => {
        const { FlexContainer } = setup({
          maxWidth: "spacing48"
        });

        expect(FlexContainer).toHaveStyleRule("max-width", "4.8rem");
      });
    });
  });

  describe("Props", () => {
    describe("gap", () => {
      test("should apply margin-bottom and margin-right equal to gap to all children flexFlow: row wrap", () => {
        const { FlexContainer } = setup({
          flexFlow: "row wrap",
          gap: "spacing32"
        });

        expect(FlexContainer).toHaveStyleRule("margin-bottom", "3.2rem", {
          modifier: "& > *"
        });
        expect(FlexContainer).toHaveStyleRule("margin-right", "3.2rem", {
          modifier: "& > *"
        });
      });

      test("should apply margin-bottom and margin-right passed via gap prop to all children flexFlow: row wrap", () => {
        const { FlexContainer } = setup({
          flexFlow: "row wrap",
          gap: "40rem"
        });

        expect(FlexContainer).toHaveStyleRule("margin-bottom", "40rem", {
          modifier: "& > *"
        });
        expect(FlexContainer).toHaveStyleRule("margin-right", "40rem", {
          modifier: "& > *"
        });
      });

      test("should apply margin-left passed via gap prop to all children except the first one flexFlow: row nowrap", () => {
        const { FlexContainer } = setup({
          flexFlow: "row nowrap",
          gap: "spacing32"
        });

        expect(FlexContainer).toHaveStyleRule("margin-left", "3.2rem", {
          modifier: "& > *"
        });
        expect(FlexContainer).toHaveStyleRule("margin-left", "0", {
          modifier: "& > *:first-child"
        });
      });

      test("should apply margin-left passed via gap prop to all children except the first one flexFlow: row nowrap", () => {
        const { FlexContainer } = setup({
          flexFlow: "row nowrap",
          gap: "40rem"
        });

        expect(FlexContainer).toHaveStyleRule("margin-left", "40rem", {
          modifier: "& > *"
        });
        expect(FlexContainer).toHaveStyleRule("margin-left", "0", {
          modifier: "& > *:first-child"
        });
      });

      test("should apply margin-top passed via gap prop to all children except the first one flexFlow includes column", () => {
        const { FlexContainer } = setup({
          flexFlow: "column nowrap",
          gap: "spacing40"
        });

        expect(FlexContainer).toHaveStyleRule("margin-top", "4rem", {
          modifier: "& > *"
        });
        expect(FlexContainer).toHaveStyleRule("margin-top", "0", {
          modifier: "& > *:first-child"
        });
      });

      test("should apply margin-top passed via gap prop to all children except the first one flexFlow includes column", () => {
        const { FlexContainer } = setup({
          flexFlow: "column wrap",
          gap: "50rem"
        });

        expect(FlexContainer).toHaveStyleRule("margin-top", "50rem", {
          modifier: "& > *"
        });
        expect(FlexContainer).toHaveStyleRule("margin-top", "0", {
          modifier: "& > *:first-child"
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Node;
}

type FlexContainerTestProps = Partial<FlexContainerProps>;

function setup(additionalProps?: FlexContainerTestProps): Setup {
  const props: FlexContainerProps = {
    children: <div>FlexContainer</div>,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <FlexContainer {...props}>{props.children}</FlexContainer>
  );

  const { container } = utils || {};

  return {
    ...utils,
    FlexContainer: container.children[0]
  };
}
