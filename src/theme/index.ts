import { createTheme } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    pink: ColorPartial;
  }
  interface Theme {
    palette: Palette;
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    pink: ColorPartial;
  }
}

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#909BF9",
    },
    pink: {
      100: "#D9215A",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontFamily: ["Arial", "sans-serif"].join(","),
    h1: {
      fontSize: 30,
      fontWeight: 600,
      color: theme.palette,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: "primary" },
          style: {
            color: theme.palette.primary.main,
            "&:disabled": {
              color: theme.palette.pink[100],
            },
          },
        },
      ],
    },
  },
});

export default theme;
