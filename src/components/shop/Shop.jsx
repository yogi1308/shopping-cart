import ShopCards from './ShopCards'
import styles from './shop.module.css'
import {SkeletonCard} from '../Skeleton/SotdSkeleton'

export default function Shop(props) {
    // function viewMore(moreOfThis) {
    //     let totalItems = 0
    //     let allItems = []
    //     if (moreOfThis === 'mostPopular') {
    //         props.mostPopular.map((shoe) => {allItems.push(shoe); ++totalItems;})
    //     }

    // }
    return(
        <div>
            <div className={`horizontal-flexbox ${styles.shopSectionName}`}>
                <h5 className={`third-biggest-font-size second-biggest-font-weight ${styles.shopSection}`} >Most Popular</h5>
                <p className={`pointer`} onClick={() => viewMore('mostPopular')} >View More →</p>
            </div>
            <div className={styles.shopGrid}>
                {props.mostPopular
                    ? props.mostPopular.map((shoe) => <ShopCards key={shoe._id} shoe={shoe} />)
                    : Array.from({ length: 14 }).map((_, idx) => <SkeletonCard key={idx} />)}
            </div>
        </ div>
    )
}