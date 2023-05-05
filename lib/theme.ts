import { ThemeColor, GlobalTheme, Theme } from "./types/Theme";

export const setColors = (
  dark: ThemeColor["dark"],
  light: ThemeColor["light"],
  current: ThemeColor["current"]
): ThemeColor => ({ dark, light, current });

export const globalTheme = (props: GlobalTheme): GlobalTheme => ({ ...props });

export const defaultTheme: Theme = {
  global: globalTheme({
    fontSize: 16,
    dark: "#444",
    light: "#bbb",
    current: "dark",
  }),
  body: {
    color: setColors("#222", "#eee", "dark"),
    background: setColors("#444", "#ddd", "dark"),
  },
};

const theme = (t: Theme): Theme => ({ ...defaultTheme, ...t });

export default theme;
