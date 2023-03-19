import { IconsWithLabels } from "components/molecules/IconsWithLabels";
import { DashboardElement } from "components/molecules/DashboardElement/DashboardElement";

import { ISkillsItemProps } from "components/molecules/@types/SkillsItem";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

const SkillsItem: React.FC<ISkillsItemProps> = ({ iconsWithLabels, title }) => (
  <DashboardElement
    shouldDisplayBorder
    title={title}
    themeClasses={{
      container: {
        flex: "flex-[1_1_100%]"
      },
      title: {
        fontSize: "text-28"
      }
    }}
  >
    <LayoutContainer themeClasses={{ padding: "p-32" }}>
      <IconsWithLabels
        iconsWithLabels={iconsWithLabels}
        position="vertical"
        size="medium"
      />
    </LayoutContainer>
  </DashboardElement>
);

export { SkillsItem };
