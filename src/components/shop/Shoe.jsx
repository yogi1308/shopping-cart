import styles from './shop.module.css'
import noImageFound from '../../assets/images/no-image-found1.png'
import { useMemo } from 'react';

export default function Shoe(props) {
    function stripHtml(html) {
        return html ? html.replace(/<[^>]*>?/gm, '') : '';
    }
    const selectedShoe = useMemo(() => {
        // Use prop if available, otherwise fallback to localStorage
        if (props.selectedShoe) {
            return props.selectedShoe;
        }
        try {return JSON.parse(localStorage.getItem('selectedShoe'));} 
        catch {return {};}
    }, [props.selectedShoe]);
    const description = stripHtml(selectedShoe?.description) || 'No Product Description Found';
 
    return(
        <div className={`${styles.shoe} horizontal-flexbox`}>
            <img className={`${styles.shoeImg}`} src={selectedShoe?.thumbnail || selectedShoe?.featured_image || noImageFound} alt="" srcset="" />
            <div className={`${styles.shoeInfo} vertical-flexbox`}>
                <div className={`${styles.shoeCardInfo} horizontal-flexbox third-biggest-font-size biggest-font-weight`}>
                    <p>{selectedShoe?.shoeName || selectedShoe?.title}</p>
                    <p className={`${styles.price}`}>${selectedShoe?.retailPrice || selectedShoe?.lowestResellPrice?.goat || selectedShoe?.lowestResellPrice?.stockX || selectedShoe?.lowestResellPrice?.flightClub || selectedShoe?.lowestResellPrice?.stadiumGoods || selectedShoe?.price}</p>
                </div>
                <div className="shoe-desc">Product Description: {description}</div>
                <div className={`${styles.shoeSize}`}>
                    <div className={`${styles.chooseSize} horizontal-flexbox`}>
                        Choose Size
                        <select name="size" id="">
                            <option value="UK">UK</option>
                            <option value="US">US</option>
                            <option value="AUS">AUS</option>
                            <option value="EU">EU</option>
                        </select>
                    </div>
                    <div className={`${styles.sizes} horizontal-flexbox`}>
                        <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                    </div>
                </div>
                <div className={`${styles.addToCart} horizontal-flexbox`}>
                    <div className={`${styles.number} horizontal-flexbox`}><span>-</span><input type="number" defaultValue="1" /><span>+</span></div>
                    <button className="avg-button">Add To Cart ↗</button>
                </div>
            </div>
        </div>
    )
}