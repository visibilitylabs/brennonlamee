import './Home.css';



const Home=()=>{
    return(
        <div>
            <div className="section-1">
                <div className="section-1-bg"></div>
                <div className="section-1-heading-container">
                    <div className="section-1-heading">
                        Boost Conversions and <span className='section-1-highlight' >Profits</span> with our expertise.

                    </div>
                    <div className="section-1-subheading">
                    Helping Business owners under 1 million in annual revenue increase their traffic conversion rates using expert analysis edit and implementation
                    </div>
                    <button className="section-1-cta">
                        <div className="section-1-cta-text">
                            Book a call with us
                        </div>
                        <div className="section-1-cta-icon">
                            <img src="/static/images/home/svg-10.svg" alt="svg" />
                        </div>
                    </button>
                </div>
                <div className="section-1-graphics">
                    <div className="section-1-static-image">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;

