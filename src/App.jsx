import Homepage from './components/homepage/Homepage.jsx';
import { Routes, Route } from 'react-router-dom';
import Shop from './components/shop/Shop';
import Shoe from './components/shop/Shoe';
import {useEffect, useState} from 'react'
import {getData} from './api/getData.js'
import {SearchResults} from './components/shop/SearchResults.jsx'

export default function App(props) {
    let dateObject = new Date();
    let year = dateObject.getFullYear();
    let month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    let day = String(dateObject.getDate()).padStart(2, '0');
    let formattedDate = `${year}-${month}-${day}`;

    // Set initial date in localStorage if not present
    localStorage.getItem('date') === '' && localStorage.setItem('date', formattedDate);

    const [date, setDate] = useState(localStorage.getItem('date'));
    const [sotd, setSotd] = useState('')

    useEffect(() => {
        // Skip the initial mount by checking if date is already set
        async function checkDateAndFetch() {
            if (date) {
                const currentDate = new Date();
                const currentFormattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;

                if (date !== currentFormattedDate) {
                    setDate(currentFormattedDate);
                    localStorage.setItem('date', currentFormattedDate);
                    let sotdData = await getData('sotd')
                    if(sotdData.status === 'error') {props.setApiError(true)} else {props.setApiError(false)}
                    sotdData = sotdData[0]
                    const sotdDataParsed = {sotdAllData: JSON.stringify(sotdData), sotdImg: sotdData.thumbnail, sotdName: sotdData.shoeName, sotdDesc: sotdData.description}
                    setSotd(sotdDataParsed)
                    localStorage.setItem('sotd', JSON.stringify(sotdDataParsed))
                }
                else {console.log('date not changed'); setSotd(JSON.parse(localStorage.getItem('sotd')));}
            }
            else {
                const currentDate = new Date();
                const currentFormattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
                setDate(currentFormattedDate);
                localStorage.setItem('date', currentFormattedDate);
                let sotdData = await getData('sotd')
                if(sotdData.status === 'error') {props.setApiError(true)} else {props.setApiError(false)}
                sotdData = sotdData[0]
                const sotdDataParsed = {sotdAllData: JSON.stringify(sotdData), sotdImg: sotdData.thumbnail, sotdName: sotdData.shoeName, sotdDesc: sotdData.description}
                setSotd(sotdDataParsed)
                localStorage.setItem('sotd', JSON.stringify(sotdDataParsed))
            }
        }
        checkDateAndFetch()
    }, [date]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage sotd={sotd} setCurrPage={props.setCurrPage} />} />
                <Route path="/shop" element={<Shop nike={props.nike} addidas={props.addidas} setApiError={props.setApiError} setLoading={props.setLoading} searchResults={props.searchResults} setSearchResults={props.setSearchResults} setSearchThis={props.setSearchThis} mostPopular={props.mostPopular} setSelectedShoe={props.setSelectedShoe} />} />
                <Route path="/product/:shoe" 
                element={<Shoe cart={props.cart} setCart={props.setCart} setApiError={props.setApiError} searchResults={props.searchResults} 
                displaySimilar={props.displaySimilar} setSelectedShoe={props.setSelectedShoe} selectedShoe={props.selectedShoe}
                setSearchResults={props.setSearchResults} setSearchThis={props.setSearchThis} />} errorElement='ApiErrorPage' />

                <Route path="/search/:shoe/:page" element={<SearchResults setApiError={props.setApiError} searchResults={props.searchResults}
                loading={props.loading} searchThis={props.searchThis} setSelectedShoe={props.setSelectedShoe}
                setSearchResults={props.setSearchResults} />} errorElement='ApiErrorPage' />
                {/* Add other routes here */}
            </Routes>
        </>
    )
}