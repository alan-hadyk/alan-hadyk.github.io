import { ILinkWithIconProps } from "components/molecules/LinkWithIcon/@types/LinkWithIcon";

export interface IHorizontalLinksWithIconsProps {
  icons?: Pick<ILinkWithIconProps, "href" | "iconName" | "isExternal">[];
}
