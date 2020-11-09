import React, { memo } from "react";

import Image from "UI/atoms/Image";
import Section from "UI/molecules/Section";
import HexagonWithDescription from "UI/molecules/HexagonWithDescription";

const AboutMeSection = (): JSX.Element => (
  <Section
    dataCy="AboutMe"
    dataTestId="AboutMeSection"
    id="about-me"
    title="About me"
  >
    <HexagonWithDescription description={renderDescription()}>
      <Image
        data-cy="AboutMeImage"
        data-testid="AboutMeImage"
        height="700"
        src="/images/alan.png"
        width="700"
      />
    </HexagonWithDescription>
  </Section>
);

function renderDescription(): JSX.Element {
  return (
    <div data-testid="AboutMeSectionDescription">
      <strong>Proven talent</strong> for aligning software development strategy
      and objectives with established user interface implementation and
      technology management paradigms to achieve maximum operational impacts
      with minimum resource expenditures.{" "}
      <strong>Growth-focused thought leader</strong> with expertise spanning
      application layering, polygot language coding expertise, best practice
      compliance, agile methodology, cross-functional team leadership, REST &
      GraphQL architectural styles, comprehensive components, and project
      management.{" "}
      <strong>Exceptionally dedicated technical professional</strong> with keen
      organizational skills.
    </div>
  );
}

export default memo(AboutMeSection);
