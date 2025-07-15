import ShopCards from './ShopCards'
import styles from './shop.module.css'

// const num = 20

export default function Shop(props) {
    return(
        <div>
            <div className={`horizontal-flexbox ${styles.shopSectionName}`}>
                <h5 className={`third-biggest-font-size second-biggest-font-weight ${styles.shopSection}`} >Most Popular</h5>
                <p className={`pointer`}>View More →</p>
            </div>
            <div className={styles.shopGrid}>
                {props.mostPopular && (props.mostPopular.map((shoe) => <ShopCards key={shoe._id} shoe={shoe} />))}
                {/* {props.mostPopular.map({ length: num }, (_, index) => (
                    <ShopCards key={index} />
                ))} */}
            </div>
        </ div>
    )
}