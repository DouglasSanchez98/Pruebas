import React from 'react'
import HtmlLogo from '../assets/htmlLogo.png'
import TailwindLogo from '../assets/tailwindLogo.png'
import JssLogo from '../assets/jssLogo.png'
import CssLogo from '../assets/cssLogo.png'
import BurgerKinglogo from '../assets/burgerKinglogo.png'
import CbnLogo from '../assets/cbnLogo.png'
import RedbullLogo from '../assets/redbullLogo.png'
import ProlimpioLogo from '../assets/proLimpioLogo2.jpeg'
import GobMunTornoLogo from '../assets/gobMunTornoLogo2.jpeg'
import SofiaLogo from '../assets/sofiaLogo2.jpeg'
import EmbolLogo from '../assets/embolLogo.png'





const EmpresasRamos = () => {
    const techs = [
        {
          id: 1,
          src: GobMunTornoLogo,
          title: 'Gob. Municipal del Torno',
          style: 'shadow-orange-500  md:w-2/3 w-1/1'
        },
        {
          id: 2,
          src: ProlimpioLogo,
          title: 'Prolimpio',
          style: 'shadow-yellow-400 md:w-2/3 w-1/1'
        },
        {
          id: 3,
          src: CbnLogo,
          title: 'Cervecería Boliviana Nacional',
          style: 'shadow-gray-200  md:w-2/3 w-1/1'
        },
        {
          id: 4,
          src: RedbullLogo,
          title: 'Redbull',
          style: 'shadow-indigo-700  md:w-2/3 w-1/1'
        },
        {
          id: 5,
          src: SofiaLogo,
          title: 'Sofia',
          style: 'shadow-red-900  md:w-2/3 w-1/1'
        },
        {
          id: 6,
          src: EmbolLogo,
          title: 'Embol',
          style: 'shadow-red-800  md:w-2/3 w-1/1'
        },
      ];
    
      return (
    
        <div name="clientes" className="bg-gradient-to-b from-black to-gray-800 w-full h-fit pt-10">
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
    
            <div>
              <p className="text-4xl font-bold border-b-4 border-yellow-500 p-2 inline">Clientes</p>
              <p className="py-6">Conoce los clientes que han desarrollado productos audiovisuales con nosotros</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
    
              {
                techs.map(({ id, src, title, style }) => (
                  <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className="w-20 mx-auto"  />
                    <p className="mt-4">{title}</p>
                  </div>
                ))
              }
    
    
            </div>
          </div>
        </div>
      )
}

export default EmpresasRamos