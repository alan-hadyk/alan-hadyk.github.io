import { detect } from "detect-browser";

const { name } = detect();

const isSafari = (): boolean => name === "safari";

export default isSafari;
