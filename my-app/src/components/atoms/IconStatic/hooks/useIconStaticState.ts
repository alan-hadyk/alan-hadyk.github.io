"use client";
import { IIconStaticProps } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { useEffect, useState } from "react";

const useIconStaticState = ({
  iconName,
}: Pick<IIconStaticProps, "iconName">) => {
  const src = `/icons/static/${iconName}.svg`;

  const [iconStaticDimensions, setIconStaticDimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      const { height, width } = img;

      setIconStaticDimensions({
        height,
        width,
      });
    };
  }, [src]);

  return { iconStaticDimensions, src };
};

export { useIconStaticState };
