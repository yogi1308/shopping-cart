import './navbar.css'
import ShoeIcon from '../../assets/images/ShoeIcon.jsx'
import SearchIcon from '../../assets/images/SearchIcon.jsx'
import ShoppingCartIcon from '../../assets/images/ShoppingCartIcon.jsx'
import {NavLinks, Searchbox} from './NavLinks.jsx'
import { useState } from 'react'

export default function Navbar(props) {
    const [showSearch, setShowSearch] = useState(false)

    function searchIconClicked() {
        setShowSearch(prev => prev = !prev)
    }

    return(
        <>
            <nav className='horizontal-flexbox' >
                <div className="name-and-logo horizontal-flexbox">
                    <ShoeIcon />
                    <h1 className='big-text biggest-font-weight' >StockXYZ</h1>
                </div>
                {!showSearch ? <NavLinks setCurrPage={props.setCurrPage} /> 
                : <Searchbox setShowSearch={setShowSearch} />
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