import { IMenuButtonProps } from "components/molecules/MenuButton/@types/MenuButton";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { MenuButtonLine } from "components/atoms/MenuButtonLine/MenuButtonLine";
import { menuButtonDefaultThemeClasses } from "components/molecules/MenuButton/styles";

const MenuButton: React.FC<IMenuButtonProps> = ({
  id,
  isOpen = false,
  onClick
}) => (
  <LayoutContainer
    id={id}
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
