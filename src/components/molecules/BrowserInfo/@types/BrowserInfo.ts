import { ImageDynamicName } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { Browser } from "detect-browser";

export type TBrowserIcon = Extract<
  ImageDynamicName,
  | ImageDynamicName.Chrome
  | ImageDynamicName.Firefox
  | ImageDynamicName.IE
  | ImageDynamicName.Opera
  | ImageDynamicName.Safari
  | ImageDynamicName.Unknown
>;

export type TActiveIcon = Browser | "react-native" | "bot" | "node" | undefined;
