import { detect } from "detect-browser";

function isFirefox(): boolean {
  const { name } = detect();

  return name === "firefox";
}

export default isFirefox;
