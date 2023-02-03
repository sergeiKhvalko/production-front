import {createContext, FC, useMemo, useState} from "react";

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark'
}

export interface ThemeContextProps {
	theme?: Theme;
	setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({children}) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const defaultProps = useMemo(() => ({
		theme: theme,
		setTheme: setTheme,
	}), [theme])

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;