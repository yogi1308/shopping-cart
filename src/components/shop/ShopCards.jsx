import styles from './shop.module.css'
import { Link } from "react-router-dom";
import noImageFound from '../../assets/images/no-image-found1.png'

export default function ShopCards(props) {
    return(
        <Link to={`./${encodeURIComponent(props.shoe.shoeName)}`} onClick={() => localStorage.setItem('selectedShoe', JSON.stringify(props.shoe))} className={` link vertical-flexbox pointer avg-button ${styles.card}`}>
            <img src={props.shoe?.thumbnail || props.shoe?.featured_image || noImageFound} alt="" srcset="" />
            <div className={`horizontal-flexbox biggest-font-weight ${styles.sneakerCardInfo}`}>
                <p>{props.shoe?.shoeName || props.shoe?.title}</p>
                <p className={`biggest-font-weight ${styles.price} `}>${props.shoe?.retailPrice ? (props.shoe.retailPrice) : (props.shoe.lowestResellPrice?.goat || props.shoe.lowestResellPrice?.stockX || props.shoe.lowestResellPrice?.flightClub || props.shoe.lowestResellPrice?.stadiumGoods || props.shoe.price)}</p>
            </div>
        </Link>
    )
}