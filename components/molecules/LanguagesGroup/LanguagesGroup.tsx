import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Corners } from "components/molecules/Corners/Corners";
import { ILanguagesGroupProps } from "components/molecules/LanguagesGroup/@types/LanguagesGroup";
import {
  languagesGroupDefaultThemeClasses,
  languagesGroupLanguageWrapperDefaultThemeClasses,
  languagesGroupLevelDefaultThemeClasses,
  languagesGroupNameDefaultThemeClasses
} from "components/molecules/LanguagesGroup/styles";

const LanguagesGroup: React.FC<ILanguagesGroupProps> = ({ languages }) => (
  <LayoutContainer themeClasses={languagesGroupDefaultThemeClasses}>
    {languages.map(({ level, name }) => (
      <LayoutContainer
        key={level + name}
        themeClasses={languagesGroupLanguageWrapperDefaultThemeClasses}
      >
        <LayoutContainer themeClasses={languagesGroupLevelDefaultThemeClasses}>
          <Corners />
          {level}
        </LayoutContainer>

        <Typography themeClasses={languagesGroupNameDefaultThemeClasses}>
          {name}
        </Typography>
      </LayoutContainer>
    ))}
  </LayoutContainer>
);

export { LanguagesGroup };
