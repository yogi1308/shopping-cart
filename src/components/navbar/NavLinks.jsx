export function NavLinks() {
    return(
        <div className="nav-links horizontal-flexbox appear-animation">
            <span className="home underline pointer">Home</span>
            <span className="shop underline pointer">Shop</span>
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