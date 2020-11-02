import { detect } from "detect-browser";

const { name } = detect();

const isIE11 = (): boolean => name === "ie";

export default isIE11;
