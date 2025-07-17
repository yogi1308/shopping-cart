import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Navbar from './components/navbar/Navbar';
import {getData} from './api/getData.js' 
import { useLocation } from 'react-router-dom';
import { ApiErrorPage, Sike, Real } from './components/ErrorPage.jsx/ErrorPage.jsx';

export default function MainApp() {
  const [theme, setTheme] = useState('');
  const [searchResults, setSearchResults] = useState('')
  const [searchThis, setSearchThis] = useState('')
  const [loading, setLoading] = useState('')
  const [selectedShoe, setSelectedShoe] = useState(null)
  const [displaySimilar, setdisplaySimilar] = useState('')
  const [apiError, setApiError] = useState(false)
  const [apiSike, setSike] = useState(false)
  const [apiReal, setReal] = useState(false)
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
    localStorage.setItem('mostPopular', JSON.stringify(mostPopular))
  }, [mostPopular])

  useEffect(() => {
    if (currPage === 'shop') {
      async function fetchMostPopular() {
        const mostPopularData = await getData('mostPopular')
        setMostPopular(mostPopularData)
        return mostPopularData
      }
      fetchMostPopular()
    }
  }, [currPage])

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/shop') {
      setCurrPage('shop');
    } else if (location.pathname === '/') {
      setCurrPage('home');
    }
    else if (location.pathname.includes('/search')) {
      if (location.pathname.includes('popular')) {return}
        async function fetchData() {
          let url = location.pathname.split('/')
          setSearchThis(url[2])
          setLoading(true)
          let results = await getData('search', url[2], url[3]);
          results = results.data
          setSearchResults(results)
          setLoading(false)
        }
        fetchData()
    }
    else if (location.pathname.includes('/product')) {
        async function fetchData() {
          setdisplaySimilar(false)
          let url = location.pathname.split('/')
          const similar = url[2].split('-', 3).join()
          const results = await getData('similar', similar);
          setSearchResults(results)
          setdisplaySimilar(true)
        }
        fetchData()
    }
    // Add more routes as needed
  }, [location.pathname, apiError]);

  return (
      <>
        {!apiError && <Navbar theme={theme} setApiError={setApiError} setTheme={setTheme} setCurrPage={setCurrPage} setSearchResults={setSearchResults} />}
        {!apiError && <App 
          setCurrPage={setCurrPage} 
          mostPopular={mostPopular} 
          searchResults={searchResults} 
          searchThis={searchThis}
          loading={loading} 
          selectedShoe={selectedShoe}
          setSelectedShoe={setSelectedShoe}
          setSearchResults={setSearchResults}
          displaySimilar={displaySimilar}
          setApiError={setApiError}
          setSearchThis={setSearchThis}
          setLoading={setLoading}
        />}
        {apiError && (apiSike ? <Sike setSike={setSike} setReal={setReal} /> : apiReal ? <Real setApiError={setApiError} setReal={setReal} /> :<ApiErrorPage setApiError={setApiError} setSike={setSike}/>)}
      </>
  );
}