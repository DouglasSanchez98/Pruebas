import React from 'react'
import FotoPerfilOther from '../assets/fotoPerfilOther.jpg'
import FotoPerfilIa from '../assets/fotoPerfilIa.png'
import { BiRightArrowAlt } from "react-icons/bi"
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className="h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800 pt-28 sm:pt-0 ">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Saludos a todos yo soy Ingeniero Electrónico y Desarrollador Web
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Tengo 2 años de experiencia trabajando con jóvenes y adolecentes.
            He observado los métodos de estudio convencionales que aún aplican la unidades educativas y me he percatado de que la tecnología actual podría apoyar a que la clase sea mas interactiva he incluso proponer algunos métodos de retención del tema.
            Por lo tanto luego de una investigación extensa he logrado crear un grupo de recursos, páginas web, aplicaciones y mas que el docente puede ocupar en clase

          </p>
          <div>
            <Link to='portfolio' smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-400 to-red-900 ">
              Recursos
              <span className="group-hover:rotate-90 duration-300">
                <BiRightArrowAlt size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={FotoPerfilIa} alt="mi foto peronal"
            className="rounded-2xl mx-auto w-2/5 md:w-full"></img>
        </div>

      </div>
    </div>
  )
}

export default Home
