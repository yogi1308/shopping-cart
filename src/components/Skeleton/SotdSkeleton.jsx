import styles from './skeleton.module.css'

export function SotdSkeleton() {
    return(
        <div className={`${styles.sotdSkeleton}`}>
            <h5 className="big-text horizontal-flexbox second-biggest-font-size second-biggest-font-weight">Sneaker of the Day</h5>
            <div className={`${styles.sotdSkeletonTextAndImgContainer}`} >
                <div className={`vertical-flexbox ${styles.sotdSkeletonTextBox}`}>
                    <div className={`${styles.bigText}`}></div>
                    <div className={`vertical-flexbox ${styles.paraText}`}><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
                    <div className="horizontal-flexbox">
                        <button className="avg-button pointer">Explore More</button>
                        <button className="avg-button pointer">Check This Out</button>
                    </div>
                </div>
            </div>
            <div className={`${styles.sotdImage}`}></div>
        </div>
    )
}

export function SkeletonCard() {
    return(
        <div className={`vartical-flexbox ${styles.skeletonShopCard}`}>
            <div className={`${styles.cardImg}`}></div>
            <div className={`horizontal-flexbox ${styles.shopCardInfo}`}>
                <div className={`vertical-flexbox ${styles.shopCardName}`}>
                    <div className={`${styles.bigText}`}></div>
                    <div className={`${styles.bigText}`}></div>
                </div>
                <div className={`horizontal-flexbox`}>$<div className={` ${styles.bigText}`}></div></div>
            </div>
        </div>
    )
}