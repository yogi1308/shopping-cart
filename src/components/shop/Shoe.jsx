import styles from './shop.module.css'

export default function Shoe() {
    return(
        <div className={`${styles.shoe} horizontal-flexbox`}>
            <img className={`${styles.shoeImg}`} src="https://images.stockx.com/images/Air-Jordan-4-Retro-White-Cement-2025-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1743628198" alt="" srcset="" />
            <div className={`${styles.shoeInfo} vertical-flexbox`}>
                <div className={`${styles.shoeCardInfo} horizontal-flexbox third-biggest-font-size biggest-font-weight`}>
                    <p>Jordan 4 Retro White Cement (2025)</p>
                    <p className={`${styles.price}`}>$300</p>
                </div>
                <div className="shoe-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, et cupiditate error dolore alias, iure tempora nam consequuntur, officiis asperiores doloremque nulla voluptate a ut obcaecati minima quae dolor expedita?</div>
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