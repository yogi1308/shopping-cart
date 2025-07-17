import { Link, useNavigate } from "react-router-dom";
import {getData} from '../../api/getData.js'

export function NavLinks(props) {
    return(
        <div className="nav-links horizontal-flexbox appear-animation">
            <Link to="../" style={{ textDecoration: 'none' }} className="home underline pointer" onClick={() => {props.setApiError; props.setCurrPage('home')}}>Home</Link>
            <Link to="../shop" style={{ textDecoration: 'none' }} className="shop underline pointer" onClick={() => {props.setCurrPage('shop')}}>Shop</Link>
        </div>
    )
}

export function Searchbox(props) {
    const navigate = useNavigate();
    return(
        <div className="searchbox">
            <input type="text" name="search" className="search" autoFocus={true} 
                onKeyDown={async(e) => {
                    if (e.key === 'Enter') {
                        const value = document.querySelector('input.search').value;
                        props.setShowSearch(false)
                        navigate(`/search/${encodeURIComponent(value)}/1`);
                        let results = await getData('search', value);
                        if(results.status === 'error') {props.setApiError(true)} else {props.setApiError(false)}
                        results = results.data
                        props.setSearchResults(results);
                    }
                }} 
            />
            <span className="close-search pointer" onClick={() => {props.setShowSearch(prev => !prev); console.log('click')}} >X</span>
        </ div>
    )
}