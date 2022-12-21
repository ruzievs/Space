import './Planets.scss'

const Planets = ({ data }) => {

    return (
        <div className="container">
            <div className="planets__box">
                <div className="planets__box__infobox">
                    <h1 className='planets__box__title'>{data.info}</h1>
                    <p className='planets__box__txt'>{data.describtion}</p>
                    <div className="planets__box__info2">
                        <p className='planets__box__txt'>AVG. DISTANCE<br />{data.distance}</p>
                        <p className='planets__box__txt'>Est. travel time<br />{data.time}</p>
                    </div>
                </div>
            </div>
            <div className="img__box">
                <h2 className='planets__title'><span className='planets__txt'>01</span> PICK YOUR DESTINATION</h2>
                <img className='planets__box__banner' src={data.img} alt="" />
            </div>

        </div>
    )
}

export default Planets