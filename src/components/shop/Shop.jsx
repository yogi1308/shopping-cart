import ShopCards from './ShopCards'
import styles from './shop.module.css'
import {SkeletonCard} from '../Skeleton/SotdSkeleton'

export default function Shop(props) {
    return(
        <div>
            <div className={`horizontal-flexbox ${styles.shopSectionName}`}>
                <h5 className={`third-biggest-font-size second-biggest-font-weight ${styles.shopSection}`} >Most Popular</h5>
                <p className={`pointer`}>View More →</p>
            </div>
            <div className={styles.shopGrid}>
                {props.mostPopular
                    ? props.mostPopular.map((shoe) => <ShopCards key={shoe._id} shoe={shoe} setSelectedShoe={props.setSelectedShoe} />)
                    : Array.from({ length: 14 }).map((_, idx) => <SkeletonCard key={idx} />)}
            </div>
        </ div>
    )
}