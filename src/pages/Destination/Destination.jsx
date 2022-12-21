import destinationbg from '../../assets/svg/planets.jpg'
import { useState } from 'react';
import '../Destination/Destination.scss';
import moon from '../../assets/svg/planets/moon.png'
import mars from '../../assets/svg/planets/mars.png'
import europa from '../../assets/svg/planets/europa.png'
import titan from '../../assets/svg/planets/titan.png'
import Planets from '../../components/Planets/Planets';




function Destination({ data }) {

    const [planet, setPlanet] = useState(0)

    const planets = [
        {
            id: 1,
            info: 'MOON',
            img: moon,
            describtion: 'See our planet as you ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While youre there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
            distance: '384,400 km',
            time: '3 days',
        },
        {
            id: 2,
            info: 'MARS',
            img: mars,
            describtion: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! wo and a half times the size of Everest!' ,
            distance: '225 MIL. km',
            time: '9 months',
        },
        {
            id: 3,
            info: 'EUROPA',
            img: europa,
            describtion: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
            distance: '628 MIL. km',
            time: '3 years',
        },
        {
            id: 4,
            info: 'TITAN',
            img: titan,
            describtion: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
            distance: '1.6 BIL. km',
            time: '7 years',
        },
    ]

    const tabs = [
        {
            id: 1,
            title: 'MOON'
        },
        {
            id: 2,
            title: 'MARS'
        },
        {
            id: 3,
            title: 'EUROPA'
        },
        {
            id: 4,
            title: 'TITAN'
        }
    ]

    return (
        <main className='home' style={{ backgroundImage: ` url(${destinationbg})` }} >
            <div className="planet__container container">
                <div className='btns'>
                    <ul className='planets__items'>
                        <li className='planets__link'>
                            {tabs.map(({ id, title }, i) => (<div key={id} className={planet === i ? 'active' : ''} onClick={() => setPlanet(i)} >{title}</div>))}
                        </li>
                    </ul>
                </div>
            </div>
            <Planets data={planets[planet]} />


        </main>
    )
}

export default Destination







{/* <section>

    <div className="container">
        {data.map(({ id, info, img, describtion, distance, time }) => (
            <div key={id} className="planets__box">
                <div className="planets__box__infobox">
                    <h1 className='planets__box__title'>{info}</h1>
                    <p className='planets__box__txt'>{describtion}</p>
                    <div className="planets__box__info2">
                        <p className='planets__box__txt'>AVG. DISTANCE<br />{distance}</p>
                        <p className='planets__box__txt'>Est. travel time<br />{time}</p>
                    </div>
                </div>
                <img className='planets__box__banner' src={img.moon} alt="" />
            </div>
        ))}

    </div>
</section> */}