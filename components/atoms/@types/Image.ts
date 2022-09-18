import { TSpacing } from "types/props";

export interface IImageProps {
  alt?: string;
  className?: string;
  height?: `h-${TSpacing}` | `h-[${string}]` | `${number}%` | `${number}px`;
  id?: string;
  src: string;
  width?: `w-${TSpacing}` | `w-[${string}]` | `${number}%` | `${number}px`;
}
