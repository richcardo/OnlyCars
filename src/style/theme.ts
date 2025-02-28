export const theme = {
  text: {
    fontFamily: "Alpino, sans-serif",
    variant: {
      h1: {
        fontWeight: "bold",
        fontSize: 40,
      },
      h2: {
        fontWeight: "bold",
        fontSize: 25,
      },
      h3: {
        fontWeight: "bold",
        fontSize: 20,
      },
      h4: {
        fontWeight: "bold",
        fontSize: 18,
      },
      h5: {
        fontWeight: "bold",
        fontSize: 16,
      },
      h6: {
        fontWeight: "bold",
        fontSize: 14,
      },
      p: {
        fontWeight: "bold",
        fontSize: 16,
      },
      span: {
        fontWeight: "bold",
        fontSize: 20,
      },
    },
  },
  palette: {
    colors: {
      primary: {
        400: "#653BC0",
        contrastText: "#FFFFFF",
      },
      secondary: {
        400: "#C03B96",
        contrastText: "#FFFFFF",
      },
      tertiary: {
        400: "#A83BC0",
        contrastText: "#FFFFFF",
      },
      muted: {
        400: "#EEEEEE",
        contrastText: "#A9A9A9",
      },
      grey: {
        50: "#FFFFFF",
        200: "#F5F5F5",
        300: "#EEEEEE",
        400: "#A9A9A9",
        950: "#05030A",
        contrastText: "#FFFFFF",
      },
      danger: {
        400: "red",
        contrastText: "A9A9A9",
      },
      warning: {
        400: "#ffcc00",
        contrastText: "FFFFFF",
      },
    },
  },
  sizes: {
    small: 40,
    medium: 60,
    large: 70,
  },
}

export type Theme = typeof theme
export type Color = keyof Theme["palette"]["colors"]
export type TextVariant = keyof Theme["text"]["variant"]
export type Size = keyof Theme["sizes"]
