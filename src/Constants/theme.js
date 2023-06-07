const COLORS = {
  primary: {
    main: "#FED700",
    darker: "#FEBA0C",
    lighter: "#FFF7CC",
  },
  content: {
    main: "#1A1A1A",
    secondary: "#7B8E98",
    white: "#FFFFFF",
    form: "#ECEFF1",
    outline: "#CFD8DC",
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

const FONTS = {
  header: {
    H0: {
      fontFamily: "Nunito, sans-serif",
      fontSize: 48,
      lineHeight: "52px",
    },
    H1: {
      fontFamily: "Nunito, sans-serif",
      fontSize: 28,
      lineHeight: "32px",
    },
    H2: {
      fontFamily: "Nunito, sans-serif",
      fontSize: 24,
      lineHeight: "28px",
    },
    H3: {
      fontFamily: "Nunito, sans-serif",
      fontSize: 20,
      lineHeight: "24px",
    },
  },
  body: {
    P1: {
      fontFamily: "Nunito, sans-serif",
      fontSize: 16,
      lineHeight: "20px",
    },
    P2: {
      fontFamily: "Nunito, sans-serif",
      fontSize: 14,
      lineHeight: "20px",
    },
    S1: {
      fontFamily: "Nunito, sans-serif",
      fontSize: 12,
      lineHeight: "14px",
    },
    S2: {
      fontFamily: "Nunito, sans-serif",
      fontSize: 9,
      lineHeight: "12px",
    },
  },
};

const SHADOWS = {
  1: "0px 0px 1px rgba(40, 41, 61, 0.16), 0px 0.5px 2px rgba(96, 97, 112, 0.24)",
  2: "0px 0px 1px rgba(40, 41, 61, 0.02), 0px 2px 16px rgba(96, 97, 112, 0.16)",
  3: "0px 0px 2px rgba(40, 41, 61, 0.04), 0px -4px 8px rgba(96, 97, 112, 0.16)",
  4: "0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)",
  5: "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16)",
  6: "0px 2px 8px rgba(40, 41, 61, 0.08), 0px 20px 32px rgba(96, 97, 112, 0.24)",
};

const theme = { COLORS, FONTS, SHADOWS };

export default theme;
