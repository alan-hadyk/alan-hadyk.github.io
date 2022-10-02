import { IconsWithLabels } from "components/molecules/IconsWithLabels";
import { DashboardElement } from "components/molecules/DashboardElement";

import { ISkillsItemProps } from "components/molecules/@types/SkillsItem";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { iconNames } from "components/atoms/Icon";

const SkillsItem: React.FC<ISkillsItemProps> = ({ iconsWithLabels, title }) => {
  const dataCyTitle = title.replace(/\s/g, "").replace("/", "");

  return (
    <DashboardElement
      dataCy={`Skills${dataCyTitle}`}
      flex="flex-[1_1_100%]"
      shouldDisplayBorder
      title={title}
      titleFontSize="text-28"
    >
      <LayoutContainer padding="p-32">
        <IconsWithLabels
          iconsWithLabels={iconsWithLabels}
          position="vertical"
          size="medium"
        />
      </LayoutContainer>
    </DashboardElement>
  );
};

export { SkillsItem };
