import { TFontSize, TSpacing } from "types/props";

export interface IConsoleTextProps {
  dataTestId?: string;
  fontSize: `text-${TFontSize}` | `text-[${string}]`;
  height: `h-${TSpacing}` | `h-[${string}]`;
  lineHeight: `leading-${TSpacing}` | `leading-[${string}]`;
  transform: `after:translate-y-[${string}]` | `after:translate-x-[${string}]`;
  width: `w-${TSpacing}` | `w-[${string}]`;
}
