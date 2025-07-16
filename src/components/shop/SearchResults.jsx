import styles from './shop.module.css'
import ShopCards from './ShopCards'
import {SkeletonCard} from '../Skeleton/SotdSkeleton'

export function SearchResults(props) {
    return(
        <div>
            <div className={`${styles.shopSectionName}`}>
                <h5 className={`third-biggest-font-size second-biggest-font-weight ${styles.shopSection}`} >Search Results for: "{props.searchThis || props.searchResults?.query}"</h5>
                {props.loading && <p className={`third-biggest-font-size second-biggest-font-weight ${styles.loadContainer}`}>
                    Loading
                    <span className={styles.dots}>
                        <span className={styles.load}>.</span>
                        <span className={styles.load}>.</span>
                        <span className={styles.load}>.</span>
                    </span>
                </p>}
            </div>
            <div className={styles.searchGrid}>
                {props.searchResults
                    ? props.searchResults.products.length > 0
                        ? props.searchResults.products.map((shoe) => <ShopCards key={shoe._id} shoe={shoe} setShoe={props.setShoe} />)
                        : <div>No products found.</div>
                    : Array.from({ length: 14 }).map((_, idx) => <SkeletonCard key={idx} />)
                }
            </div>
        </ div>
    )
}