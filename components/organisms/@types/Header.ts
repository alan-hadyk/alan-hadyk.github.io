import { ILayoutContainerProps } from "components/layout/LayoutContainer/@types/LayoutContainer";

interface IChildrenArgs {
  isMenuVisible?: boolean;
  toggleMenuVisibility: () => void;
}

export interface IHeaderProps {
  children: ({
    isMenuVisible,
    toggleMenuVisibility
  }: IChildrenArgs) => JSX.Element;
  zIndex?: ILayoutContainerProps["zIndex"];
}
