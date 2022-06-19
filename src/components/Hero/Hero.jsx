import React from "react";
import "./Hero.scss";

const Hero = ({ hero }) => {
  return (
    <div className='hero'>
      <div className='card'>
        <h1 className='name'>Hola , soy {hero.name}</h1>
        <h2 className='lastname'>{hero.lastname}</h2>
        <h2 className='job'>{hero.info}</h2>
        <a
          className='git'
          title='Github'
          href='https://github.com/JoseUH'
>
          <img
            src='https://github.githubassets.com/images/modules/logos_page/Octocat.png'
            alt='JoseUH'
          />
        </a>
        <a className='Link' title='Linkedin' href='https://www.linkedin.com/in/joseantoniogarciaarencon/'>
          <img
            src='https://www.trecebits.com/wp-content/uploads/2011/03/linkedin1.png'
            alt='JoseUH'
          />
        </a>
      </div>

      <div className='imagen'>
        <img src={hero.image} alt='' />
      </div>
    </div>
  );
};

export default Hero;
