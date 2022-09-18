import { IHexagonWithDescriptionContentProps } from "components/molecules/@types/HexagonWithDescriptionContent";

export interface IHexagonWithDescriptionProps {
  children: IHexagonWithDescriptionContentProps["children"];
  description: IHexagonWithDescriptionContentProps["description"];
}
