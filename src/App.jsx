import { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Homepage from './components/homepage/Homepage.jsx';

export default function App() {
    const [theme, setTheme] = useState('') 
    useEffect(() => {
        if (theme === "🌙" || (theme === "" && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme('🌙');
            document.documentElement.className = 'dark';
        } 
        else if (theme === "🔆" || (theme === "" && window.matchMedia('(prefers-color-scheme: light)').matches)) {
            setTheme('🔆');
            document.documentElement.classList.remove('dark');
        }
        else {
            setTheme('🔆');
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <>
            <Navbar theme={theme} setTheme={setTheme} />
            <Homepage />
        </>
    )
}