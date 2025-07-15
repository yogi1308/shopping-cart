import { Link } from "react-router-dom";

export function NavLinks(props) {
    return(
        <div className="nav-links horizontal-flexbox appear-animation">
            <Link to="../" style={{ textDecoration: 'none' }} className="home underline pointer" onClick={() => {props.setCurrPage('home')}}>Home</Link>
            <Link to="../shop" style={{ textDecoration: 'none' }} className="shop underline pointer" onClick={() => {props.setCurrPage('shop')}}>Shop</Link>
        </div>
    )
}

export function Searchbox(props) {
    return(
        <div className="searchbox">
            <input type="text" name="search" className="search" autoFocus="true" />
            <span className="close-search pointer" onClick={() => {props.setShowSearch(prev => prev = !prev); console.log('click')}} >X</span>
        </ div>
    )
}