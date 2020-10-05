import React from "react";
import {
  act,
  fireEvent, 
  RenderResult
} from "@testing-library/react";

import Backdrop from "<atoms>/Backdrop";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { BackdropProps } from "<atoms>/__typings__/Backdrop.d.ts";

describe("atoms / Backdrop", () => {
  describe("Styles", () => {
    describe("bottom", () => {      
      test("should have 0", () => {
        const { BackdropContainer } = setup();
  
        expect(BackdropContainer).toHaveStyleRule("bottom", "0");
      });
    });

    describe("cursor", () => {      
      test("should have pointer", () => {
        const { BackdropContainer } = setup();
  
        expect(BackdropContainer).toHaveStyleRule("cursor", "pointer");
      });
    });

    describe("left", () => {  
      test("should have 0", () => {
        const { BackdropContainer } = setup();
  
        expect(BackdropContainer).toHaveStyleRule("left", "0");
      });
    });

    describe("position", () => {      
      test("should have fixed", () => {
        const { BackdropContainer } = setup();
  
        expect(BackdropContainer).toHaveStyleRule("position", "fixed");
      });
    });

    describe("right", () => {  
      test("should have 0", () => {
        const { BackdropContainer } = setup();
  
        expect(BackdropContainer).toHaveStyleRule("right", "0");
      });
    });

    describe("top", () => {  
      test("should have 0", () => {
        const { BackdropContainer } = setup();
  
        expect(BackdropContainer).toHaveStyleRule("top", "0");
      });
    });

    describe("z-index", () => {  
      test("should have 900", () => {
        const { BackdropContainer } = setup();
  
        expect(BackdropContainer).toHaveStyleRule("z-index", "900");
      });
    });
  });

  describe("Props", () => {
    describe("onClick", () => { 
      test("should fire onClick prop", () => {
        const onClick = jest.fn();
  
        const { BackdropContainer } = setup({
          onClick
        });
  
        expect(onClick).toHaveBeenCalledTimes(0);
  
        act(() => {
          fireEvent.click(BackdropContainer);
        });
  
        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});

interface Setup extends RenderResult {
  BackdropContainer: Element;
}

type BackdropTestProps = Partial<BackdropProps>;

function setup(additionalProps?: BackdropTestProps): Setup {
  const props: BackdropProps = {
    onClick: jest.fn(),
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <Backdrop {...props} />
  );

  const { queryByTestId } = utils || {};

  const BackdropContainer: Element = queryByTestId("Backdrop");

  return {
    ...utils,
    BackdropContainer
  };
}
