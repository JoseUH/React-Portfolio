import React from "react";
import "./Proyectos.scss";

const Proyectos = () => {
  return (
    <div className='mi'>
      <div className='i1'>
        <iframe
          src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6942006239086174208?compact=1'
          allowFullScreen=''
          title='Publicación 1'></iframe>
      </div>

      <div className='i2'>
        <iframe
          src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6940039412663644160?compact=1'
          allowFullScreen=''
          title='Publicación 2'></iframe>
      </div>

      <div className='i3'>
        <iframe
          src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6939861883013242880?compact=1'
          allowFullScreen=''
          title='Publicación 3'></iframe>
      </div>

      <div className='i4'>
        <iframe
          src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6938938483931541504?compact=1'
          allowFullScreen=''
          title='Publicación 4'></iframe>
      </div>
    </div>
  );
};

export default Proyectos;
