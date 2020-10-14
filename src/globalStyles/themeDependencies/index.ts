import colors from "./colors";
import { space, shadows, borders } from "./styles";
import fontSizes from "./type";

const theme = {
  defaultColorModeName: "lightMode",
  colors,
  space,
  shadows,
  borders,
  fontSizes,
  breakpoints: {
    xs: 0,
    sm: 375,
    md: 735,
    lg: 1070,
    xl: 1280,
  },
};

export default theme;
