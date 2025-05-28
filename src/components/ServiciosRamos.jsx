import React from 'react'

import Donaciones2 from '../assets/donacionesEnviosPetCopy2.png'
import Construccion from '../assets/mainIverCorp.png'
import Construccion1 from '../assets/mainIverCorpCopy.png'
import Construccion2 from '../assets/mainIverCorpCopy2.png'
import RetoMateo25 from '../assets/retoMateo25Portada.jpg'
import ManifiestoBancoFie from '../assets/manifiestoBancoFie2.jpg'
import PeliculaEngaño from '../assets/PeliculaEngaño.jpg'
import SerieMigafonos from '../assets/serieMiga3.jpg'
import Produccion from '../assets/produccion.png'
import Marketing from '../assets/marketing.png'
import Streaming from '../assets/streaming.png'
import Sonido from '../assets/sonido.png'




const ServiciosRamos = () => {
    const portfolios=[
        {
            id:1,
            src: Produccion,
            tipo: 'Serie Documental',
            cliente: 'Visión mundial',
            href:'https://www.youtube.com/watch?v=MwgMV7Abi98'
        },
        {
            id:2,
            src: Marketing,
            tipo: 'Spot Publicitario',
            cliente: 'Banco Fie',
            href:'https://www.youtube.com/watch?v=UNcAp03Gc7Y'
        },
        {
            id:3,
            src: Streaming,
            tipo: 'Película',
            cliente: 'Artistas Latinos',
            href:'https://youtu.be/N58w35TkE98?si=gcCpzngmG9DHVEg3'
        },
        {
            id:4,
            src: Sonido,
            tipo: 'Serie Documental',
            cliente: 'Migafonos',
            href:'https://www.youtube.com/playlist?list=PL91AWfgdAzD2CkKNdMRNApLx58cfzRt8v'
        },
       
    ]
    return (
        <div name="servicios"
            className="bg-gradient-to-b from-green-one to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
                <div className="pb-8 flex flex-col justify-center items-center">
                    <p className="text-5xl text-orange-one font-bold inline justify-center"
                    >¿Qué podemos ofrecer?</p>
                    
                </div>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 px-12 sm:px-0">
                {
                    portfolios.map(({id,src,tipo,cliente})=> (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg h-96">
                        <img src={src} alt=""
                        className="rounded-md duration-200 hover:scale-110 h-full w-full" />
                       
                    </div>
                    ))
                }
                    

                </div>

            </div>

        </div>
    )
}

export default ServiciosRamos