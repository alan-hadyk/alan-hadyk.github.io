import { TextProps } from "<atoms>/__typings__/Text.d.ts";

export interface ProjectDescriptionContentProps {
  description: string;
  size?: "large" | "small";
  title: string;
}

export interface MapSizeToProjectDescriptionContentProps {
  large: {
    fontSize: TextProps["fontSize"];
    lineHeight: TextProps["lineHeight"];
  };
  small: {
    fontSize: TextProps["fontSize"];
    lineHeight: TextProps["lineHeight"];
  };
}
