export type ThemeColor = {
	dark: string;
	light: string;
	current: "dark" | "light";
};

export type GlobalTheme = ThemeColor & {
	fontSize: number;
};

export type Colors = {
	color: ThemeColor;
	background: ThemeColor;
};

export type Theme = {
	global: GlobalTheme;
	[x: string]:
	| GlobalTheme
	| Colors
	| string
	| number
	| { [x: string]: string | number };
};