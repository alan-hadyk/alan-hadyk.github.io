import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";
import PropTypes from "prop-types";

import { ReactComponent as BrandAfterEffects } from "assets/svg/Brand-AfterEffects.svg";
import { ReactComponent as BrandAirbnb } from "assets/svg/Brand-Airbnb.svg";
import { ReactComponent as BrandApollo } from "assets/svg/Brand-Apollo.svg";
import { ReactComponent as BrandBamboo } from "assets/svg/Brand-Bamboo.svg";
import { ReactComponent as BrandBasecamp } from "assets/svg/Brand-Basecamp.svg";
import { ReactComponent as BrandBuildkite } from "assets/svg/Brand-Buildkite.svg";
import { ReactComponent as BrandCSS } from "assets/svg/Brand-CSS.svg";
import { ReactComponent as BrandCorel } from "assets/svg/Brand-Corel.svg";
import { ReactComponent as BrandCSSModules } from "assets/svg/Brand-CSSModules.svg";
import { ReactComponent as BrandCoffeeScript } from "assets/svg/Brand-CoffeeScript.svg";
import { ReactComponent as BrandCypress } from "assets/svg/Brand-Cypress.svg";
import { ReactComponent as BrandDocker } from "assets/svg/Brand-Docker.svg";
import { ReactComponent as BrandDocpad } from "assets/svg/Brand-Docpad.svg";
import { ReactComponent as BrandEmber } from "assets/svg/Brand-Ember.svg";
import { ReactComponent as BrandExpress } from "assets/svg/Brand-Express.svg";
import { ReactComponent as BrandFigma } from "assets/svg/Brand-Figma.svg";
import { ReactComponent as BrandGallery } from "assets/svg/Brand-Gallery.svg";
import { ReactComponent as BrandGithub } from "assets/svg/Brand-Github.svg";
import { ReactComponent as BrandGitlab } from "assets/svg/Brand-Gitlab.svg";
import { ReactComponent as BrandGraphQL } from "assets/svg/Brand-GraphQL.svg";
import { ReactComponent as BrandGrunt } from "assets/svg/Brand-Grunt.svg";
import { ReactComponent as BrandGulp } from "assets/svg/Brand-Gulp.svg";
import { ReactComponent as BrandHTML } from "assets/svg/Brand-HTML.svg";
import { ReactComponent as BrandJEST } from "assets/svg/Brand-JEST.svg";
import { ReactComponent as BrandJIRA } from "assets/svg/Brand-JIRA.svg";
import { ReactComponent as BrandJQuery } from "assets/svg/Brand-jQuery.svg";
import { ReactComponent as BrandJS } from "assets/svg/Brand-JS.svg";
import { ReactComponent as BrandJenkins } from "assets/svg/Brand-Jenkins.svg";
import { ReactComponent as BrandLESS } from "assets/svg/Brand-LESS.svg";
import { ReactComponent as BrandNode } from "assets/svg/Brand-Node.svg";
import { ReactComponent as BrandPhabricator } from "assets/svg/Brand-Phabricator.svg";
import { ReactComponent as BrandPhotoshop } from "assets/svg/Brand-Photoshop.svg";
import { ReactComponent as BrandPrestaShop } from "assets/svg/Brand-PrestaShop.svg";
import { ReactComponent as BrandQuire } from "assets/svg/Brand-Quire.svg";
import { ReactComponent as BrandQunit } from "assets/svg/Brand-Qunit.svg";
import { ReactComponent as BrandREST } from "assets/svg/Brand-REST.svg";
import { ReactComponent as BrandReact } from "assets/svg/Brand-React.svg";
import { ReactComponent as BrandRedmine } from "assets/svg/Brand-Redmine.svg";
import { ReactComponent as BrandRedux } from "assets/svg/Brand-Redux.svg";
import { ReactComponent as BrandSass } from "assets/svg/Brand-Sass.svg";
import { ReactComponent as BrandSketch } from "assets/svg/Brand-Sketch.svg";
import { ReactComponent as BrandStash } from "assets/svg/Brand-Stash.svg";
import { ReactComponent as BrandStyledComponents } from "assets/svg/Brand-StyledComponents.svg";
import { ReactComponent as BrandTS } from "assets/svg/Brand-TS.svg";
import { ReactComponent as BrandTaskade } from "assets/svg/Brand-Taskade.svg";
import { ReactComponent as BrandTestingLibrary } from "assets/svg/Brand-TestingLibrary.svg";
import { ReactComponent as BrandTrello } from "assets/svg/Brand-Trello.svg";
import { ReactComponent as BrandWebpack } from "assets/svg/Brand-Webpack.svg";
import { ReactComponent as BrandWebsocket } from "assets/svg/Brand-Websocket.svg";
import { ReactComponent as BrandZeplin } from "assets/svg/Brand-Zeplin.svg";
import { ReactComponent as BtnCodeSandbox } from "assets/svg/Btn-CodeSandbox.svg";
import { ReactComponent as BtnDownload } from "assets/svg/Btn-Download.svg";
import { ReactComponent as BtnExternalLink } from "assets/svg/Btn-ExternalLink.svg";
import { ReactComponent as CompanyDIH } from "assets/svg/Company-DiH.svg";
import { ReactComponent as CompanyOmise } from "assets/svg/Company-Omise.svg";
import { ReactComponent as CompanySAP } from "assets/svg/Company-SAP.svg";
import { ReactComponent as CompanyShiji } from "assets/svg/Company-Shiji.svg";
import { ReactComponent as Hexagon } from "assets/svg/Hexagon.svg";
import { ReactComponent as HexagonWithPattern } from "assets/svg/Hexagon-With-Pattern.svg";
import { ReactComponent as IconApollo } from "assets/svg/Icon-Apollo.svg";
import { ReactComponent as IconCalendar } from "assets/svg/Icon-Calendar.svg";
import { ReactComponent as IconCodeSandbox } from "assets/svg/Icon-CodeSandbox.svg";
import { ReactComponent as IconEarth } from "assets/svg/Icon-Earth.svg";
import { ReactComponent as IconChrome } from "assets/svg/Icon-Chrome.svg";
import { ReactComponent as IconFirefox } from "assets/svg/Icon-Firefox.svg";
import { ReactComponent as IconGitHub } from "assets/svg/Icon-GitHub.svg";
import { ReactComponent as IconGraphql } from "assets/svg/Icon-Graphql.svg";
import { ReactComponent as IconIE } from "assets/svg/Icon-IE.svg";
import { ReactComponent as IconJavascript } from "assets/svg/Icon-Javascript.svg";
import { ReactComponent as IconLinkedIn } from "assets/svg/Icon-LinkedIn.svg";
import { ReactComponent as IconLogo } from "assets/svg/Icon-Logo.svg";
import { ReactComponent as IconLogoShortcut } from "assets/svg/Icon-Logo-Shortcut.svg";
import { ReactComponent as IconNode } from "assets/svg/Icon-Node.svg";
import { ReactComponent as IconReact } from "assets/svg/Icon-React.svg";
import { ReactComponent as IconReactLogo } from "assets/svg/Icon-ReactLogo.svg";
import { ReactComponent as IconTypescript } from "assets/svg/Icon-Typescript.svg";
import { ReactComponent as IconWebpack } from "assets/svg/Icon-Webpack.svg";
import { ReactComponent as IconOpera } from "assets/svg/Icon-Opera.svg";
import { ReactComponent as IconSafari } from "assets/svg/Icon-Safari.svg";
import { ReactComponent as IconUnknown } from "assets/svg/Icon-Unknown.svg";

