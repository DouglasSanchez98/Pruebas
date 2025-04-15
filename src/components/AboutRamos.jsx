import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const AboutRamos = () => {
  return (
    <div
      name="nosotros"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ">
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center content-start w-full h-full">
        <div className="pb-0">
          <p className="text-7xl font-bold inline ">¡Lo que no se comunica, no existe!</p>
        </div>

        <p className="text-2xl mt-6">
          Somos un equipo de profesionales de la comunicación,
          nuestra vocación es dar vida a visiones, alcanzar misiones
          y desatar el poder de la comunicación en su máxima
          expresión.
        </p>
        <br />
        <div className=" flex flex-rows">
          <p className="inline text-2xl">
            <TypeAnimation
              sequence={[
                'Creamos', // Types 'One'
                2000, // Waits 1s
                'Planificamos', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Difundimos', // Types 'Three' without deleting 'Two'
                2000,

              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em',color:'yellow' }}
            />
            
          </p>
          <p className="inline text-2xl">
          contenidos que
            sirven como herramienta para impulsar tu idea o
            estrategia.
          </p>
        </div>


      </div>

    </div>
  )
}

export default AboutRamos