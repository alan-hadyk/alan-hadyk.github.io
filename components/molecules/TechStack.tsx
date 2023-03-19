import { Typography } from "components/atoms/Typography/Typography";
import { IconsWithLabels } from "components/molecules/IconsWithLabels";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

import { ITechStackProps } from "components/molecules/@types/TechStack";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const TechStack: React.FC<ITechStackProps> = ({ iconsWithLabels }) => (
  <LayoutContainer themeClasses={{ marginBottom: "mb-16" }}>
    <Typography
      themeClasses={{
        color: "text-blue100",
        fontFamily: "font-anonymousPro",
        fontSize: "text-24",
        fontWeight: "font-bold",
        lineHeight: "leading-32"
      }}
    >
      Tech stack
    </Typography>
    <LayoutContainer
      themeClasses={{
        marginLeft: "ml-16",
        marginTop: "mt-16"
      }}
    >
      <IconsWithLabels
        iconsWithLabels={iconsWithLabels}
        position="horizontal"
        size={IconWithLabelSize.Small}
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { TechStack };
