import './Rockets.scss'


const Rockets = ({ data }) => {

    return (
        <div className="container">
            <h2 className='rockets__title'><span className='rockets__txt'>03</span> SPACE LAUNCH 101 </h2>
            <div className="rockets__box">
                <div className="rockets__box__infobox">
                    <p className='rockets__box__txt'>{data.info}</p>
                    <h1 className='rockets__box__title'>{data.name}</h1>
                    <p className='rockets__box__txt'>{data.describtion}</p>
                </div>
                <div className="img__box">
                    <img className='rockets__box__banner' src={data.img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Rockets