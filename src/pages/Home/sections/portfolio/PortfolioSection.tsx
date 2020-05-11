import React, { memo } from "react";

import Section from "<molecules>/Section";
import Hexagon from "<molecules>/Hexagon";
import Text from "<atoms>/Text";

const PortfolioSection = (): JSX.Element => (
  <Section
    id="portfolio"
    title="Portfolio"
  >
    <Hexagon size="large">
      <Text>Hello</Text>
    </Hexagon>
  </Section>
);

export default memo(PortfolioSection);
