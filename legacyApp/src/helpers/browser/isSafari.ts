import { detect } from "detect-browser";

function isSafari(): boolean {
  const { name } = detect();

  return name === "safari";
}

export default isSafari;
