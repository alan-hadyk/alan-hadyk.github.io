import React, { memo, Fragment } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import LinkWithIcon, { LinkWithIconProps } from "<molecules>/LinkWithIcon";
import Nav from "<molecules>/Nav";
import Button from "<molecules>/Button";
import PositionContainer from "<layout>/PositionContainer";
import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import zIndex from "<styles>/variables/zIndex";

type ZIndexKeys = keyof typeof zIndex;

export interface HeaderProps {
  zIndex?: typeof zIndex[ZIndexKeys];
}

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
      <Header.Container>
        <FlexContainer
          flexFlow="row nowrap"
        >
          <Header.InnerContainer data-testid="HeaderInnerContainer">
            <FlexContainer
              flexFlow="row nowrap"
              height="spacing48"
              justifyContent="space-between"
            >
              <LinkWithIcon
                href={window.location.href}
                iconName="logo"
              />
            
              <FlexContainer
                flexFlow="row nowrap"
                height="spacing48"
                justifyContent="flex-start"
              >
                <SpacingContainer marginRight="spacing48">
                  <Nav />
                </SpacingContainer>
                
                <Button 
                  buttonText="resume" 
                  iconName="download" 
                  size="medium"
                />

                {renderIcons()}
              </FlexContainer>
            </FlexContainer>
          </Header.InnerContainer>
        </FlexContainer>
      </Header.Container>
    </PositionContainer>
  );

  function renderIcons(): JSX.Element {
    const icons: LinkWithIconProps[] = [{
      href: "https://github.com/alan-hadyk",
      iconName: "gitHub"
    }, {
      href: "https://codesandbox.io/u/alan-hadyk",
      iconName: "codeSandbox"
    }, {
      href: "https://www.linkedin.com/in/alan-hadyk-78738099/",
      iconName: "linkedIn"
    }];

    return (
      <Fragment>
        {icons.map(({ href, iconName }: LinkWithIconProps) => (
          <SpacingContainer 
            key={iconName}
            marginLeft="spacing24"
          >
            <LinkWithIcon
              href={href}
              iconName={iconName}
              isExternal={true}
            />
          </SpacingContainer>
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