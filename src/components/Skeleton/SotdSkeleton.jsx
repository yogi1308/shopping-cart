import styles from './skeleton.module.css'

export default function SotdSkeleton() {
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

{/* <div className="sneaker-otd vertical-flexbox">
                <h5 className="big-text horizontal-flexbox second-biggest-font-size second-biggest-font-weight">Sneaker of the Day</h5>
                <div className="card horizontal-flexbox">
                    <div className="card-text vertical-flexbox">
                        <h6 className="sneaker-of-the-day-name third-biggest-font-size second-biggest-font-weight">{props.sotd.sotdName}</h6>
                        <p>{props.sotd?.sotdDesc}</p>
                        <div className="cta horizontal-flexbox">
                            <button className="avg-button pointer">Explore More</button>
                            <button className="avg-button pointer">Check This Out</button>
                        </div>
                    </div>
                    <div className="sneaker-otd-image pointer"><img className='sneaker-otd-img' src={props.sotd?.sotdImg} alt="" srcset="" /></div>
                </div>
            </div> */}