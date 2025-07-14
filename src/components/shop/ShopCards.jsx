import styles from './shop.module.css'
import Shoe from './Shoe'
import { Link } from "react-router-dom";

export default function ShopCards() {
    return(
        <Link to="./shoe" className={` link vertical-flexbox pointer avg-button ${styles.card}`}>
            <img src="https://images.stockx.com/images/Air-Jordan-4-Retro-White-Cement-2025-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1743628198" alt="" srcset="" />
            <div className={`horizontal-flexbox biggest-font-weight ${styles.sneakerCardInfo}`}>
                <p>Jordan 4 Retro White Cement (2025)</p>
                <p className={`biggest-font-weight ${styles.price} `}>$300</p>
            </div>
        </Link>
    )
}