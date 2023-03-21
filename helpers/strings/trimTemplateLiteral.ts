export const trimTemplateLiteral = (templateLiteral: string): string =>
  templateLiteral?.replace(/(\s\s+|[\t\n])/g, " ").trim();
