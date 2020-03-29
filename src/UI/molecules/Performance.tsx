import React, { memo } from "react";

import FlexContainer from "<layout>/FlexContainer";
import PerformanceItem from "<molecules>/PerformanceItem";

import {
  PerformanceItemProps
} from "<molecules>/__typings__/PerformanceItem.d.ts";

const performanceItems: PerformanceItemProps[] = [
  { title: "Total heap size" },
  { title: "Used heap size" },
  { title: "Heap size limit" },
  { title: "Navi start" },
  { title: "Fetch start" },
  { title: "Domain lookup" },
  { title: "Connect start" },
  { title: "Connect end" },
  { title: "Request start" },
  { title: "Rasponse start" },
  { title: "Response end" },
  { title: "Dom loading" },
  { title: "Interactive" },
  { title: "Event start" },
  { title: "Event end" },
  { title: "Dom complete" },
  { title: "Load event" }
];

function Performance(): JSX.Element {
  return (
    <FlexContainer
      flexFlow="column nowrap"
    >
      {performanceItems.map(({ title }, index): JSX.Element => {
        const animationDelay = `${getRandomDelay(0, index * 600)}ms`;
 
        return (
          <PerformanceItem
            animationDelay={animationDelay}
            key={title}
            title={title}
          />
        );
      })}
    </FlexContainer>
  );
}

function getRandomDelay(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default memo(Performance);