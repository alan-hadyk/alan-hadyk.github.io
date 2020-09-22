export interface HexagonProps {
  children?: JSX.Element | JSX.Element[];
  contentWidth?: string;
  dataCy?: string;
  dataTestId?: string;
  fill?: "none" | "solid" | "pattern";
}

export interface HexagonInnerContainerProps {
  width?: string;
}
