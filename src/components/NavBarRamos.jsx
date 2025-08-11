import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import logofundacion1 from '../assets/logofundacion1.png';
import ReactWhatsapp from 'react-whatsapp';

const NavBarRamos = () => {
    const [nav, setNav] = useState(false);

    // Links que usan react-scroll (dentro del landing)
    const scrollLinks = [
        { id: 1, link: 'inicio', label: 'inicio' },
        { id: 2, link: 'quienessomos', label: 'quiénes somos' },
        { id: 3, link: 'programas', label: 'Programas' },
        { id: 4, link: 'comoapoyar', label: 'cómo apoyar' },
        { id: 5, link: 'impacto', label: 'impacto' },
        { id: 6, link: 'comoapoyar', label: 'Donar', className: 'border border-orange-one border-solid rounded p-1' },
        { id: 7, link: 'contacto', label: 'Hazte Socio', className: 'border border-orange-one border-solid rounded p-1 bg-orange-one text-white' },
    ];

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-white fixed z-20'>
            <div className="h-full">
                <img
                    src={logofundacion1}
                    alt="Logo Fundación Danielito"
                    className="pt-2 rounded-2xl mx-auto md:h-18 h-20"
                />
            </div>

            {/* Menú Desktop */}
            <ul className='hidden md:flex items-center gap-4'>
                {scrollLinks.map(({ id, link, label, className }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-green-two hover:scale-105 duration-200'>
                        <ScrollLink
                            to={link}
                            smooth
                            duration={500}
                            offset={-80} // Ajusta según altura del navbar
                            className={className || ''}
                        >
                            {label}
                        </ScrollLink>
                    </li>
                ))}

                {/* Botón hacia la nueva página Urubicha */}
                <li className='px-4 cursor-pointer capitalize font-medium text-green-two hover:scale-105 duration-200'>
                    <RouterLink to="/urubicha" className="border border-orange-one border-solid rounded p-1">
                        Urubicha
                    </RouterLink>
                </li>

                {/* Botón de WhatsApp */}
                <li>
                    <div className='border border-orange-one border-solid rounded p-1'>
                        <ReactWhatsapp
                            number="+59177027843"
                            message="Saludos, necesito Información sobre la Fundación Danielito"
                            element='text'
                        >
                            <p className="cursor-pointer m-1 capitalize font-medium text-green-two hover:scale-105 duration-200">Contacto</p>
                        </ReactWhatsapp>
                    </div>
                </li>
            </ul>

            {/* Botón menú móvil */}
            <div onClick={() => setNav(!nav)} className="cursor-pointer z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={40} /> : <FaBars size={40} />}
            </div>

            {/* Menú Móvil */}
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-green-one text-white'>
                    {scrollLinks.map(({ id, link, label, className }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            <ScrollLink
                                onClick={() => setNav(false)}
                                to={link}
                                smooth
                                duration={500}
                                offset={-80}
                                className={className || ''}
                            >
                                {label}
                            </ScrollLink>
                        </li>
                    ))}

                    {/* Link a Urubicha en móvil */}
                    <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <RouterLink to="/urubicha" onClick={() => setNav(false)}>
                            Urubicha
                        </RouterLink>
                    </li>

                    {/* Botón WhatsApp en móvil */}
                    <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <ReactWhatsapp
                            number="+59177027843"
                            message="Saludos, necesito Información sobre la Fundación Danielito"
                            element='text'
                        >
                            <p className="cursor-pointer">Contacto</p>
                        </ReactWhatsapp>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default NavBarRamos;
