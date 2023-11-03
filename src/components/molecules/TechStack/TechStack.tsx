import { IconsWithLabels } from "@app/components/molecules/IconsWithLabels/IconsWithLabels";
import { ITechStackProps } from "@app/components/molecules/TechStack/@types/TechStack";
import { CompanyDescriptionSection } from "@app/components/molecules/CompanyDescriptionSection/CompanyDescriptionSection";
import { techStackDefaultThemeClasses } from "@app/components/molecules/TechStack/styles";

const TechStack: React.FC<ITechStackProps> = ({ iconsWithLabels }) => (
  <CompanyDescriptionSection
    themeClasses={techStackDefaultThemeClasses}
    title="Tech stack"
  >
    <IconsWithLabels iconsWithLabels={iconsWithLabels} />
  </CompanyDescriptionSection>
);

export { TechStack };
