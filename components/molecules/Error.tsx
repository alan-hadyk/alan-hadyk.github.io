import { Typography } from "components/atoms/Typography/Typography";

import IconWarning from "public/images/svg/Icon-Warning.svg";

import { IErrorProps } from "components/molecules/@types/Error";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

const Error: React.FC<IErrorProps> = ({ description, title }) => (
  <LayoutContainer
    themeClasses={{
      height: "h-100%",
      padding: "p-8"
    }}
  >
    <LayoutContainer
      themeClasses={{
        alignItems: "items-center",
        display: "flex",
        flexFlow: "flex-col-nowrap",
        height: "h-100%",
        justifyContent: "justify-center"
      }}
    >
      <IconWarning className="animate-glow-verySlow" />
      <Typography
        themeClasses={{
          fontSize: "text-24",
          fontWeight: "font-bold",
          lineHeight: "leading-24",
          paddingTop: "pt-12",
          textTransform: "uppercase"
        }}
      >
        {title}
      </Typography>
      <Typography
        themeClasses={{
          fontSize: "text-16",
          lineHeight: "leading-24",
          textAlign: "text-center",
          textTransform: "uppercase"
        }}
      >
        {description}
      </Typography>
    </LayoutContainer>
  </LayoutContainer>
);

export { Error };
