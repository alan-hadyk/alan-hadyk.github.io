import React, { memo } from "react";

import Section from "<molecules>/Section";

const PortfolioSection = (): JSX.Element => (
  <Section
    id="portfolio"
    title="Portfolio"
    minHeight="200vh"
  >
    Portfolio
  </Section>
);
  
export default memo(PortfolioSection);
