import { IMenuButtonLineProps } from "components/atoms/MenuButtonLine/@types/MenuButtonLine";
import { useMenuButtonLineThemeClasses } from "components/atoms/MenuButtonLine/hooks/useMenuButtonLineThemeClasses";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";

const MenuButtonLine = ({ isOpen }: IMenuButtonLineProps) => {
  const { menuButtonLineThemeClasses } = useMenuButtonLineThemeClasses({
    isOpen
  });

  return (
    <span className={convertObjectValuesToString(menuButtonLineThemeClasses)} />
  );
};

export { MenuButtonLine };
