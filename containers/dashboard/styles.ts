import { IContentFrameProps } from "components/molecules/ContentFrame/@types/ContentFrame";
import { IThemeClasses } from "types/theme";

export const dashboardContainerDefaultThemeClasses: IThemeClasses = {
  marginBottom: "mb-12"
};

export const dashboardContainerMobileDefaultThemeClasses: IThemeClasses = {
  paddingTop: "pt-96"
};

export const dashboardContainerTopInnerContainerDefaultThemeClasses: IThemeClasses =
  {
    height: "h-[calc(17vh+3.6rem)]",
    marginTop: "mt-[2.22vh]"
  };

export const dashboardContainerBottomInnerContainerDefaultThemeClasses: IThemeClasses =
  {
    height: "h-[calc(22.6vh+3.6rem)]",
    marginBottom: "mb-[2.22vh]"
  };

export const dashboardContainerCodeDefaultThemeClasses: IContentFrameProps["themeClasses"] =
  {
    children: {
      overflow: "overflow-hidden"
    },
    container: {
      flex: "flex-[0_1_30%]"
    }
  };

export const dashboardContainerCommitsDefaultThemeClasses: IContentFrameProps["themeClasses"] =
  {
    container: {
      flex: "flex-[1_0_20%]",
      overflow: "overflow-hidden"
    }
  };

export const dashboardContainerFluxDefaultThemeClasses: IContentFrameProps["themeClasses"] =
  {
    container: {
      flex: "flex-[1_0_30%]"
    }
  };

export const dashboardContainerIpDefaultThemeClasses: IContentFrameProps["themeClasses"] =
  {
    container: {
      flex: "flex-[0_1_30%]"
    }
  };

export const dashboardContainerPoweredByDefaultThemeClasses: IContentFrameProps["themeClasses"] =
  {
    container: {
      flex: "flex-[1_0_30%]"
    }
  };

export const dashboardContainerTechStackDefaultThemeClasses: IContentFrameProps["themeClasses"] =
  {
    container: {
      flex: "flex-[1_0_40%]"
    }
  };

export const dashboardContainerUserAgentDefaultThemeClasses: IContentFrameProps["themeClasses"] =
  {
    container: {
      flex: "flex-[1_0_20%]"
    }
  };
