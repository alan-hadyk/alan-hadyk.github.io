import ReactDOM from "react-dom";

jest.mock("react-dom");

import { renderApp } from "<src>/index";

describe("Main index file", () => {
  test("should render the application", () => {
    renderApp();
    expect(ReactDOM.render).toBeCalled();
  });
});