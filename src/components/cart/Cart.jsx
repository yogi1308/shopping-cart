import styles from './cart.module.css'

export function Cart(props) {
    function calculateTotal(cart) {
        let total = 0;
        cart.map((obj) => {total += obj.count * obj.price})
        return total
    }
    return (
        <div className={`vertical-flexbox cartContainer`}>
            {props.cart.map((obj) => <CartItems obj={obj} key={obj.item._id} /> )}
            {props.cart.length === 0 && <div style={{textAlign: 'center'}} >You Haven't Added Anything To The Cart <br /> Go!!! Start Shopping</ div>}
            <div className={`biggest-font-weight ${styles.closeCart}`} onClick={() => props.setShowCart(false)} >X</div>
            <div className={`horizontal-flexbox ${styles.totalCart}`}>
                <div className="biggest-font-weight second-biggest-font-size">Total: </div>
                <div className="biggest-font-weight third-biggest-font-size" style={{color: 'var(--secondary-color)'}}>${calculateTotal(props.cart)}</div>
            </div>
        </div>
    )
}

function CartItems(props) {
    return(
        <div className={`horizontal-flexbox biggest-font-weight ${styles.cartItem}`}>
            <div className={`${styles.itemImgContainer}`} data-content={`${props.obj.count}`} ><img src={props.obj.img} alt="" className={`${styles.itemImg}`} /></div>
            <div className={` horizontal-flexbox ${styles.cartItemInfoContainer}`}>
                <div>{props.obj.name}</div>
                <div className={`${styles.cartItemPrice}`} style={{color: 'var(--secondary-color)'}}>${props.obj.price}</div>
            </div>
        </div>
    )
}