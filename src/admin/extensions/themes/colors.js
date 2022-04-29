import { morphism, createSchema } from "morphism";

export const colors = morphism(
  createSchema(
    {
      neutral0: "background.card",
      neutral100: "background.main",
      danger100: "background.danger",
      danger600: "background.danger",
      primary100: "background.active",
      success100: "background.success",
      secondary100: "background.active",

      neutral800: "text.main",
      danger700: "text.danger",
      primary600: "text.active",
      primary700: "text.active",
      neutral700: "text.active",
      success700: "text.success",
      neutral600: "text.neutral",
      secondary700: "text.active",
      buttonNeutral0: "text.button",

      neutral300: "border.main",
      neutral200: "border.main",
      primary200: "border.main",
      danger200: "border.danger",
      primary500: "border.active",
      success200: "border.success",
      neutral150: "border.neutral",
      secondary200: "border.active",

      neutral900: "icon.active",
      neutral400: "icon.active",
      success600: "icon.success",
      neutral500: "icon.neutral",
      secondary600: "icon.active",

      secondary500: "",
      danger500: "",
      success500: "",
      neutral1000: "",
      alternative100: "",
      alternative200: "",
      alternative500: "",
      alternative600: "",
      alternative700: "",
      warning100: "",
      warning200: "",
      warning500: "",
      warning600: "",
      warning700: "",
    },
    {
      undefinedValues: { strip: true },
    }
  ),
  {
    icon: {
      main: "#0008",
      active: "#663399",
      success: "#008F00",
    },
    text: {
      main: "#000",
      neutral: "#0008",
      active: "#663399",
      button: "#fff",
      danger: "#f00",
      success: "#008F00",
    },
    border: {
      main: "#66339950",
      neutral: "#f5f5f5",
      active: "#663399",
      danger: "#f00",
      success: "#008F00",
    },
    background: {
      main: "#f5f5f5",
      active: "#66339910",
      card: "#fff",
      danger: "#FFB8B8",
      success: "#B8FFB8",
    },
  }
);
