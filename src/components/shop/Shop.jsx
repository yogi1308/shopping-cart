import ShopCards from './ShopCards'
import '../../index.css'
import styles from './shop.module.css'

const num = 20

export default function Shop() {
    return(
        <>
        <div className={styles.shopGrid}>
            {Array.from({ length: num }, (_, index) => (
                <ShopCards key={index} />
            ))}
        </div>
        </>
    )
}