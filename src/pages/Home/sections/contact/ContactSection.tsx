import React, { memo } from "react";

import Text from "UI/atoms/Text";
import Link from "UI/molecules/Link";
import Section from "UI/molecules/Section";
import FlexContainer from "UI/layout/FlexContainer";

const ContactSection = (): JSX.Element => (
  <Section
    dataCy="Contact"
    dataTestId="ContactSection"
    id="contact"
    title="Contact"
  >
    <FlexContainer justifyContent="center">
      <Link dataCy="EmailLink" href="mailto:alan.hadyk@gmail.com" isHoverable>
        <Text
          color="blue300"
          dataTestId="EmailText"
          ellipsis
          fontSize="font28"
          isHoverable
          paddingBottom="spacing16"
          textAlign="center"
        >
          alan.hadyk@gmail.com
        </Text>
      </Link>
    </FlexContainer>
  </Section>
);

export default memo(ContactSection);
