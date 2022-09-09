import { detect } from "detect-browser";

const isFirefox = (): boolean => {
  const browser = detect();

  return browser?.name === "firefox";
};

export { isFirefox };
