import { IconsWithLabels } from "components/molecules/IconsWithLabels/IconsWithLabels";
import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";

import { ISkillsItemProps } from "components/molecules/@types/SkillsItem";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IconsWithLabelsPosition } from "components/molecules/IconsWithLabels/@types/IconsWithLabels";

const SkillsItem: React.FC<ISkillsItemProps> = ({ iconsWithLabels, title }) => (
  <ContentFrame
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
        position={IconsWithLabelsPosition.Vertical}
        size={IconWithLabelSize.Medium}
      />
    </LayoutContainer>
  </ContentFrame>
);

export { SkillsItem };