import transitionTimes from "styles/variables/transitionTimes";

import {
  IconComponents,
  IconContainerProps,
  IconProps,
  SVGIcon
} from "UI/atoms/__typings__/Icon";

const iconComponents: IconComponents = {
  apollo: IconApollo,
  brandAfterEffects: BrandAfterEffects,
  brandAirbnb: BrandAirbnb,
  brandApollo: BrandApollo,
  brandBamboo: BrandBamboo,
  brandBasecamp: BrandBasecamp,
  brandBuildkite: BrandBuildkite,
  brandCSS: BrandCSS,
  brandCSSModules: BrandCSSModules,
  brandCoffeeScript: BrandCoffeeScript,
  brandCorel: BrandCorel,
  brandCypress: BrandCypress,
  brandDocker: BrandDocker,
  brandDocpad: BrandDocpad,
  brandEmber: BrandEmber,
  brandExpress: BrandExpress,
  brandFigma: BrandFigma,
  brandGallery: BrandGallery,
  brandGithub: BrandGithub,
  brandGitlab: BrandGitlab,
  brandGraphQL: BrandGraphQL,
  brandGrunt: BrandGrunt,
  brandGulp: BrandGulp,
  brandHTML: BrandHTML,
  brandJEST: BrandJEST,
  brandJIRA: BrandJIRA,
  brandJQuery: BrandJQuery,
  brandJS: BrandJS,
  brandJenkins: BrandJenkins,
  brandLESS: BrandLESS,
  brandNode: BrandNode,
  brandPhabricator: BrandPhabricator,
  brandPhotoshop: BrandPhotoshop,
  brandPrestaShop: BrandPrestaShop,
  brandQuire: BrandQuire,
  brandQunit: BrandQunit,
  brandREST: BrandREST,
  brandReact: BrandReact,
  brandRedmine: BrandRedmine,
  brandRedux: BrandRedux,
  brandSass: BrandSass,
  brandSketch: BrandSketch,
  brandStash: BrandStash,
  brandStyledComponents: BrandStyledComponents,
  brandTS: BrandTS,
  brandTaskade: BrandTaskade,
  brandTestingLibrary: BrandTestingLibrary,
  brandTrello: BrandTrello,
  brandWebpack: BrandWebpack,
  brandWebsocket: BrandWebsocket,
  brandZeplin: BrandZeplin,
  btnCodeSandbox: BtnCodeSandbox,
  btnDownload: BtnDownload,
  btnExternalLink: BtnExternalLink,
  calendar: IconCalendar,
  chrome: IconChrome,
  codeSandbox: IconCodeSandbox,
  companyDIH: CompanyDIH,
  companyOmise: CompanyOmise,
  companySAP: CompanySAP,
  companyShiji: CompanyShiji,
  earth: IconEarth,
  firefox: IconFirefox,
  gitHub: IconGitHub,
  graphql: IconGraphql,
  hexagon: Hexagon,
  hexagonWithPattern: HexagonWithPattern,
  ie: IconIE,
  javascript: IconJavascript,
  linkedIn: IconLinkedIn,
  logo: IconLogo,
  logoShortcut: IconLogoShortcut,
  node: IconNode,
  opera: IconOpera,
  react: IconReact,
  reactLogo: IconReactLogo,
  safari: IconSafari,
  typescript: IconTypescript,
  unknown: IconUnknown,
  webpack: IconWebpack
};

