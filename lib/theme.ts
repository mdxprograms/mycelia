type ThemeColor = {
  dark: string;
  light: string;
  current: "dark" | "light";
};

type Global = ThemeColor & {
  fontSize: number;
};

type Colors = {
  color: ThemeColor;
  background: ThemeColor;
};

const setColors = (
  dark: ThemeColor["dark"],
  light: ThemeColor["light"],
  current: ThemeColor["current"]
): ThemeColor => ({ dark, light, current });

const global = (props: Global): Global => ({ ...props });

export type Theme = {
  global: Global;
  [x: string]:
    | Global
    | Colors
    | string
    | number
    | { [x: string]: string | number };
};

export const defaultTheme: Theme = {
  global: global({
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
