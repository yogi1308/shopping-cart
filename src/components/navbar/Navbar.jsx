import './navbar.css'
import ShoeIcon from '../../assets/images/ShoeIcon.jsx'
import SearchIcon from '../../assets/images/SearchIcon.jsx'
import ShoppingCartIcon from '../../assets/images/ShoppingCartIcon.jsx'
import {NavLinks, Searchbox} from './NavLinks.jsx'
import { useState } from 'react'
import {getData} from '../../api/getData.js'
import { useNavigate } from "react-router-dom";


export default function Navbar(props) {
    const [showSearch, setShowSearch] = useState(false)
    const navigate = useNavigate();

    function searchIconClicked() {
        if (showSearch) {
            // If search is open, fetch and then close
            async function fetchData() {
                const value = document.querySelector('input.search').value;
                navigate(`/search/${encodeURIComponent(value)}/1`);
                setShowSearch(false);
                let results = await getData('search', value);
                if(results.status === 'error') {props.setApiError(true)} else {props.setApiError(false)}
                results = results.data
                props.setSearchResults(results);
            }
            fetchData();
        } else {
            // If search is closed, just open it
            setShowSearch(true);
        }
    }

    return(
        <>
            <nav className='horizontal-flexbox' >
                <div className="name-and-logo horizontal-flexbox">
                    <ShoeIcon />
                    <h1 className='big-text biggest-font-weight' >StockXYZ</h1>
                </div>
                {!showSearch ? <NavLinks setApiError={props.setApiError} setCurrPage={props.setCurrPage} /> 
                : <Searchbox setShowSearch={setShowSearch} setApiError={props.setApiError} setSearchResults={props.setSearchResults} />
                }
                <div className="horizontal-flexbox">
                    <div className="icons horizontal-flexbox">
                        <span onClick={() => {searchIconClicked()}}>
                            <SearchIcon setShowSearch={setShowSearch} />
                        </span>
                        <span className="cart">
                            <ShoppingCartIcon />
                        </span>
                        <span className="theme pointer" onClick={() => {
                            props.setTheme(prev => prev === "🔆" ? "🌙" : "🔆");
                        }} >{props.theme}</span>
                    </div>
                    <button className="login avg-button pointer">Login</button>
                </div>
            </nav>
        </>
    )
}