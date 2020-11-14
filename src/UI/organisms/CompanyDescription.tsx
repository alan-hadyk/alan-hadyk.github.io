import React, { useCallback, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { iconComponents } from "UI/atoms/Icon";
import Text from "UI/atoms/Text";
import IconsWithLabels from "UI/molecules/IconsWithLabels";
import IconWithLabel from "UI/molecules/IconWithLabel";
import UnorderedList from "UI/molecules/UnorderedList";
import SpacingContainer from "UI/layout/SpacingContainer";

import colorPalette from "styles/variables/colorPalette";
import spacing from "styles/variables/spacing";

import isIE11 from "helpers/browser/isIE11";

import {
  CompanyDescriptionProps,
  RenderResponsibilitiesArgs
} from "UI/organisms/__typings__/CompanyDescription";

const CompanyDescriptionContainer = styled.div`
  @media (-ms-high-contrast: none) {
    /* IE10+ CSS */
    width: 100%;
  }

  @media (-ms-high-contrast: active) {
    /* IE10+ CSS */
    width: 100%;
  }
`;

function CompanyDescription({
  date,
  iconsWithLabels,
  responsibilities,
  responsibilitiesPaddingBottom = "spacing68",
  textAlign = "left",
  title
}: CompanyDescriptionProps): JSX.Element {
  const renderTitleAndDate = useCallback(
    (): JSX.Element => (
      <Fragment>
        <Text
          color="white"
          dataCy="CompanyDescriptionMainTitle"
          dataTestId="MainTitle"
          fontFamily={isIE11() ? "AnonymousPro" : "Exan"}
          fontSize="font36"
          lineHeight="spacing48"
          textAlign={textAlign}
          textTransform="uppercase"
        >
          {title}
        </Text>
        <SpacingContainer
          dataTestId="DateSpacingContainer"
          marginBottom="spacing32"
          marginTop="spacing32"
        >
          <IconWithLabel
            labelColor="blue300"
            iconName="calendar"
            label={date}
            size="medium"
          />
        </SpacingContainer>
      </Fragment>
    ),
    [date, textAlign, title]
  );

  return (
    <CompanyDescriptionContainer data-testid="CompanyDescription">
      {renderTitleAndDate()}

      {renderTechStack(iconsWithLabels)}

      {renderResponsibilities({
        responsibilities,
        responsibilitiesPaddingBottom
      })}
    </CompanyDescriptionContainer>
  );
}

function renderTechStack(
  iconsWithLabels: CompanyDescriptionProps["iconsWithLabels"]
): JSX.Element {
  return (
    <SpacingContainer
      dataCy="CompanyTechStack"
      dataTestId="TechStackSpacingContainer"
      marginBottom="spacing16"
    >
      <Text
        color="blue100"
        dataTestId="TechStackTitle"
        fontFamily="AnonymousPro"
        fontSize="font24"
        fontWeight="bold"
        lineHeight="spacing32"
      >
        Tech stack
      </Text>
      <SpacingContainer
        dataTestId="TechStackIconsWithLabelsSpacingContainer"
        marginLeft="spacing16"
        marginTop="spacing16"
      >
        <IconsWithLabels
          iconsWithLabels={iconsWithLabels}
          position="horizontal"
          size="small"
        />
      </SpacingContainer>
    </SpacingContainer>
  );
}

function renderResponsibilities({
  responsibilities,
  responsibilitiesPaddingBottom
}: RenderResponsibilitiesArgs): JSX.Element {
  return (
    <SpacingContainer
      dataCy="CompanyResponsibilities"
      dataTestId="ResponsibilitiesSpacingContainer"
      paddingBottom={responsibilitiesPaddingBottom}
    >
      <Text
        color="blue100"
        dataTestId="ResponsibilitiesTitle"
        fontFamily="AnonymousPro"
        fontSize="font24"
        fontWeight="bold"
        lineHeight="spacing32"
      >
        Responsibilities
      </Text>
      <SpacingContainer
        dataTestId="ResponsibilitiesListSpacingContainer"
        marginLeft="spacing16"
        marginTop="spacing16"
      >
        <UnorderedList items={responsibilities} />
      </SpacingContainer>
    </SpacingContainer>
  );
}

CompanyDescription.propTypes = {
  date: PropTypes.string.isRequired,
  iconsWithLabels: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.oneOf([...Object.keys(iconComponents)]).isRequired,
      label: PropTypes.string.isRequired,
      labelColor: PropTypes.oneOf([...Object.keys(colorPalette)]),
      size: PropTypes.oneOf(["small", "medium", "large"])
    })
  ).isRequired,
  responsibilities: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string
    ])
  ).isRequired,
  responsibilitiesPaddingBottom: PropTypes.oneOf([...Object.keys(spacing)]),
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  title: PropTypes.string.isRequired
};

export default CompanyDescription;
