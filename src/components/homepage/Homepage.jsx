import './homepage.css'
export default function Homepage(props) {
    return(
        <>
            <div className="sneaker-otd vertical-flexbox">
                <h5 className="big-text horizontal-flexbox second-biggest-font-size second-biggest-font-weight">Sneaker of the Day</h5>
                <div className="card horizontal-flexbox">
                    <div className="card-text vertical-flexbox">
                        <h6 className="sneaker-of-the-day-name third-biggest-font-size second-biggest-font-weight">{props.sotd.sotdName}</h6>
                        <p>{props.sotd.sotdDesc}</p>
                        <div className="cta horizontal-flexbox">
                            <button className="avg-button pointer">Explore More</button>
                            <button className="avg-button pointer">Check This Out</button>
                        </div>
                    </div>
                    <div className="sneaker-otd-image pointer"><img className='sneaker-otd-img' src={props.sotd.sotdImg} alt="" srcset="" /></div>
                </div>
            </div>
            <div className="more-info-cards horizontal-flexbox">
                <div className="more-info smallest-font-size">
                    <div className="biggest-font-weight horizontal-flexbox" >
                        <svg className="stockx-icon css-u1lzlo"  width="1rem" focusable="false" viewBox="0 0 50 50"><path d="M22.9 31.1L17.2 25.4L18.7999 23.8L22.7999 27.9L31.1 18.8L32.7999 20.4L22.9 31.1Z" fill="currentColor"></path><path d="M25 45.3L20 40.4L13.1 41.4L11.9 34.5L5.69998 31.2L8.69998 25L5.59998 18.7L11.8 15.4L13 8.49998L19.9 9.49998L24.9 4.59998L29.9 9.49998L36.8 8.49998L38 15.4L44.2 18.7L41.3 25L44.4 31.3L38.2 34.6L37 41.5L30.1 40.5L25 45.3ZM20.8 38.1L25 42.2L29.2 38.1L35.1 38.9L36.1 33.1L41.3 30.3L38.7 25L41.3 19.7L36.1 16.9L35.1 11.1L29.2 11.9L25 7.79998L20.8 11.9L14.9 11.1L13.9 16.9L8.69998 19.7L11.3 25L8.69998 30.3L13.9 33.1L14.9 38.9L20.8 38.1Z" fill="currentColor"></path></svg>
                        Our Promise
                    </div>
                    Every item is verified by StockXYZ or Xpress ships directly from a StockXYZ Verified Seller.
                    <div className="learn-more pointer">Learn More</div>
                </div>
                <div className="more-info smallest-font-size">
                    <div className="biggest-font-weight  horizontal-flexbox" >
                        <svg className="stockx-icon css-u1lzlo" width="1rem"  focusable="false" viewBox="0 0 50 50"><path d="M25 44.2L24.6 44C9 38.4 8.5 26.5 8.5 26V9.69999L25 5.79999L41.5 9.69999V26C41.5 26.5 41.1 38.4 25.4 44L25 44.2ZM10.8 11.5V26C10.8 26.4 11.3 36.7 25 41.8C38.8 36.6 39.2 26.1 39.2 26V11.5L25 8.09999L10.8 11.5Z" fill="currentColor"></path><path d="M34.8002 21.8C34.8002 18.9 32.5002 16.6 29.6002 16.6C27.6002 16.6 26.1002 18.1 25.0002 19.7C23.9002 18 22.4002 16.6 20.4002 16.6C17.5002 16.6 15.2002 18.9 15.2002 21.8C15.2002 22.5 15.3002 23.1 15.5002 23.7C16.4002 26.7 24.9002 34.1 24.9002 34.1C24.9002 34.1 33.5002 26.7 34.3002 23.7C34.7002 23.1 34.8002 22.5 34.8002 21.8Z" fill="currentColor"></path></svg>
                        Buyer Promise
                    </div>
                    We stand behind every product sold on StockXYZ. If we make a mistake, we’ll make it right.
                    <div className="learn-more pointer">Learn More</div>
                </div>
                <div className="more-info smallest-font-size">
                    <div className="biggest-font-weight horizontal-flexbox" >
                        <svg className="stockx-icon css-u1lzlo" width="1rem" focusable="false" viewBox="0 0 50 50"><path d="M44.06 41.65H5.83002V20.18H44.06V41.65ZM8.08002 39.4H41.81V22.43H8.08002V39.4Z" fill="currentColor"></path><path d="M24.94 37.09C28.3476 37.09 31.11 34.3276 31.11 30.92C31.11 27.5124 28.3476 24.75 24.94 24.75C21.5324 24.75 18.77 27.5124 18.77 30.92C18.77 34.3276 21.5324 37.09 24.94 37.09Z" fill="currentColor"></path><path d="M39.91 14.26H9.98999V16.51H39.91V14.26Z" fill="currentColor"></path><path d="M36.87 8.34998H13.01V10.6H36.87V8.34998Z" fill="currentColor"></path><path d="M43.04 29.35C38.61 29.35 35 25.74 35 21.31H37.48C37.48 24.38 39.97 26.87 43.04 26.87V29.35Z" fill="currentColor"></path><path d="M37.48 40.53H35C35 36.1 38.61 32.49 43.04 32.49V34.97C39.98 34.97 37.48 37.46 37.48 40.53Z" fill="currentColor"></path><path d="M6.96002 29.35V26.87C10.03 26.87 12.52 24.38 12.52 21.31H15C15 25.74 11.39 29.35 6.96002 29.35Z" fill="currentColor"></path><path d="M15 40.53H12.52C12.52 37.46 10.02 34.97 6.96002 34.97V32.49C11.39 32.49 15 36.09 15 40.53Z" fill="currentColor"></path></svg>
                        Start Selling ASAP
                    </div>
                    You can start selling on StockXYZ in just a few clicks, no application process necessary.
                    <div className="learn-more pointer">Learn More</div>
                </div>
            </div>
        </>
    )
}