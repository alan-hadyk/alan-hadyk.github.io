import { IButtonProps } from "components/molecules/Button/@types/Button";

export interface ISideMenuProps {
  isExpanded?: boolean;
  onCVButtonClick?: IButtonProps["onClick"];
}
