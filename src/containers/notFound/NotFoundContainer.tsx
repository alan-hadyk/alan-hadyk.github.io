"use client";
import { ImageDynamicName } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { ContentFrameVariant } from "@app/components/molecules/ContentFrame/@types/ContentFrame";
import { ContentFrame } from "@app/components/molecules/ContentFrame/ContentFrame";
import { Error } from "@app/components/molecules/Error/Error";
import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";

export const NotFoundContainer: React.FC = () => (
  <>
    <ImageDynamic
      imageName={ImageDynamicName.Logo}
      themeClasses={{
        width: "w-100%",
      }}
    />

    <LayoutContainer
      themeClasses={{
        marginY: "my-32",
        width: "w-100%",
      }}
    >
      <ContentFrame
        themeClasses={{
          container: {
            flex: "flex-[1_1_100%]",
          },
        }}
        variant={ContentFrameVariant.Corners}
      >
        <Error title="404" description="Page not found" />
      </ContentFrame>
    </LayoutContainer>
  </>
);
