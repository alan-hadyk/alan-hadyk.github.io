import { detect } from "detect-browser";

function isIE11(): boolean {
  const browser = detect();

  return browser?.name === "ie";
}

export { isIE11 };
