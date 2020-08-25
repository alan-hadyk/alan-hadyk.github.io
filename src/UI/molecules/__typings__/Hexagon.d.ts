export interface HexagonProps {
  children?: JSX.Element | JSX.Element[];
  containerWidth?: string;
  contentWidth?: string;
  dataTestId?: string;
  fill?: "none" | "solid" | "pattern";
}

export interface HexagonInnerContainerProps {
  width?: string;
}
