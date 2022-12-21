import './Humens.scss'


const Humens = ({ data }) => {

    return (
        <div className="container">
            <h2 className='humens__title'><span className='humens__txt'>02</span> MEET YOUR CREW </h2>
            <div className="humens__box">
                <div className="humens__box__infobox">
                    <p className='humens__box__txt'>{data.info}</p>
                    <h1 className='humens__box__title'>{data.name}</h1>
                    <p className='humens__box__txt'>{data.describtion}</p>
                </div>
                <div className="img__box">
                    <img className='humens__box__banner' src={data.img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Humens