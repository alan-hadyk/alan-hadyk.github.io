import { detect } from "detect-browser";

const { name } = detect();

const isFirefox = (): boolean => name === "firefox";

export default isFirefox;
