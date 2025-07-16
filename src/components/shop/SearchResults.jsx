import styles from './shop.module.css'
import ShopCards from './ShopCards'
import {SkeletonCard} from '../Skeleton/SotdSkeleton'

export function SearchResults(props) {
    return(
        <div>
            <div className={`${styles.shopSectionName}`}>
                <h5 className={`third-biggest-font-size second-biggest-font-weight ${styles.shopSection}`} >Search Results for: "{props.searchResults?.query}"</h5>
            </div>
            <div className={styles.searchGrid}>
                {props.searchResults
                    ? props.searchResults.products.map((shoe) => <ShopCards key={shoe._id} shoe={shoe} />)
                    : Array.from({ length: 14 }).map((_, idx) => <SkeletonCard key={idx} />)}
            </div>
        </ div>
    )
}