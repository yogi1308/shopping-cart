import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Navbar from './components/navbar/Navbar';
import {getData} from './api/getData.js' 
import { useLocation } from 'react-router-dom';
import { ApiErrorPage, Sike, Real } from './components/ErrorPage.jsx/ErrorPage.jsx';
import {Cart} from './components/cart/Cart.jsx'

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
  const [cart, setCart] = useState(() => {
    // Load from localStorage on initial render
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [showCart, setShowCart] = useState(false)
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
  const [nike, setNike] = useState('')
  const [addidas, setaddidas] = useState('')
  const [jordan, setjordan] = useState('')
  const [nb, setnb] = useState('')
  useEffect(() => {
    localStorage.setItem('mostPopular', JSON.stringify(mostPopular))
  }, [mostPopular])

  useEffect(() => {
    if (currPage === 'shop') {
      async function fetchMostPopular() {
        const mostPopularData = await getData('mostPopular')
        setMostPopular(mostPopularData)

        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('nike')
        const nikeData = await getData('search', 'Nike')
        if(nikeData.status === 'error' && (nike?.length === 0  || nike === undefined || nike === 'error')) {console.log(nikeData.status, nike); setNike(nikeData.status)}
        else if(nikeData.status === 'success') {setNike(nikeData.data.products)}
        console.log(nikeData.status, nikeData)

        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('addidas')
        const addidasData = await getData('search', 'addidas')
        if(addidasData.status === 'error' && (addidas?.length === 0 || addidas === undefined || addidas === 'error')) {console.log(addidasData.status, addidas); setaddidas(addidasData.status)}
        else if(addidasData.status === 'success') {setaddidas(addidasData.data.products)}
        console.log(addidasData.status, addidasData)

        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('jordan')
        const jordanData = await getData('search', 'jordan')
        if(jordanData.status === 'error' && (jordan?.length === 0 || jordan === undefined || jordan === 'error')) {console.log(jordanData.status, jordan); setjordan(jordanData.status)}
        else if(jordanData.status === 'success') {setjordan(jordanData.data.products)}
        console.log(jordanData.status, jordanData)

        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('nb')
        const nbData = await getData('search', 'new balance')
        if(nbData.status === 'error' && (nb?.length === 0 || nb === undefined || nb === 'error')) {console.log(nbData.status, nb); setnb(nbData.status)}
        else if(nbData.status === 'success') {setnb(nbData.data.products)}
        console.log(nbData.status, nbData)
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
      else if (location.pathname.includes('More From')) {return}
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

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
    const badge = document.querySelector('span.cart');
    if (badge) {
      badge.setAttribute('data-content', totalItems > 0 ? totalItems.toString() : "-");
    }
  }, [cart]);

  useEffect(() => {
    const root = document.querySelector('#root');
    if (showCart) {root.classList.add('overlay')}
    else {root.classList.remove('overlay')}
  }, [showCart]);

  useEffect(() => {if (apiError) {console.log('error should be displayed')}}, [apiError])


  return (
      <>
        {!apiError && <Navbar setShowCart={setShowCart} cart={cart} theme={theme} setApiError={setApiError} setTheme={setTheme} setCurrPage={setCurrPage} setSearchResults={setSearchResults} />}
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
          setCart={setCart}
          cart={cart}
          nike={nike} addidas={addidas} jordan={jordan} nb={nb}
        />}
        {(!apiError && showCart) && <Cart cart={cart} setCart={setCart} setShowCart={setShowCart} setSelectedShoe={setSelectedShoe} />}
        {apiError && (apiSike ? <Sike setSike={setSike} setReal={setReal} /> : apiReal ? <Real setApiError={setApiError} setReal={setReal} /> :<ApiErrorPage setApiError={setApiError} setSike={setSike}/>)}
      </>
  );
}