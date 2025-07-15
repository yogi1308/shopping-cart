import ShopCards from './ShopCards'
import styles from './shop.module.css'

const num = 20

export default function Shop() {
    return(
        <div>
            <h5 className={`third-biggest-font-size second-biggest-font-weight ${styles.shopSection}`} >Most Popular</h5>
            <div className={styles.shopGrid}>
                {Array.from({ length: num }, (_, index) => (
                    <ShopCards key={index} />
                ))}
            </div>
        </ div>
    )
}