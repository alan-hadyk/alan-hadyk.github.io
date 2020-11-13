import isFirefox from "helpers/browser/isFirefox";

interface Detect {
  name: string;
}

jest.mock("detect-browser", () => ({
  detect: (): Detect => ({ name: "chrome" })
}));

import * as detectBrowser from "detect-browser";

describe("helpers / browser / isFirefox", () => {
  test("should return true if detect name is 'firefox'", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockdetectBrowser: any = (detectBrowser as unknown) as jest.Mock;
    mockdetectBrowser.detect = () => ({ name: "firefox" });

    expect(isFirefox()).toBeTruthy();
  });

  test("should return false if detect name is not 'firefox'", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockdetectBrowser: any = (detectBrowser as unknown) as jest.Mock;
    mockdetectBrowser.detect = () => ({ name: "safari" });

    expect(isFirefox()).toBeFalsy();
  });
});
