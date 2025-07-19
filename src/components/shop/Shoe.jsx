import styles from './shop.module.css'
import noImageFound from '../../assets/images/no-image-found1.png'
import { useMemo } from 'react';
import {SkeletonCard} from '../Skeleton/SotdSkeleton'
import ShopCards from './ShopCards'
import { Link } from "react-router-dom";
import {getData} from '../../api/getData.js'
import { useRef, useState, useEffect } from 'react';


export default function Shoe(props) {
    const sizesRef = useRef(null);
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

    const [inputValue, setInputValue] = useState(1);
    const [buttonLabel, setButtonLabel] = useState('Add To Cart');

    useEffect(() => {
    const existingItem = props.cart.find(obj => obj.item._id === selectedShoe._id || obj.item.shoeName === selectedShoe.shoeName);
    if (existingItem) {
        setInputValue(existingItem.count);
        setButtonLabel('Already in Cart');
    }
    }, [selectedShoe, props.cart]);
 
    return(<>
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
                    <div className={`${styles.sizes} horizontal-flexbox`} ref={sizesRef}>
                        {Array.from({ length: 24 }).map((_, idx) => <ShoeSize key={idx} size={idx + 1} sizesRef={sizesRef} />)}
                    </div>
                </div>
                <div className={`${styles.addToCart} horizontal-flexbox`}>
                    <div className={`${styles.number} horizontal-flexbox`}>
                        <span onClick={() => {setInputValue(prev => Math.max(1, prev - 1)); const existing = props.cart.find(obj => obj.item._id === selectedShoe._id || obj.item.shoeName === selectedShoe.shoeName);
                            if (existing) {
                            setButtonLabel('Update Cart');
                            } else {
                            setButtonLabel('Add To Cart');
                            }}}>-</span>
                        <input
                        className='number'
                        min="1"
                        type="number"
                        value={inputValue}
                        onChange={(e) => {
                            const value = Math.max(1, Number(e.target.value));
                            setInputValue(value);

                            const existing = props.cart.find(obj => obj.item._id === selectedShoe._id || obj.item.shoeName === selectedShoe.shoeName);
                            if (existing && existing.count !== value) {
                            setButtonLabel('Update Cart');
                            } else if (existing) {
                            setButtonLabel('Already in Cart');
                            } else {
                            setButtonLabel('Add To Cart');
                            }
                        }}
                        />
                        <span onClick={() => {setInputValue(prev => prev + 1);const existing = props.cart.find(obj => obj.item._id === selectedShoe._id || obj.item.shoeName === selectedShoe.shoeName);
                            if (existing) {
                            setButtonLabel('Update Cart');
                            } else {
                            setButtonLabel('Add To Cart');
                            }}}>+</span>
                    </div>
                    <button className="avg-button" onClick={() => {
                        const value = Number(document.querySelector('input.number').value);
                        document.querySelector('input.number').value = 1
                        props.setCart(prev => { const index = prev.findIndex(obj => obj.item._id === selectedShoe._id ||obj.item.shoeName === selectedShoe.shoeName); 
                            if (index !== -1) {return prev.map((obj, idx) => idx === index ? {...obj, count: value} : obj)} else {return [...prev, { item: selectedShoe, count: value, name: selectedShoe?.shoeName || selectedShoe?.title, img: selectedShoe?.thumbnail || selectedShoe?.featured_image || noImageFound, price: selectedShoe?.retailPrice || selectedShoe?.lowestResellPrice?.goat || selectedShoe?.lowestResellPrice?.stockX || selectedShoe?.lowestResellPrice?.flightClub || selectedShoe?.lowestResellPrice?.stadiumGoods || selectedShoe?.price}];}})
                            
                        setButtonLabel('Already in Cart');
                    }} >{buttonLabel + ' ↗'}</button>
                </div>
            </div>
        </div>
        <div>
            <div className={`horizontal-flexbox ${styles.shopSectionName}`}>
                <h5 className={`third-biggest-font-size second-biggest-font-weight ${styles.shopSection}`} >Similar Products</h5>
                <Link to={`../search/${JSON.parse(localStorage.getItem('selectedShoe')).shoeName?.split(' ', 3).join(' ')}/1`}
                    onClick={async() => {
                        let results = await getData('search', selectedShoe?.shoeName.split(' ', 3).join(' '));
                        if(results.status === 'error') {props.setApiError(true)} else {props.setApiError(false)}
                        results = results.data
                        props.setSearchThis(`similar, ${selectedShoe?.shoeName || selectedShoe?.title}`)
                        props.setSearchResults(results);
                    }} style={{ textDecoration: 'none' }}>
                    <p className={`pointer`} >View More →</p>
                </Link>
            </div>
            <div className={styles.shopGrid}>
                {props?.searchResults?.length > 0 && props.displaySimilar
                    ? props.searchResults?.map((shoe) => <ShopCards key={shoe._id} shoe={shoe} setSelectedShoe={props.setSelectedShoe} />)
                    : Array.from({ length: 14 }).map((_, idx) => <SkeletonCard key={idx} />)}
            </div>
        </ div>
        </>
    )
}

function ShoeSize(props) {
    const { size, sizesRef } = props;
    return (
        <span
            className={`${styles.sizeSpan}`}
            onClick={(e) => {
                if (sizesRef.current) {
                    sizesRef.current.querySelectorAll('span').forEach((span) =>
                        span.classList.remove(styles.sizeSelected)
                    );
                }
                e.target.classList.add(styles.sizeSelected);
            }}>
            {size}
        </span>
    );
}
