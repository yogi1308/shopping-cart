import { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'

export default function App() {
    const [theme, setTheme] = useState('') 
    useEffect(() => {
        if (
            theme === "🌙" ||
            (theme === "" && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            setTheme('🌙');
            document.documentElement.className = 'dark';
        } else {
            setTheme('🔆');
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <>
            <Navbar theme={theme} setTheme={setTheme} />
        </>
    )
}