import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Icon from "<atoms>/Icon";
import Section from "<molecules>/Section";
import HexagonWithDescription from "<molecules>/HexagonWithDescription";

const AboutMeSection = (): JSX.Element => {
  function renderDescription(): JSX.Element {
    return (
      <AboutMeSection.Description data-testid="AboutMeSectionDescription">
        <strong>Proven talent</strong> for aligning software development strategy and objectives with established user interface implementation and technology management paradigms to achieve maximum operational impacts with minimum resource expenditures. <strong>Growth-focused thought leader</strong> with expertise spanning application layering, polygot language coding expertise, best practice compliance, agile methodology, cross-functional team leadership, REST & GraphQL architectural styles, comprehensive components, and project management. <strong>Exceptionally dedicated technical professional</strong> with keen organizational skills.
      </AboutMeSection.Description>
    );
  }

  return (
    <Section
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
};

AboutMeSection.Description = styled.div`
  ${({
    theme: {
      colorPalette: { blue100 }
    }
  }): FlattenSimpleInterpolation => css`
    strong {
      color: ${blue100};
    }
  `}
`;

export default memo(AboutMeSection);
