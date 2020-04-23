import React from "react";
import { RenderResult } from "@testing-library/react";
import ShuffleText from "shuffle-text";

import { Commits } from "<pages>/Home/sections/dashboard/elements/Commits";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ListOfCommitsProps
} from "<molecules>/__typings__/ListOfCommits.d.ts";

jest.mock("<molecules>/ListOfCommits", () => (): JSX.Element => (
  <div />
));

describe("pages / Home / sections / dashboard / elements / Commits", () => {
  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("shuffleDelay", () => {
        test("should trigger shuffleText.start in intervals with 3600ms delay", () => {
          jest.spyOn(ShuffleText.prototype, "start");
          jest.useFakeTimers();
    
          setup();

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

          jest.advanceTimersByTime(3600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(3600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);
    
          jest.advanceTimersByTime(3600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(3);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(4);
    
          jest.advanceTimersByTime(3600);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(4);
    
          jest.clearAllTimers();
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Corners: Element[];
  DashboardElement: Element;
  Error: Element;
}

type ListOfCommitsTestProps = Partial<ListOfCommitsProps>;

function setup(addedProps?: ListOfCommitsTestProps): Setup {
  const defaultProps: ListOfCommitsProps = {
    commitsList: [
      {
        commit: {
          author: {
            date: "2020-03-10T22:34:52Z"
          }
        },
        // eslint-disable-next-line @typescript-eslint/camelcase
        html_url: "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2964",
        sha: "4380d5d391eee216e651d34700a331ec501c2964"
      }
    ],
    hasError: false
  };

  const props: ListOfCommitsProps = { ...defaultProps, ...addedProps };

  const utils: RenderResult = renderWithTheme(
    <Commits {...props} />
  );

  const { queryByTestId, queryAllByTestId } = utils || {};

  return {
    ...utils,
    Corners: queryAllByTestId("Corner"),
    DashboardElement: queryByTestId("Commits"),
    Error: queryByTestId("Error")
  };
}