const IconContainer = styled.div<IconContainerProps>`
  ${({
    animationDelay,
    animationTime,
    height,
    isActive,
    isHeightResponsive,
    isResponsive,
    overflow,
    shouldDisplayGlowAnimation,
    shouldGlow,
    shouldGlowOnHover,
    theme: {
      colorPalette: { blue300, white },
      easing: { easeInOut },
      keyframes: { glow },
      spacing,
      transitionTimes
    },
    width
  }): FlattenSimpleInterpolation => css`
    height: ${(height in spacing && spacing[height]) || height};
    overflow: ${overflow};
    width: ${(width in spacing && spacing[width]) || width};

    svg {
      height: ${isResponsive || isHeightResponsive ? "100%" : "auto"};
      width: ${isResponsive && !isHeightResponsive ? "100%" : "auto"};

      ${isActive &&
      css`
        path {
          fill: ${blue300};
        }
      `}

      ${shouldDisplayGlowAnimation &&
      css`
        animation-delay: ${animationDelay};
        animation-duration: ${transitionTimes[animationTime]};
        animation-iteration-count: infinite;
        animation-name: ${glow};
        animation-timing-function: ${easeInOut};
      `}
    
      ${shouldGlow &&
      `
        filter: drop-shadow(0px 0px ${spacing.spacing4} ${transparentize(
  0.5,
  white
)});
      `}

      ${shouldGlowOnHover &&
      `
        transition: all ${
  transitionTimes[animationTime]
} ${easeInOut} ${animationDelay};
  
        &:hover {
          filter: drop-shadow(0px 0px ${spacing.spacing4} ${transparentize(
  0.5,
  white
)});
        }
      `}
    }
  `};
`;

function Icon({
  animationDelay = "0ms",
  animationTime = "slow",
  dataTestId,
  height = "auto",
  iconName,
  isActive = false,
  isHeightResponsive = false,
  isResponsive = false,
  overflow = "visible",
  shouldDisplayGlowAnimation = false,
  shouldGlow = false,
  shouldGlowOnHover = false,
  width = "auto"
}: IconProps): JSX.Element {
  const IconComponent: SVGIcon = iconComponents[iconName];

  return (
    <IconContainer
      data-cy={iconName}
      data-testid={dataTestId || "IconContainer"}
      animationDelay={animationDelay}
      animationTime={animationTime}
      height={height}
      isActive={isActive}
      isHeightResponsive={isHeightResponsive}
      isResponsive={isResponsive}
      overflow={overflow}
      shouldDisplayGlowAnimation={shouldDisplayGlowAnimation}
      shouldGlow={shouldGlow}
      shouldGlowOnHover={shouldGlowOnHover}
      width={width}
    >
      <IconComponent />
    </IconContainer>
  );
}

Icon.propTypes = {
  animationDelay: PropTypes.string,
  animationTime: PropTypes.oneOf([...Object.keys(transitionTimes)]),
  dataTestId: PropTypes.string,
  height: PropTypes.string,
  iconName: PropTypes.oneOf([...Object.keys(iconComponents)]).isRequired,
  isActive: PropTypes.bool,
  isHeightResponsive: PropTypes.bool,
  isResponsive: PropTypes.bool,
  overflow: PropTypes.oneOf(["hidden", "visible"]),
  shouldDisplayGlowAnimation: PropTypes.bool,
  shouldGlow: PropTypes.bool,
  shouldGlowOnHover: PropTypes.bool,
  width: PropTypes.string
};

export default Icon;
