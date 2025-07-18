import ShopCards from './ShopCards'
import styles from './shop.module.css'
import {SkeletonCard} from '../Skeleton/SotdSkeleton'
import { Link } from "react-router-dom";
import {getData} from '../../api/getData.js'

export default function Shop(props) {
    return(
        <div className={`vartical-flexbox ${styles.entireShop}`}>
            <div>
                <div className={`horizontal-flexbox ${styles.shopSectionName}`}>
                    <h5 className={`third-biggest-font-size second-biggest-font-weight ${styles.shopSection}`} >Most Popular</h5>
                    <Link to={`../search/most-popular/1`}
                    onClick={async() => {
                        props.setLoading(true)
                        props.setSearchThis(`Most Popular`)
                        let results = await getData('mostPopular', '', '', 200);
                        if(results.status === 'error') {props.setApiError(true)} else {props.setApiError(false)}
                        console.log(results)
                        props.setSearchResults(results);
                        props.setLoading(false)
                    }}>
                        <p className={`pointer`}>View More →</p>
                    </Link>
                </div>
                <div className={styles.shopGrid}>
                    {props.mostPopular && Array.isArray(props.mostPopular)
                        ? props.mostPopular.map((shoe) => <ShopCards key={shoe._id} shoe={shoe} setSelectedShoe={props.setSelectedShoe} />)
                        : Array.from({ length: 14 }).map((_, idx) => <SkeletonCard key={idx} />)}
                </div>
            </ div>
            <div>
                <div className={`horizontal-flexbox ${styles.shopSectionName}`}>
                    <h5 className={`third-biggest-font-size second-biggest-font-weight ${styles.shopSection}`} >Nike</h5>
                    <Link to={`../search/Nike/1`}
                    onClick={async() => {
                        props.setLoading(true)
                        props.setSearchThis(`Nike`)
                        let results = await getData('search', 'Nike', '1', 200);
                        console.log(results)
                        if(results.status === 'error') {props.setApiError(true)} else {props.setApiError(false)}
                        console.log(results)
                        props.setSearchResults(results);
                        props.setLoading(false)
                    }}>
                        <p className={`pointer`}>View More →</p>
                    </Link>
                </div>
                <div className={styles.shopGrid}>
                {props.nike && props.nike === 'error' ? ( <p>An error occurred while fetching data.</p>
                ) : (
                    Array.isArray(props.nike) ? (
                    props.nike.map((shoe) => (
                        <ShopCards key={shoe._id} shoe={shoe} setSelectedShoe={props.setSelectedShoe} />
                    ))
                    ) : (
                    Array.from({ length: 14 }).map((_, idx) => <SkeletonCard key={idx} />)
                    )
                )}
                </div>
            </div>
        </div>
    )
}