// 1. Import the extendTheme function
import {
  extendTheme,
  defineStyleConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    main: {
      500: "#FED700",
      600: "#FFE10A",
      700: "#FFEB14",
    },
    darker: {
      500: "#FEBA0C",
      600: "#FFC416",
      700: "#FFCE20",
    },
    lighter: {
      500: "#FFF7CC",
      600: "#FFFFD6",
      700: "#FFFFE0",
    },
  },
  text: {
    main: "#1A1A1A",
    secondary: "#7B8E98",
    outline: "#CFD8DC",
    form: "#ECEFF1",
    white: "#FFFFFF",
  },
  custom: {
    red: "#F44336",
    blue: "#03A9F4",
    green: "#01A54E",
  },
  catalog: {
    horse: "#A12D41",
    turkey: "#BC302A",
    pig: "#DE6562",
    duck: "#DE6734",
    deer: "#B3742C",
    chicken: "#3D9152",
    rabbit: "#95A93A",
    sheep: "#4962A3",
    cow: "#AA4884",
    goose: "#A0522D",
    goat: "#008080",
    1: "#6A5ACD",
    3: "#6D9E07",
    4: "#61288B",
    5: "#C76B89",
    6: "#3CB371",
    7: "#B4AE64",
  },
};
const fonts = {
  heading: "Nunito, sans-serif",
  body: "Nunito, sans-serif",
};
const Button = defineStyleConfig({
  variants: {
    solid: {
      color: "text.main",
      borderRadius: "9999px",
    },
    outline: {
      color: "text.main",
      borderColor: "text.outline",
      borderRadius: "9999px",
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
});

export const theme = extendTheme(
  {
    colors,
    fonts,
    components: {
      Button,
    },
  },
  withDefaultColorScheme({ colorScheme: "primary.main" })
);
