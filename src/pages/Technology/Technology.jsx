import technologybg from '../../assets/svg/technologybg.jpg';
import { useState } from 'react';
import './Technology.scss'
import Rockets from '../../components/Rockets/Rockets';
import roc1 from '../../assets/svg/rockets/roc1.png'
import roc2 from '../../assets/svg/rockets/roc2.png'
import roc3 from '../../assets/svg/rockets/roc3.png'


function Technology() {

    const [rocket, setRocket] = useState(0)

    const rockets = [
        {
            id: 1,
            info: 'THE TERMINOLOGY…',
            name: 'LAUNCH VEHICLE',
            img: roc1,
            describtion: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring sight on the launch pad!',
        },
        {
            id: 2,
            info: 'THE TERMINOLOGY…',
            name: 'SPACEPORT',
            img: roc2,
            describtion: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        },
        {
            id: 3,
            info: 'THE TERMINOLOGY…',
            name: 'SPACE CAPSULE',
            img: roc3,
            describtion: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
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
        
    ]



    return (
        <main>
            <img className='header__banner banner2' src={technologybg} alt="" />
            <div className="rocket__container container">
                <div className='btns'>
                    <ul className='rockets__items'>
                        <li className='rockets__link'>
                            {tabs.map(({ id, title }, i) => (<div key={id} className={rocket === i ? 'active' : ''} onClick={() => setRocket(i)} >{title}</div>))}
                        </li>
                    </ul>
                </div>
            </div>
            <Rockets data={rockets[rocket]} />
        </main>
    )
}

export default Technology