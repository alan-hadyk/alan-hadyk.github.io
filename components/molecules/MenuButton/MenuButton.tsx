import { IMenuButtonProps } from "components/molecules/MenuButton/@types/MenuButton";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { MenuButtonLine } from "components/atoms/MenuButtonLine/MenuButtonLine";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";
import { menuButtonDefaultThemeClasses } from "components/molecules/MenuButton/styles";

const MenuButton: React.FC<IMenuButtonProps> = ({
  isOpen = false,
  onClick
}) => (
  <LayoutContainer
    aria-label="MenuButton"
    className={convertObjectValuesToString(menuButtonDefaultThemeClasses)}
    onClick={onClick}
  >
    <MenuButtonLine isOpen={isOpen} />
    <MenuButtonLine isOpen={isOpen} />
    <MenuButtonLine isOpen={isOpen} />
    <MenuButtonLine isOpen={isOpen} />
  </LayoutContainer>
);

export { MenuButton };
