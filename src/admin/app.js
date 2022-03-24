import favicon from "./extensions/favicon.png";
import logo from "./extensions/logoBB.svg";
import logoBBSeg from "./extensions/logoBBSeg.svg";

const appColors = {
  primaryColor: "#FAE22C",
  secondaryColor: "#465EFF",
  fontSecondaryColor: "#465EFF",
  backgroundBlueColor: "#465EFF",
  terciaryBlue: "#465EFF",
  darkBlue: "#465EFF",
  lightBlue: "#465EFF",
  secondaryLightBlue: "#465EFF",
  terciaryLightBlue: "#4ADBFD",
  dividerLightBlue: "#DDE4FC",
  sideMenuLightBlue: "#F3EEFB",
  bgBlue: "#3751FF",
  secondaryBlue: "#2E49FD",
  fontLightBlue: "#83ACFF",
  fontTextBlue: "#8891CC",
  whiteColor: "#FFFFFF",
  backgroundColor: "rgba(70, 94, 255, 0.03)",
  backgroundColorLight: "#FAFAFA",
  greenWhats: "#43A047",
  greenCard: "#7effe91a",
  greenCardBorder: "#00EBCF",
  dividerBlue: "#66869B",
  lightGray: "#F2F9FF",
  borderLightGray: "#E7EDFB",
  secondaryLightGray: "#E8F3FC",
  terciaryLightGray: "#E0E7FF",
  paperLightGreen: "#7EFFE9",
  imageLightGreen: "#C3FFF4",
  paperLightGray: "#E5E5E5",
  black: "#000000",
  menuYellow: "#FCEE4F",
  secondaryYellow: "#FFED00",
  terciaryYellow: "#FAE128",
  fontBlack: "#4C4C4C",
  colorGray: "#4E4E4E",
  secondaryGray: "#474747",
  terciaryGray: "#8798AD",
  alternativeGray: "rgba(120, 120, 120, 0.38)",
  primaryRed: "#E11919",
  redButton: "#E53935",
  redStatus: "#F97A70",
  blackInativo: "#F5F5F5",
  backgroundGroup: "#F9F7FF",
  borderGroup: "#DDE4FC",
};

export default {
  config: {
    auth: {
      logo: logoBBSeg,
    },
    head: {
      favicon,
      title: "Strapi BrasilSeg",
    },
    menu: {
      logo,
    },
    locales: ["pt-BR"],
    theme: {
      colors: {
        alternative100: "#f6ecfc",
        alternative200: "#e0c1f4",
        alternative500: "#ac73e6",
        alternative600: "#9736e8",
        alternative700: "#8312d1",
        buttonNeutral0: appColors.whiteColor,
        danger100: "#fcecea",
        danger200: "#f5c0b8",
        danger500: appColors.redStatus,
        danger600: appColors.redButton,
        danger700: appColors.primaryRed,
        neutral0: appColors.whiteColor,
        neutral100: appColors.backgroundColor, // background light
        neutral150: appColors.dividerLightBlue, // Divider
        neutral200: appColors.dividerLightBlue, // Divider
        neutral300: "#c0c0cf",
        neutral400: "#a5a5ba",
        neutral500: "#8e8ea9",
        neutral600: appColors.fontTextBlue, // Font secondary
        neutral700: "#4a4a6a",
        neutral800: appColors.fontBlack, // Font primary
        neutral900: appColors.secondaryColor, // Icon
        neutral1000: "#181826",
        primary100: appColors.backgroundColor, // Active background
        primary200: appColors.dividerLightBlue, // btn border
        primary500: appColors.bgBlue,
        primary600: appColors.secondaryColor, // font
        primary700: appColors.secondaryColor,
        secondary100: "#eaf5ff",
        secondary200: "#b8e1ff",
        secondary500: "#66b7f1",
        secondary600: "#0c75af",
        secondary700: "#006096",
        success100: "#eafbe7",
        success200: "#c6f0c2",
        success500: "#5cb176",
        success600: "#328048",
        success700: "#2f6846",
        warning100: "#fdf4dc",
        warning200: "#fae7b9",
        warning500: "#f29d41",
        warning600: "#d9822f",
        warning700: "#be5d01",
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
