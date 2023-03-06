import { Typography } from "components/atoms/Typography";

import IconWarning from "public/images/svg/Icon-Warning.svg";

import { IErrorProps } from "components/molecules/@types/Error";
import { LayoutContainer } from "components/layout/LayoutContainer";

const Error: React.FC<IErrorProps> = ({ description, title }) => (
  <LayoutContainer padding="p-8" height="h-100%">
    <LayoutContainer
      alignItems="items-center"
      display="flex"
      height="h-100%"
      flexFlow="flex-col flex-nowrap"
      justifyContent="justify-center"
    >
      <IconWarning className="animate-glow-verySlow" data-cy="ErrorIcon" />
      <Typography
        fontSize="text-24"
        fontWeight="font-bold"
        lineHeight="leading-24"
        paddingTop="pt-12"
        textTransform="uppercase"
      >
        {title}
      </Typography>
      <Typography
        fontSize="text-16"
        lineHeight="leading-24"
        textAlign="text-center"
        textTransform="uppercase"
      >
        {description}
      </Typography>
    </LayoutContainer>
  </LayoutContainer>
);

export { Error };
