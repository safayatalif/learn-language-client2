import { createContext, useState } from 'react';

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
});

export default ThemeContext;

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}