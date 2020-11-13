import isIE11 from "helpers/browser/isIE11";

interface Detect {
  name: string;
}

jest.mock("detect-browser", () => ({
  detect: (): Detect => ({ name: "chrome" })
}));

import * as detectBrowser from "detect-browser";

describe("helpers / browser / isIE11", () => {
  test("should return true if detect name is 'ie'", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockdetectBrowser: any = (detectBrowser as unknown) as jest.Mock;
    mockdetectBrowser.detect = () => ({ name: "ie" });

    expect(isIE11()).toBeTruthy();
  });

  test("should return false if detect name is not 'ie'", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockdetectBrowser: any = (detectBrowser as unknown) as jest.Mock;
    mockdetectBrowser.detect = () => ({ name: "safari" });

    expect(isIE11()).toBeFalsy();
  });
});
