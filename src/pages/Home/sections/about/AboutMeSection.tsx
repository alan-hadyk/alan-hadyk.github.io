import React, { memo } from "react";

import Section from "<molecules>/Section";
import HexagonWithDescription from "<molecules>/HexagonWithDescription";

const AboutMeSection = (): JSX.Element => (
  <Section
    id="about-me"
    title="About me"
  >
    <HexagonWithDescription />
  </Section>
);

export default memo(AboutMeSection);
