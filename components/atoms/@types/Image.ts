import { TSpacingValues } from "types/theme";

export interface IImageProps {
  alt?: string;
  className?: string;
  height?:
    | `h-${TSpacingValues}`
    | `h-[${string}]`
    | `${number}%`
    | `${number}px`;
  id?: string;
  src: string;
  width?:
    | `w-${TSpacingValues}`
    | `w-[${string}]`
    | `${number}%`
    | `${number}px`;
}
