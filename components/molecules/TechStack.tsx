import { Typography } from "components/atoms/Typography/Typography";
import { IconsWithLabels } from "components/molecules/IconsWithLabels";
import { LayoutContainer } from "components/layout/LayoutContainer";

import { ITechStackProps } from "components/molecules/@types/TechStack";

const TechStack: React.FC<ITechStackProps> = ({ iconsWithLabels }) => (
  <LayoutContainer marginBottom="mb-16">
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
    <LayoutContainer marginLeft="ml-16" marginTop="mt-16">
      <IconsWithLabels
        iconsWithLabels={iconsWithLabels}
        position="horizontal"
        size="small"
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { TechStack };
