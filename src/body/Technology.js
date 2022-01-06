import React, { useState, useEffect } from 'react';
import './technology.css';

const technology = [
  {
    name: 'Launch vehicle',
    images: {
      portrait: require('../assets/technology/image-launch-vehicle-portrait.jpg'),
      landscape: require('../assets/technology/image-launch-vehicle-landscape.jpg'),
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: 'Spaceport',
    images: {
      portrait: require('../assets/technology/image-spaceport-portrait.jpg'),
      landscape: require('../assets/technology/image-spaceport-landscape.jpg'),
    },
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  },
  {
    name: 'Space capsule',
    images: {
      portrait: require('../assets/technology/image-space-capsule-portrait.jpg'),
      landscape: require('../assets/technology/image-space-capsule-landscape.jpg'),
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
const Technology = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const technologyData = technology[currentNum];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handler = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return (
    <section id="technology">
      <h5 className="text-white">
        <span>03</span>space launch 101
      </h5>
      <div className="tech-first d-flex ai-center">
        <div className="tech-menu">
          {technology.map((tech, index) => {
            return (
              <span
                className={
                  'text-white ' + (index === currentNum ? 'active-tech' : '')
                }
                key={index}
                onClick={() => setCurrentNum(index)}
              >
                {index + 1}
              </span>
            );
          })}
        </div>
        <div className="about-tech">
          <p className="sub-2 text-blue">the terminology...</p>
          <h3 className="text-white">{technologyData.name}</h3>
          <p className="text-blue">{technologyData.description}</p>
        </div>
      </div>
      <div className="tech-second">
        {windowWidth > 991 ? (
          <img src={technologyData.images.portrait} alt={technologyData.name} />
        ) : (
          <img
            src={technologyData.images.landscape}
            alt={technologyData.name}
          />
        )}
      </div>
    </section>
  );
};
export default Technology;
