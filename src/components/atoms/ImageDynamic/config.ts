import {
  ImageDynamicName,
  TImageDynamicComponents,
} from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import Hexagon from "@public/images/dynamic/hexagon.svg";
import HexagonWithPattern from "@public/images/dynamic/hexagonWithPattern.svg";
import Logo from "@public/images/dynamic/logo.svg";
import LogoShortcut from "@public/images/dynamic/logoShortcut.svg";
import Download from "@public/images/dynamic/download.svg";
import ExternalLink from "@public/images/dynamic/externalLink.svg";
import GitHub from "@public/images/dynamic/gitHub.svg";
import LinkedIn from "@public/images/dynamic/linkedIn.svg";
import Toptal from "@public/images/dynamic/toptal.svg";
import Warning from "@public/images/dynamic/warning.svg";

const imageDynamicComponents: TImageDynamicComponents = {
  [ImageDynamicName.Download]: Download,
  [ImageDynamicName.ExternalLink]: ExternalLink,
  [ImageDynamicName.GitHub]: GitHub,
  [ImageDynamicName.Hexagon]: Hexagon,
  [ImageDynamicName.HexagonWithPattern]: HexagonWithPattern,
  [ImageDynamicName.LinkedIn]: LinkedIn,
  [ImageDynamicName.Logo]: Logo,
  [ImageDynamicName.LogoShortcut]: LogoShortcut,
  [ImageDynamicName.Toptal]: Toptal,
  [ImageDynamicName.Warning]: Warning,
};

export { imageDynamicComponents };
