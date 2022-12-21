import './Crew.scss'
import { useState } from 'react';
import crewbg from '../../assets/svg/crewbg.png';
import hum1 from '../../assets/svg/humens/hum1.png'
import hum2 from '../../assets/svg/humens/hum2.png'
import hum3 from '../../assets/svg/humens/hum3.png'
import hum4 from '../../assets/svg/humens/hum4.png'
import Humens from '../../components/Humens/Humens';

function Crew() {

    const [humen, setHumen] = useState(0)

    const humens = [
        {
            id: 1,
            info: 'Commander',
            name: 'Douglas Hurley',
            img: hum1,
            describtion: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.American engineer, former Marine',
        },
        {
            id: 2,
            info: 'Mission Specialist ',
            name: 'MARK SHUTTLEWORTH',
            img: hum2,
            describtion: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        },
        {
            id: 3,
            info: 'PILOT',
            name: 'Victor Glover',
            img: hum3,
            describtion: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        },
        {
            id: 4,
            info: 'Flight Engineer',
            name: 'Anousheh Ansari',
            img: hum4,
            describtion: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
        },
    ]
    const tabs = [
        {
            id: 1,
            title: '1'
        },
        {
            id: 2,
            title: '2'
        },
        {
            id: 3,
            title: '3'
        },
        {
            id: 4,
            title: '4'
        },
    ]

    return (
        <main>
            <img className='header__banner crewbg' src={crewbg} alt="" />
            <div className="humen__container container">
                <div className='btns'>
                    <ul className='humens__items'>
                        <li className='humens__link'>
                            {tabs.map(({ id, title }, i) => (<div key={id} className={humen === i ? 'active' : ''} onClick={() => setHumen(i)} >{title}</div>))}
                        </li>
                    </ul>
                </div>
            </div>
            <Humens data={humens[humen]} />
        </main>
    )
}

export default Crew