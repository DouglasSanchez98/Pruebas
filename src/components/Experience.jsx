import React from 'react'
import HtmlLogo from '../assets/htmlLogo.png'
import TailwindLogo from '../assets/tailwindLogo.png'
import JssLogo from '../assets/jssLogo.png'
import CssLogo from '../assets/cssLogo.png'


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: HtmlLogo,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: TailwindLogo,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 3,
      src: JssLogo,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: CssLogo,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
  ];

  return (

    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="py-6">Estas son las tecnologías que utilizo</p>
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

export default Experience
