import React from 'react'


import Cdi from '../assets/1.png'
import CdiUribicha from '../assets/2.png'
import ProyectoBendicion from '../assets/3.png'
import FamiliasSaludables from '../assets/4.png'
import fondoProgramas from '../assets/fondoProgramas.jpg'



const ServiciosRamos = () => {
    const portfolios=[
        {
            id:1,
            src: Cdi,
            tipo: 'Serie Documental',
            cliente: 'Visión mundial',
            href:'https://www.youtube.com/watch?v=MwgMV7Abi98'
        },
        {
            id:2,
            src: CdiUribicha,
            tipo: 'Spot Publicitario',
            cliente: 'Banco Fie',
            href:'https://www.youtube.com/watch?v=UNcAp03Gc7Y'
        },
        {
            id:3,
            src: ProyectoBendicion,
            tipo: 'Película',
            cliente: 'Artistas Latinos',
            href:'https://youtu.be/N58w35TkE98?si=gcCpzngmG9DHVEg3'
        },
        {
            id:4,
            src: FamiliasSaludables,
            tipo: 'Serie Documental',
            cliente: 'Migafonos',
            href:'https://www.youtube.com/playlist?list=PL91AWfgdAzD2CkKNdMRNApLx58cfzRt8v'
        },
       
    ]
    return (
        <div name="programas"
            className="bg-green-two w-full text-white md:h-screen"
            style={{
                                backgroundImage: `url(${fondoProgramas})`,
                              }}>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
                <div className="pb-8 flex flex-col justify-center items-center">
                    <p className="text-5xl text-white font-montserrat inline justify-center border-b-4 border-orange-one"
                    >Programas</p>
                </div>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 px-12 sm:px-0">
                {
                    portfolios.map(({id,src,tipo,cliente,href})=> (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg h-96" onClick={() => window.open(href, '_blank')}>
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