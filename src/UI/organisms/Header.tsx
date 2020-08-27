import React, { memo, Fragment } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import LinkWithIcon from "<molecules>/LinkWithIcon";
import Nav from "<molecules>/Nav";
import Button from "<molecules>/Button";
import PositionContainer from "<layout>/PositionContainer";
import FlexContainer from "<layout>/FlexContainer";

import { HeaderProps } from "<organisms>/__typings__/Header.d.ts";

import { LinkWithIconProps } from "<molecules>/__typings__/LinkWithIcon.d.ts";

function Header({
  zIndex = "layer1"
}: HeaderProps): JSX.Element {
  return (
    <PositionContainer
      left="spacing0"
      position="fixed"
      right="spacing0"
      top="spacing0"
      zIndex={zIndex}
    >
      <Header.Container data-cy="Header">
        <FlexContainer
          flexFlow="row nowrap"
        >
          {renderHeaderInnerContainer()}
        </FlexContainer>
      </Header.Container>
    </PositionContainer>
  );

  function renderHeaderInnerContainer(): JSX.Element {
    return (
      <Header.InnerContainer data-testid="HeaderInnerContainer">
        <FlexContainer
          flexFlow="row nowrap"
          height="spacing48"
          justifyContent="space-between"
        >
          <LinkWithIcon
            dataCy="SiteLogo"
            href={window.location.href}
            iconName="logo"
            height="spacing48"
            width="spacing248"
          />

          <FlexContainer
            flexFlow="row nowrap"
            height="spacing48"
            gap="spacing48"
            justifyContent="flex-start"
          >
            <Nav />

            <FlexContainer
              flexFlow="row nowrap"
              height="spacing48"
              gap="spacing24"
              justifyContent="flex-start"
            >
              <Button
                buttonText="resume"
                iconName="btnDownload"
                size="medium"
              />

              {renderIcons()}
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </Header.InnerContainer>
    );
  }

  function renderIcons(): JSX.Element {
    const icons: LinkWithIconProps[] = [{
      height: "spacing48",
      href: "https://github.com/alan-hadyk",
      iconName: "gitHub"
    }, {
      height: "spacing48",
      href: "https://codesandbox.io/u/alan-hadyk",
      iconName: "codeSandbox"
    }, {
      height: "spacing48",
      href: "https://www.linkedin.com/in/alan-hadyk-78738099/",
      iconName: "linkedIn"
    }];

    return (
      <Fragment>
        {icons.map(({ height, href, iconName }: LinkWithIconProps) => (
          <LinkWithIcon
            dataCy={iconName}
            key={iconName}
            height={height}
            href={href}
            iconName={iconName}
            isExternal
          />
        ))}
      </Fragment>
    );
  }
}

Header.Container = styled.header`
  ${({
    theme: {
      colorPalette: { blue300, blue600 },
      spacing: { spacing96 }
    }
  }): FlattenSimpleInterpolation => css`
    background-color: ${transparentize(0.25, blue600)};
    border-bottom: 1px solid ${transparentize(0.5, blue300)};
    height: ${spacing96};
  `}
`;

Header.InnerContainer = styled.div`
  ${({
    theme: {
      breakpoints: { breakpoint1920 },
      spacing: { spacing24, spacing48 }
    }
  }): FlattenSimpleInterpolation => css`
    max-width: ${breakpoint1920};
    padding: ${spacing24} ${spacing48};
    width: 100%;
  `}
`;

export default memo(Header);