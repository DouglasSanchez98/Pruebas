import React from 'react'
import RetoMateo25 from '../assets/retoMateo25Portada.jpg'
import ManifiestoBancoFie from '../assets/manifiestoBancoFie2.jpg'
import PeliculaEngaño from '../assets/PeliculaEngaño.jpg'
import SerieMigafonos from '../assets/serieMiga3.jpg'


const Trabajos = () => {
    const portfolios = [
        {
            id: 1,
            src: RetoMateo25,
            tipo: 'Serie Documental',
            cliente: 'Cliente: Visión mundial',
            area:'Area: Dirección de fotografía',
            href: 'https://www.youtube.com/watch?v=MwgMV7Abi98'
        },
        {
            id: 2,
            src: ManifiestoBancoFie,
            tipo: 'Spot Publicitario',
            cliente: 'Cliente: Banco Fie',
            area:'Area: Dirección de fotografía',
            href: 'https://www.youtube.com/watch?v=UNcAp03Gc7Y'
        },
        {
            id: 3,
            src: PeliculaEngaño,
            tipo: 'Película',
            cliente: 'Cliente: Artistas Latinos',
            area:'Area: Productor asociado',
            href: 'https://youtu.be/N58w35TkE98?si=gcCpzngmG9DHVEg3'
        },
        {
            id: 4,
            src: SerieMigafonos,
            tipo: 'Serie Documental',
            cliente: 'Cliente: Migafonos',
            area:'Area: Dirección de fotografía',
            href: 'https://www.youtube.com/playlist?list=PL91AWfgdAzD2CkKNdMRNApLx58cfzRt8v'
        },

    ]
    return (
        <div name="trabajos"
            className=" bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-fit ">
            <div className="max-w-screen-lg p-1 mx-auto flex flex-col  w-full h-full  items-start  pb-5">
                <div className="pb-1 ">
                    <p className="text-4xl font-bold inline border-b-4 border-yellow-500"
                    >Trabajos</p>
                    <p className="py-6">Conoce nuestros trabajos</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 sm:px-0">
                    {
                        portfolios.map(({ id, src, tipo, cliente, href,area }) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <a href={href} target="_blank" rel="noopener noreferrer">
                                    <img src={src} alt=""
                                        className="rounded-md duration-200 hover:scale-105" />
                                </a>
                                <div className="flex flex-col items-center justify-center">
                                    <button className="m-1 duration-200 hover:scale-105 hover:bg-slate-800 rounded-lg font-semibold">{tipo}</button>
                                    <button className="m-1 duration-200 hover:scale-105 hover:bg-slate-800 rounded-lg ">{area}</button>
                                    <button className="m-1 duration-200 hover:scale-105 hover:bg-slate-800 rounded-lg ">{cliente}</button>
                                </div>
                            </div>
                        ))
                    }


                </div>

            </div>

        </div>
    )
}

export default Trabajos