import React from 'react'
import { TypeAnimation } from 'react-type-animation'
// Para usar si necesito degradar colores className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
const AboutRamos = () => {
  return (
    <div
      name="quehacemos"
      className="w-full h-screen bg-gradient-to-b from-white to-green-one text-white ">
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center content-start w-full h-full">
        <div className="pb-0">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold inline text-green-two">Creemos en los niños. Invertimos en su presente para transformar su futuro.</p>
        </div>

        <p className="text-2xl mt-6">
         Misión: Brindar apoyo integral a niños y adolescentes en situación de vulnerabilidad, promoviendo su desarrollo físico, emocional y educativo.
        </p>
        <p className="text-2xl mt-6">
          Visión: Construir un entorno donde todos los niños tengan oportunidades para un desarrollo digno y pleno.
        </p>
        <br />
        {/*<div className=" flex flex-rows">
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
        </div>*/}


      </div>

    </div>
  )
}

export default AboutRamos