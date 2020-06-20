import React, { memo } from "react";

import Text from "<atoms>/Text";
import Link from "<molecules>/Link";
import Section from "<molecules>/Section";
import FlexContainer from "<layout>/FlexContainer";

const ContactSection = (): JSX.Element => (
  <Section
    id="contact"
    title="Contact"
  >
    <FlexContainer
      justifyContent="center"
    >
      <Link
        href="mailto:alan.hadyk@gmail.com"
        isHoverable
      >
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
