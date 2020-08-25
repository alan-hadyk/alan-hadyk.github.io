export interface ProjectDescriptionContentProps {
  description: string;
  size?: "large" | "medium" | "small";
  title: string;
}

export interface MapSizeToProjectDescriptionContentProps {
  large: {
    fontSize: string;
    lineHeight: string;
  };
  small: {
    fontSize: string;
    lineHeight: string;
  };
}