import { IThemeClasses } from "@app/types/theme";

export const companyDescriptionSectionDefaultThemeClasses: Record<
  "contentWrapper" | "title",
  IThemeClasses
> = {
  contentWrapper: {
    marginLeft: "ml-16",
    marginTop: "mt-16",
  },
  title: {
    color: "text-blue100",
    fontFamily: "font-anonymousPro",
    fontSize: "text-24",
    fontWeight: "font-bold",
    lineHeight: "leading-32",
  },
};
