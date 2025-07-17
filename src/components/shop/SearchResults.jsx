import styles from './shop.module.css'
import ShopCards from './ShopCards'
import {SkeletonCard} from '../Skeleton/SotdSkeleton'
import {useState, useEffect} from 'react'
import {getData} from '../../api/getData.js'
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export function SearchResults(props) {
    const [page, setPage] = useState(1)
    const location = useLocation();
    useEffect(() => {
        if (page === 1 && location.pathname.split('/')?.at(3) > 1) {
            setPage(Number(location.pathname.split('/')?.at(3)))
        }
    }, [page])

    const navigate = useNavigate();

    async function getNextPage(thisPage) {
        const value = props.searchThis
        navigate(`/search/${encodeURIComponent(value)}/${thisPage}`);
        let results = await getData('search', value, thisPage);
        props.setSearchResults(results.data);
        console.log(results)
    }
    
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
                        ? props.searchResults.products.map((shoe) => <ShopCards key={shoe._id} shoe={shoe} setSelectedShoe={props.setSelectedShoe} />)
                        : <div>No products found.</div>
                    : Array.from({ length: 14 }).map((_, idx) => <SkeletonCard key={idx} />)
                }
            </div>
            <div className={`horizontal-flexbox pointer ${styles.pagination}`}>
                {page !== 1 && <span onClick={() => {setPage(prev => {getNextPage(prev - 1); return prev - 1})}}>‹</span>} 
                {page - 3 > 0 && <span onClick={() => {setPage(prev => {getNextPage(prev - 3); return prev - 3})}}>{page - 3}</span>} 
                {page - 2 > 0 && <span onClick={() => {setPage(prev => {getNextPage(prev - 2); return prev - 2})}}>{page - 2}</span>} 
                {page - 1 > 0 && <span onClick={() => {setPage(prev => {getNextPage(prev - 1); return prev - 1})}}>{page - 1}</span>} 
                <span className={` ${styles.current}`}>{page}</span>
                <span onClick={() => {setPage(prev => {getNextPage(prev + 1); return prev + 1})}}>{page+1}</span>
                <span onClick={() => {setPage(prev => {getNextPage(prev + 2); return prev + 2})}}>{page+2}</span>
                <span onClick={() => {setPage(prev => {getNextPage(prev + 3); return prev + 3})}}>{page+3}</span>
                <span onClick={() => {setPage(prev => {getNextPage(prev + 1); return prev + 1})}}>›</span>
            </div>
            {props.loading && <p className={`third-biggest-font-size second-biggest-font-weight ${styles.loadContainer}`}>
                Loading
                <span className={styles.dots}>
                    <span className={styles.load}>.</span>
                    <span className={styles.load}>.</span>
                    <span className={styles.load}>.</span>
                </span>
            </p>}
        </div>
    )
}