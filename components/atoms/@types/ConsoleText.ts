import { TFontSize, TSpacing } from "types/props";

export interface IConsoleTextProps {
  fontSize: `text-${TFontSize}` | `text-[${string}]`;
  height: `after:h-${TSpacing}` | `after:h-[${string}]`;
  lineHeight: `leading-${TSpacing}` | `leading-[${string}]`;
  transform: `after:translate-y-[${string}]` | `after:translate-x-[${string}]`;
  width: `after:w-${TSpacing}` | `after:w-[${string}]`;
}
