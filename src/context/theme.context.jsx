import { createContext,useState } from "react";

export const ThemeContext = createContext({
	setCurrentTheme: () => null,
	currentTheme: null,
});

export const ThemeProvider = ({ children }) => {
	const toggleTheme = () =>{
		setCurrentTheme((curr)=>(curr==="light"?"dark":"light"))
	}
	const [currentTheme, setCurrentTheme] = useState(null);
	const value = { currentTheme, toggleTheme };

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};