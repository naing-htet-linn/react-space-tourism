import React, { useState } from 'react';
import './destination.css';

const destinations = [
  {
    name: 'Moon',
    image: require('../assets/destination/image-moon.png'),
    description:
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    travel: '3 days',
  },
  {
    name: 'Mars',
    image: require('../assets/destination/image-mars.png'),
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 mil. km',
    travel: '9 months',
  },
  {
    name: 'Europa',
    image: require('../assets/destination/image-europa.png'),
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 mil. km',
    travel: '3 years',
  },
  {
    name: 'Titan',
    image: require('../assets/destination/image-titan.png'),
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 bil. km',
    travel: '7 years',
  },
];
const Destination = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const currentData = destinations[currentNum];

  return (
    <section id="destination">
      <h5 className="text-white">
        <span>01</span>pick your destination
      </h5>
      <div className="des-first">
        <img src={currentData.image} alt={currentData.name} />
      </div>
      <div className="des-second">
        <div className="des-menu">
          <ul className="d-flex">
            {destinations.map((des, index) => {
              return (
                <li
                  key={index}
                  className={
                    'text-blue ' + (currentNum === index ? 'activeDes' : '')
                  }
                  onClick={() => setCurrentNum(index)}
                >
                  {des.name}
                </li>
              );
            })}
          </ul>
        </div>
        <h2 className="text-white">{currentData.name}</h2>
        <p className="text-blue">{currentData.description}</p>
        <div className="line"></div>
        <article className="d-flex">
          <div>
            <p className="sub-2 text-blue">avg, distance</p>
            <p className="sub-1 text-white">{currentData.distance}</p>
          </div>
          <div>
            <p className="sub-2 text-blue">est, travel time</p>
            <p className="sub-1 text-white">{currentData.travel}</p>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Destination;
