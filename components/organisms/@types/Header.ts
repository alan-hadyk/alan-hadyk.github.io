import { IThemeClasses } from "types/theme";

interface IChildrenArgs {
  isMenuVisible?: boolean;
  toggleMenuVisibility: () => void;
}

export interface IHeaderProps {
  children: ({
    isMenuVisible,
    toggleMenuVisibility
  }: IChildrenArgs) => JSX.Element;
  zIndex?: IThemeClasses["zIndex"];
}
