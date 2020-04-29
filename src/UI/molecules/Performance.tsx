import React from "react";

import FlexContainer from "<layout>/FlexContainer";
import PerformanceItem from "<molecules>/PerformanceItem";

import getRandomDelay from "<helpers>/math/getRandomDelay";

import useFpsCounter from "<hooks>/useFpsCounter";

import {
  UseFpsCounterResult
} from "<hooks>/__typings__/useFpsCounter.d.ts";

const PERFORMANCE_ITEMS: string[] = [
  "Total heap size",
  "Used heap size",
  "Heap size limit",
  "Navi start",
  "Fetch start",
  "Domain lookup",
  "Connect start",
  "Connect end", 
  "Request start",
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
  const { isPerformanceLow }: UseFpsCounterResult = useFpsCounter({});

  return (
    <FlexContainer
      alignItems="flex-start"
      dataTestId="Performance"
      flexFlow="column nowrap"
      justifyContent="flex-start"
    >
      {PERFORMANCE_ITEMS.map((label: string, index: number): JSX.Element => {
        const animationDelay = `${getRandomDelay(0, index * 600)}ms`;
  
        return (
          <PerformanceItem
            animationDelay={animationDelay}
            key={label}
            label={label}
            shouldAnimate={!isPerformanceLow}
          />
        );
      })}
    </FlexContainer>
  );
}

export default Performance;