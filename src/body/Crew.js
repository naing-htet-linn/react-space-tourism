import React, { useState } from 'react';
import './crew.css';

const crews = [
  {
    name: 'Douglas Hurley',
    image: require('../assets/crew/image-douglas-hurley.png'),
    role: 'Commander',
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  {
    name: 'Mark Shuttleworth',
    image: require('../assets/crew/image-mark-shuttleworth.png'),
    role: 'Mission Specialist',
    bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  {
    name: 'Victor Glover',
    image: require('../assets/crew/image-victor-glover.png'),
    role: 'Pilot',
    bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
  },
  {
    name: 'Anousheh Ansari',
    image: require('../assets/crew/image-anousheh-ansari.png'),
    role: 'Flight Engineer',
    bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
  },
];
const Crew = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const crewData = crews[currentNum];

  return (
    <section id="crew">
      <h5 className="text-white">
        <span>02</span>meet your crew
      </h5>
      <div className="crew-first">
        <div className="about-crew">
          <h4 className="role">{crewData.role}</h4>
          <h4 className="text-white">{crewData.name}</h4>
          <p className="text-blue">{crewData.bio}</p>
        </div>
        <div className="crew-menu">
          {crews.map((crew, index) => {
            return (
              <span
                key={index}
                className={currentNum === index ? 'activeCrew' : ''}
                onClick={() => setCurrentNum(index)}
              ></span>
            );
          })}
        </div>
      </div>
      <div className="crew-second">
        <img src={crewData.image} alt={crewData.name} />
      </div>
    </section>
  );
};
export default Crew;
