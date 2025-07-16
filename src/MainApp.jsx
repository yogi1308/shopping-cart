import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Navbar from './components/navbar/Navbar';
import {getData} from './api/getData.js' 
import { useLocation } from 'react-router-dom';


export default function MainApp() {
  const [theme, setTheme] = useState('');
  useEffect(() => {
    if (theme === '') {setTheme(localStorage?.getItem('theme')); return}
    localStorage.setItem('theme', theme)
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
    }
  }, [theme]);

  const [currPage, setCurrPage] = useState('')
  const [mostPopular, setMostPopular] = useState('')
  useEffect(() => {
    localStorage.setItem('mostPopular', mostPopular)
  }, [mostPopular])

  useEffect(() => {
    if (currPage === 'shop') {
      async function fetchMostPopular() {
        const mostPopularData = await getData('mostPopular')
        setMostPopular(mostPopularData)
        return mostPopularData
      }
      console.log(fetchMostPopular())
    }
  }, [currPage])

  const location = useLocation();

useEffect(() => {
  if (location.pathname === '/shop') {
    setCurrPage('shop');
  } else if (location.pathname === '/') {
    setCurrPage('home');
  }
  // Add more routes as needed
}, [location.pathname]);

  return (
      <>
        <Navbar theme={theme} setTheme={setTheme} setCurrPage={setCurrPage} />
        <App setCurrPage={setCurrPage} mostPopular={mostPopular} />
      </>
  );
}