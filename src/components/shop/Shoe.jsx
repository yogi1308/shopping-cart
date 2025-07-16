import styles from './shop.module.css'

export default function Shoe() {
    return(
        <div className={`${styles.shoe} horizontal-flexbox`}>
            <img className={`${styles.shoeImg}`} src={JSON.parse(localStorage.getItem('selectedShoe')).thumbnail} alt="" srcset="" />
            <div className={`${styles.shoeInfo} vertical-flexbox`}>
                <div className={`${styles.shoeCardInfo} horizontal-flexbox third-biggest-font-size biggest-font-weight`}>
                    <p>{JSON.parse(localStorage.getItem('selectedShoe')).shoeName}</p>
                    <p className={`${styles.price}`}>${JSON.parse(localStorage.getItem('selectedShoe'))?.retailPrice || JSON.parse(localStorage.getItem('selectedShoe')).lowestResellPrice?.goat || JSON.parse(localStorage.getItem('selectedShoe')).lowestResellPrice?.stockX || JSON.parse(localStorage.getItem('selectedShoe')).lowestResellPrice.flightClub || JSON.parse(localStorage.getItem('selectedShoe')).lowestResellPrice.stadiumGoods}</p>
                </div>
                <div className="shoe-desc">{JSON.parse(localStorage.getItem('selectedShoe'))?.description} No Product Description Found</div>
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