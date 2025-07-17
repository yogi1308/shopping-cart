import styles from './shop.module.css'
import ShopCards from './ShopCards'
import {SkeletonCard} from '../Skeleton/SotdSkeleton'
import {useState, useEffect} from 'react'
import {getData} from '../../api/getData.js'
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
 
const  PAGE_SIZE = 15

export function SearchResults(props) {
    const [page, setPage] = useState(1)
    const location = useLocation();
    const [start, setStart] = useState(40)
    const [maxPage, setMaxPage] = useState(1);
    useEffect(() => {
        setPage(Number(location.pathname.split('/')?.at(3)))
    }, [page, location.pathname])

    useEffect(() => {
        setStart(location.pathname.split('/')?.at(3) * 15 - 15)
    }, [start, location.pathname])

    useEffect(() => {
        if (Array.isArray(props.searchResults)) {
            setMaxPage(Math.ceil(props.searchResults.length / PAGE_SIZE));
        }
    }, [props.searchResults]);

    const navigate = useNavigate();

    async function getNextPage(thisPage) {
        if (Array.isArray(props.searchResults)) {
            navigate(`/search/most-popular/${thisPage}`);
            if (props.searchResults?.slice(start + 15, start + 30).length > 0) {
                setStart(prev => prev + 40) 
            }
            return
        }
        const value = props.searchThis
        navigate(`/search/${encodeURIComponent(value)}/${thisPage}`);
        let results = await getData('search', value, thisPage);
        props.setSearchResults(results.data);
        console.log(results)
    }
    return(
        <div>
            <div className={`${styles.shopSectionName}`}>
                {props.searchThis.includes('Popular') || props.searchResults?.query?.includes('popular')
                    ? <h5 className={`third-biggest-font-size second-biggest-font-weight ${styles.shopSection}`}>Most Popular</h5>
                    : props.searchThis.includes('similar') || props.searchResults?.query?.includes('similar') || props.searchThis.includes('%') || props.searchResults?.query?.includes('%')
                        ? <h5 className={`third-biggest-font-size second-biggest-font-weight ${styles.shopSection}`}>Similar To: "{props.searchThis.split(', ').at(1)}"</h5>
                        : <h5 className={`third-biggest-font-size second-biggest-font-weight ${styles.shopSection}`}>Search Results for: "{props.searchResults?.query || props.searchThis}"</h5>}
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
                {props.loading
                    ? Array.from({ length: 14 }).map((_, idx) => <SkeletonCard key={idx} />)
                    : props.searchResults?.products?.length > 0
                        ? props.searchResults.products.map((shoe) => <ShopCards key={shoe._id} shoe={shoe} setSelectedShoe={props.setSelectedShoe} />)
                        : props.searchResults?.length > 0
                            ? props.searchResults.slice(start, start + 15).map((shoe) => <ShopCards key={shoe._id} shoe={shoe} setSelectedShoe={props.setSelectedShoe} />)
                            : <div style={{marginLeft: '0.5rem'}} >No products found.</div>
                }
            </div>
            <div className={`horizontal-flexbox pointer ${styles.pagination}`}>
                {page !== 1 && <span onClick={() => {setPage(prev => {getNextPage(prev - 1); return prev - 1})}}>‹</span>} 
                {page - 3 > 0 && <span onClick={() => {setPage(prev => {getNextPage(prev - 3); return prev - 3})}}>{page - 3}</span>} 
                {page - 2 > 0 && <span onClick={() => {setPage(prev => {getNextPage(prev - 2); return prev - 2})}}>{page - 2}</span>} 
                {page - 1 > 0 && <span onClick={() => {setPage(prev => {getNextPage(prev - 1); return prev - 1})}}>{page - 1}</span>} 
                <span className={` ${styles.current}`}>{page}</span>
                {page + 1 <= maxPage && <span onClick={() => {setPage(prev => {getNextPage(prev + 1); return prev + 1})}}>{page+1}</span>}
                {page + 2 <= maxPage && <span onClick={() => {setPage(prev => {getNextPage(prev + 2); return prev + 2})}}>{page+2}</span>}
                {page + 3 <= maxPage && <span onClick={() => {setPage(prev => {getNextPage(prev + 3); return prev + 3})}}>{page+3}</span>}
                {page < maxPage && <span onClick={() => {setPage(prev => {getNextPage(prev + 1); return prev + 1})}}>›</span>}
            </div>
            {props.loading && <p className={`third-biggest-font-size second-biggest-font-weight ${styles.loadContainer} ${styles.loadBottom}`}>
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