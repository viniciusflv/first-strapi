import icon from "./extensions/assets/icon.svg";
import logo from "./extensions/assets/logo.svg";
import { theme } from "./extensions/themes";

export default {
  config: {
    auth: {
      logo,
    },
    head: {
      favicon: icon,
      title: "Strapi BrasilSeg",
    },
    menu: {
      logo: icon,
    },
    locales: ["pt-BR"],
    theme,
  },
  bootstrap(app) {
    console.log(app);
  },
};
