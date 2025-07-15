import styles from './shop.module.css'
import { Link } from "react-router-dom";

export default function ShopCards(props) {
    return(
        <Link to="./shoe" className={` link vertical-flexbox pointer avg-button ${styles.card}`}>
            <img src={props.shoe?.thumbnail} alt="" srcset="" />
            <div className={`horizontal-flexbox biggest-font-weight ${styles.sneakerCardInfo}`}>
                <p>{props.shoe?.shoeName}</p>
                <p className={`biggest-font-weight ${styles.price} `}>${props.shoe?.retailPrice ? (props.shoe.retailPrice) : (props.shoe.lowestResellPrice?.goat || props.shoe.lowestResellPrice?.stockX || props.shoe.lowestResellPrice.flightClub || props.shoe.lowestResellPrice.stadiumGoods)}</p>
            </div>
        </Link>
    )
}