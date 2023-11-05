import { IThemeClasses } from "@app/types/theme";

export const unorderedListDefaultThemeClasses: IThemeClasses = {
  listStyleType: "list-none",
  pseudoClasses: [
    "childrenLi:items-start",
    "childrenLi:flex",
    "childrenLi:before:bg-blue100",
    "childrenLi:before:rounded-full",
    "childrenLi:before:content-['']",
    "childrenLi:before:inline-block",
    "childrenLi:mb-16",
    "childrenLi:before:h-8",
    "childrenLi:before:mr-8",
    "childrenLi:before:mt-10",
    "childrenLi:before:min-h-8",
    "childrenLi:before:min-w-8",
    "childrenLi:before:w-8",
  ],
};
