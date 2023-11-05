import { IconsWithLabels } from "@app/components/molecules/IconsWithLabels/IconsWithLabels";
import { ITechStackProps } from "@app/components/molecules/TechStack/@types/TechStack";
import { CompanyDescriptionSection } from "@app/components/molecules/CompanyDescriptionSection/CompanyDescriptionSection";
import { IconWithLabelSize } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";

export const TechStack: React.FC<ITechStackProps> = ({ iconsWithLabels }) => (
  <CompanyDescriptionSection
    themeClasses={{
      marginBottom: "mb-32",
    }}
    title="Tech stack"
  >
    <IconsWithLabels
      iconsWithLabels={iconsWithLabels}
      size={IconWithLabelSize.Small}
    />
  </CompanyDescriptionSection>
);
