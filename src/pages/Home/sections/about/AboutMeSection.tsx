import React, { memo } from "react";

import Icon from "<atoms>/Icon";
import Section from "<molecules>/Section";
import HexagonWithDescription from "<molecules>/HexagonWithDescription";

function AboutMeSection(): JSX.Element {
  return (
    <Section
      dataCy="AboutMe"
      dataTestId="AboutMeSection"
      id="about-me"
      title="About me"
    >
      <HexagonWithDescription
        description={renderDescription()}
      >
        <Icon iconName="companySAP" />
      </HexagonWithDescription>
    </Section>
  );

  function renderDescription(): JSX.Element {
    return (
      <div data-testid="AboutMeSectionDescription">
        <strong>Proven talent</strong> for aligning software development strategy and objectives with established user interface implementation and technology management paradigms to achieve maximum operational impacts with minimum resource expenditures. <strong>Growth-focused thought leader</strong> with expertise spanning application layering, polygot language coding expertise, best practice compliance, agile methodology, cross-functional team leadership, REST & GraphQL architectural styles, comprehensive components, and project management. <strong>Exceptionally dedicated technical professional</strong> with keen organizational skills.
      </div>
    );
  }
}

export default memo(AboutMeSection);
