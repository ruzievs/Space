
import homebg from '../../assets/svg/earth.jpg';
import './Home.scss'

function Home() {
    return (
        <main>
            <img className='header__banner' src={homebg} alt="" />
            <section>
                <div className="container">
                    <div className="info__box">
                        <div className="info__titels">
                            <div className="info__title-txt">SO, YOU WANT TO TRAVEL TO</div>
                            <div className="info__title-title">SPACE</div>
                            <div className="info__title-txt2">Let s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we will give you a truly out of this world experience!</div>
                        </div>
                        <div className="info__btn"><a href="/">explore</a></div>
                    </div>
                </div>
            </section>

            
        </main>
    )
}

export default Home

