import './homepage.css'

export default function Homepage() {
    return(
        <div className="sneaker-otd vertical-flexbox">
            <h5 className="big-text horizontal-flexbox third-biggest-font-weight">Sneaker of the Day</h5>
            <div className="card horizontal-flexbox">
                <div className="card-text vertical-flexbox">
                    <h6 className="sneaker-of-the-day-name third-biggest-font-size second-biggest-font-weight">Air Jordan 6: Retro</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, consectetur itaque dicta veritatis soluta ad quos, unde corporis veniam eligendi vel id inventore consequatur quas quis iusto? Veritatis, esse necessitatibus?</p>
                    <div className="cta horizontal-flexbox">
                        <button className="avg-button pointer">Explore More</button>
                        <button className="avg-button pointer">Check This Out</button>
                    </div>
                </div>
                <div className="sneaker-otd-image pointer"><img src="https://images.stockx.com/images/Air-Jordan-4-Retro-White-Cement-2025-Product.jpg?fit=fill&bg=FFFFFF&w=150&h=75&q=57&dpr=2&trim=color&updated_at=1743628198" alt="" srcset="" /></div>
            </div>
        </div>
    )
}