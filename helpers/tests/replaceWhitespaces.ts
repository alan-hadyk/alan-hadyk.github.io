const replaceWhitespaces = (text: string): string[] =>
  text.replace(/\s\s+/g, " ").trim().replace(/\s/g, ",").split(",");

export { replaceWhitespaces };
