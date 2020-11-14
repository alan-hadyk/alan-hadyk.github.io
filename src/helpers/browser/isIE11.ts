import { detect } from "detect-browser";

function isIE11(): boolean {
  const { name } = detect();

  return name === "ie";
}

export default isIE11;
