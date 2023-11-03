import { Typography } from "@app/components/atoms/Typography/Typography";
import { projectTitleDefaultThemeClasses } from "@app/components/molecules/ProjectTitle/styles";
import { IThemeClasses } from "@app/types/theme";
import { IProjectTitleProps } from "@app/components/molecules/ProjectTitle/@types/ProjectTitle";

export const ProjectTitle: React.FC<IProjectTitleProps> = ({
  children,
  themeClasses,
}) => {
  const projectTitleThemeClasses: IThemeClasses = {
    ...projectTitleDefaultThemeClasses,
    ...themeClasses,
  };

  return (
    <Typography themeClasses={projectTitleThemeClasses}>{children}</Typography>
  );
};
