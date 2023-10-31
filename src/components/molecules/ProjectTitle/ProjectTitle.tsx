import { Typography } from "@app/components/atoms/Typography/Typography";
import {
  projectTitleDefaultThemeClasses,
  mapProjectTitleVariantToStyles,
  mapProjectTitleSizeToStyles,
} from "@app/components/molecules/ProjectTitle/styles";
import { IThemeClasses } from "@app/types/theme";
import {
  IProjectTitleProps,
  ProjectTitleSize,
  ProjectTitleVariant,
} from "@app/components/molecules/ProjectTitle/@types/ProjectTitle";

export const ProjectTitle: React.FC<IProjectTitleProps> = ({
  children,
  size = ProjectTitleSize.Large,
  themeClasses,
  variant = ProjectTitleVariant.Light,
}) => {
  const projectTitleThemeClasses: Record<"typography", IThemeClasses> = {
    typography: {
      ...projectTitleDefaultThemeClasses,
      ...mapProjectTitleVariantToStyles[variant],
      ...mapProjectTitleSizeToStyles[size],
      ...themeClasses,
    },
  };

  return (
    <Typography themeClasses={projectTitleThemeClasses.typography}>
      {children}
    </Typography>
  );
};
