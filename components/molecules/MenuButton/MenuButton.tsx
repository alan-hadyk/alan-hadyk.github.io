import { IMenuButtonProps } from "components/molecules/MenuButton/@types/MenuButton";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { MenuButtonLine } from "components/atoms/MenuButtonLine/MenuButtonLine";
import { menuButtonDefaultThemeClasses } from "components/molecules/MenuButton/styles";

const MenuButton: React.FC<IMenuButtonProps> = ({
  isOpen = false,
  onClick
}) => (
  <LayoutContainer
    aria-label="MenuButton"
    onClick={onClick}
    themeClasses={menuButtonDefaultThemeClasses}
  >
    <MenuButtonLine isOpen={isOpen} />
    <MenuButtonLine isOpen={isOpen} />
    <MenuButtonLine isOpen={isOpen} />
    <MenuButtonLine isOpen={isOpen} />
  </LayoutContainer>
);

export { MenuButton };
