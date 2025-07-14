import './navbar.css'
import '../../index.css'
import logo from '../../assets/images/shopping-outline.svg'
import SearchIcon from '../../assets/images/SearchIcon.jsx'
import ShoppingCartIcon from '../../assets/images/ShoppingCartIcon.jsx'
import NavLinks from './NavLinks.jsx'
import { useState } from 'react'

export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false)

    function searchIconClicked() {
        setShowSearch(prev => prev = !prev)
        console.log(showSearch)
    }

    return(
        <>
            <nav className='horizontal-flexbox' >
                <div className="name-and-logo horizontal-flexbox">
                    <img src={logo} style={{transform: "scaleX(-1)"}}></img>
                    <h1 className='big-text' >StockXYZ</h1>
                </div>
                {!showSearch ? <NavLinks /> 
                : <input type="text" name="search" className="search" autoFocus="true" />
                }
                <div className="horizontal-flexbox">
                    <div className="icons horizontal-flexbox">
                        <span onClick={() => {console.log('click');searchIconClicked()}}>
                            <SearchIcon />
                        </span>
                        <ShoppingCartIcon />
                    </div>
                    <button className="login avg-button pointer">Login</button>
                </div>
            </nav>
        </>
    )
}