import React, { memo, Fragment } from "react";

import FlexContainer from "<layout>/FlexContainer";
import PerformanceItem from "<molecules>/PerformanceItem";

import getRandomDelay from "<helpers>/math/getRandomDelay";

const performanceItems: string[] = [
  "Total heap size",
  "Used heap size",
  "Heap size limit",
  "Navi start",
  "Fetch start",
  "Domain lookup",
  "Connect start",
  "Connect end", "Request start",
  "Rasponse start",
  "Response end",
  "Dom loading",
  "Interactive",
  "Event start",
  "Event end",
  "Dom complete",
  "Load event"
];

function Performance(): JSX.Element {
  return (
    <FlexContainer
      alignItems="flex-start"
      dataTestId="Performance"
      flexFlow="column nowrap"
      justifyContent="flex-start"
    >
      {renderPerformanceItems()}
    </FlexContainer>
  );

  function renderPerformanceItems(): JSX.Element {
    return (
      <Fragment>
        {performanceItems.map((label: string, index: number): JSX.Element => {
          const animationDelay = `${getRandomDelay(0, index * 600)}ms`;
  
          return (
            <PerformanceItem
              animationDelay={animationDelay}
              key={label}
              label={label}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default memo(Performance);