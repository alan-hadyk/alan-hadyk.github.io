import React, { memo } from "react";

import Section from "<molecules>/Section";

const PortfolioSection = (): JSX.Element => (
  <Section
    id="portfolio"
    title="Portfolio"
  >
    Portfolio
  </Section>
);

export default memo(PortfolioSection);
