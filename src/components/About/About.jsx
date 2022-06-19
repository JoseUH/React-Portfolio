import React from 'react'
import "./About.scss"
const About = (about) => {
  return (
    <div className='padre'>
    
    <div className='texto'>
        <h2 className='idiomas'> Idiomas: </h2>
        <p> Aleman: B1 (telc) / B2 </p>
        <p> Ingles: B1 </p>
        <p> Español: Nativo </p>

    </div>

    <div className='texto1'>
    <img   className='perse'
            src='https://conseg.com.mx/wp-content/uploads/2019/04/para-pagina-2.png'
            alt='perseverancia'
          />
    </div>
    <div className='texto2'>
    <h2 className='Habilidades'> Habilidades: </h2>
        <p> Resolutivo </p>
        <p> Perseverante </p>
        <p> Versatil </p>
    </div>
    <div className='texto3'>
        <p>Algo que me define es la reinvención y adaptación a diferentes ambientes de trabajo. Por experiencia en distintos puestos de trabajo, y distintas situaciones de mi vida creo que toda situación, y todo equipo humano nos enseña de alguna o otra manera algun aspecto que desconocíamos. Aprender y enseñar son valores que tienen que ir de la mano a la hora de evolucionar como persona, ya que no se puede saber todo, pero si podemos conocer esta carencia y seguir aprendiendo.</p>
    </div>
    </div>

  )
}

export default About