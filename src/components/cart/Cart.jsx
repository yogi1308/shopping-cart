import styles from './cart.module.css'
import { Link } from "react-router-dom";

export function Cart(props) {
    function calculateTotal(cart) {
        let total = 0;
        cart.map((obj) => {total += obj.count * obj.price})
        return total
    }
    return (
        <div className={`vertical-flexbox cartContainer`}>
            {props.cart.map((obj) => <CartItems obj={obj} key={obj.item._id} setCart={props.setCart} setShowCart={props.setShowCart} setSelectedShoe={props.setSelectedShoe} />)}
            {props.cart.length === 0 && <div style={{textAlign: 'center'}} >You Haven't Added Anything To The Cart <br /> Go!!! Start Shopping!!!</ div>}
            <div className={`biggest-font-weight ${styles.closeCart}`} onClick={() => props.setShowCart(false)} >X</div>
            {props.cart.length !== 0 && <div className={`horizontal-flexbox ${styles.totalCart}`}>
                <div className="biggest-font-weight second-biggest-font-size">Total: </div>
                <div className="biggest-font-weight third-biggest-font-size" style={{color: 'var(--secondary-color)'}}>${calculateTotal(props.cart)}</div>
            </div>}
        </div>
    )
}

function CartItems(props) {
    return(
        <div className={`avg-button horizontal-flexbox biggest-font-weight ${styles.cartItem}`}>
                <div className={`avg-button ${styles.itemImgContainer}`} data-content={`${props.obj.count}`} >
                    <Link to={`/product/${props.obj.name}`} onClick={() => {
                            props.setSelectedShoe(props.obj.item);
                            props.setShowCart(false)
                            localStorage.setItem('selectedShoe', JSON.stringify(props.obj.item));
                            }}>
                        <img src={props.obj.img} alt="" className={`${styles.itemImg}`} />
                    </Link>
                </div>
            <div className={` horizontal-flexbox ${styles.cartItemInfoContainer}`}>
                <Link to={`/product/${props.obj.name}`} onClick={() => {
                        props.setSelectedShoe(props.obj.item);
                        props.setShowCart(false)
                        localStorage.setItem('selectedShoe', JSON.stringify(props.obj.item));
                    }}>
                    <div>{props.obj.name}</div>
                </Link>
                <div className="vertical-flexbox">
                    <div className={`${styles.cartItemPrice}`} style={{color: 'var(--secondary-color)'}}>${props.obj.price}</div>
                    <div className={`${styles.deleteCartItem}`} onClick={() => {props.setCart(prev => { return prev.filter((obj) => obj !== props.obj)})}} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" className={`${styles.deleteCartItemSvg}`} width="24px" style={{fill: 'var(--text-color)'}} ><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}