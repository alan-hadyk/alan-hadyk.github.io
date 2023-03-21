import { IHexagonWithDescriptionContentProps } from "components/molecules/HexagonWithDescriptionContent/@types/HexagonWithDescriptionContent";

export interface IHexagonWithDescriptionProps {
  children: IHexagonWithDescriptionContentProps["children"];
  description: IHexagonWithDescriptionContentProps["description"];
}
