import { ILayoutContainerProps } from "components/layout/LayoutContainer/@types/LayoutContainer";

export interface IMenuButtonProps {
  id?: ILayoutContainerProps["id"];
  isOpen?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
