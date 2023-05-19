import {
  ImageDynamicName,
  TImageDynamicComponents,
} from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import Earth from "@public/images/dynamic/earth.svg";
import Flux from "@public/images/dynamic/flux.svg";
import Hexagon from "@public/images/dynamic/hexagon.svg";
import HexagonWithPattern from "@public/images/dynamic/hexagonWithPattern.svg";
import Logo from "@public/images/dynamic/logo.svg";
import LogoShortcut from "@public/images/dynamic/logoShortcut.svg";

const imageDynamicComponents: TImageDynamicComponents = {
  [ImageDynamicName.Earth]: Earth,
  [ImageDynamicName.Flux]: Flux,
  [ImageDynamicName.Hexagon]: Hexagon,
  [ImageDynamicName.HexagonWithPattern]: HexagonWithPattern,
  [ImageDynamicName.Logo]: Logo,
  [ImageDynamicName.LogoShortcut]: LogoShortcut,
};

export { imageDynamicComponents };
