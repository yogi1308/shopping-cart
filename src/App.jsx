import Homepage from './components/homepage/Homepage.jsx';
import { Routes, Route } from 'react-router-dom';
import Shop from './components/shop/Shop';
import Shoe from './components/shop/Shoe';
import {useEffect, useState} from 'react'
import {getData} from './api/getData.js'

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
                    sotdData = sotdData[0]
                    const sotdDataParsed = {sotdImg: sotdData.thumbnail, sotdName: sotdData.shoeName, sotdDesc: sotdData.description}
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
                sotdData = sotdData[0]
                const sotdDataParsed = {sotdImg: sotdData.thumbnail, sotdName: sotdData.shoeName, sotdDesc: sotdData.description}
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
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/shoe" element={<Shoe />} />
                {/* Add other routes here */}
            </Routes>
        </>
    )
}