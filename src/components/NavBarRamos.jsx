import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll';
import logoRamos from '../assets/logoUnico.png'
import logoBlancoRamos from '../assets/logoBlancoRamos.png'
import ReactWhatsapp from 'react-whatsapp';


const NavBarRamos = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'inicio',
            child: (
                <>

                    <p className="cursor-pointer m-1">inicio</p>

                </>
            ),
        },
        {
            id: 2,
            link: 'proyectos',
            child: (
                <>

                    <p className="cursor-pointer m-1">proyectos</p>

                </>
            ),
        },
        {
            id: 3,
            link: 'nosotros',
            child: (
                <>

                    <p className="cursor-pointer m-1">nosotros</p>

                </>
            ),
        },
        {
            id: 4,
            link: 'servicios',
            child: (
                <>

                    <p className="cursor-pointer m-1">servicios</p>

                </>
            ),
        },
        {
            id: 5,
            link: 'clientes',
            child: (
                <>

                    <p className="cursor-pointer m-1">clientes</p>

                </>
            ),
        },
        {
            id: 6,
            link: 'contacto',
            child: (
                <>
                    <div className='border border-yellow-300 border-solid rounded p-1'>
                        <ReactWhatsapp number="+59170626554" message="Saludos necesito Información" element='text' >
                            <p className="cursor-pointer m-1 ">contacto</p>
                        </ReactWhatsapp>
                    </div>
                </>
            ),
        },
    ]
    return (
        <div className='flex  justify-between items-center w-full h-20
         px-4 text-white bg-black fixed z-10 '>
            <div className="h-full">
                <img src={logoBlancoRamos} alt="Logo Ramos Film Production"
                    className="pt-2 rounded-2xl mx-auto md:h-16 h-20"></img>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link, child }) => (

                    <li key={id} className='px-4 cursor-pointer capitalize font font-medium text-gray-400 hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500}>
                            {child}
                        </Link>

                    </li>

                ))}

            </ul>


            <div onClick={() => setNav(!nav)} className=" cursor-pointer  z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={40} /> : <FaBars size={40} />}
            </div>
            {nav && (

                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 '>
                    {links.map(({ id, link, child }) => (

                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>

                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                {child}
                            </Link>
                        </li>

                    ))}
                </ul>

            )}

        </div>
    )
}

export default NavBarRamos