import React from 'react'
import Donaciones from '../assets/donacionesEnviosPet.png'
import Donaciones1 from '../assets/donacionesEnviosPetCopy.png'
import Donaciones2 from '../assets/donacionesEnviosPetCopy2.png'
import Construccion from '../assets/mainIverCorp.png'
import Construccion1 from '../assets/mainIverCorpCopy.png'
import Construccion2 from '../assets/mainIverCorpCopy2.png'


const Portfolio = () => {
    const portfolios=[
        {
            id:1,
            src: Donaciones
        },
        {
            id:2,
            src: Donaciones1
        },
        {
            id:3,
            src: Donaciones2
        },
        {
            id:4,
            src: Construccion
        },
        {
            id:5,
            src: Construccion1
        },
        {
            id:6,
            src: Construccion2
        },
    ]
    return (
        <div name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
                <div className="pb-1">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500"
                    >Portfolio</p>
                    <p className="py-6">Mira algunos de mis trabajos aquí</p>
                </div>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 sm:px-0">
                {
                    portfolios.map(({id,src})=> (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt=""
                        className="rounded-md duration-200 hover:scale-105" />
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-slate-800 rounded-lg">Demo</button>
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-slate-800 rounded-lg">Code</button>
                        </div>
                    </div>
                    ))
                }
                    

                </div>

            </div>

        </div>
    )
}

export default Portfolio
