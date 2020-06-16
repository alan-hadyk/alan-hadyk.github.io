import React, { memo } from "react";

import Text from "<atoms>/Text";
import Link from "<atoms>/Link";

import Section from "<molecules>/Section";
import FlexContainer from "<layout>/FlexContainer";

// TODO: Write tests when this section will be ready
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
        isHovered
      >
        <Text
          color="blue300"
          ellipsis
          fontSize="font28"
          isHovered
          textAlign="center"
        >
          alan.hadyk@gmail.com
        </Text>
      </Link>
    </FlexContainer>
  </Section>
);

export default memo(ContactSection);
