import { IMenuButtonLineProps } from "@app/components/atoms/MenuButtonLine/@types/MenuButtonLine";
import { useMenuButtonLineThemeClasses } from "@app/components/atoms/MenuButtonLine/hooks/useMenuButtonLineThemeClasses";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

export const MenuButtonLine: React.FC<IMenuButtonLineProps> = ({ isOpen }) => {
  const { menuButtonLineThemeClasses } = useMenuButtonLineThemeClasses({
    isOpen,
  });

  return (
    <span className={convertObjectValuesToString(menuButtonLineThemeClasses)} />
  );
};
