import React from 'react'
import FotoJuan from '../assets/FotoJuan.jpg'
import FotoSoli from '../assets/FotoSoli.png'
import FotoDouglas from '../assets/FotoDouglas.png'
import FotoBelen from '../assets/FotoBelen.png'


const TeamRamos = () => {
    const team = [
        {
            id: 1,
            src: FotoJuan,
            name: 'Juan Ramos',
            title: 'Gerente',
            style: 'shadow-orange-500  md:w-2/3 w-1/1'
        },
        {
            id: 2,
            src: FotoBelen,
            title: 'Gerente',
            name: 'Belén Rodero',
            style: 'shadow-yellow-400 md:w-2/3 w-1/1'
        },
        {
            id: 3,
            src: FotoDouglas,
            title: 'Streaming',
            name: 'Douglas Sánchez',
            style: 'shadow-gray-200  md:w-2/3 w-1/1'
        },
        {
            id: 4,
            src: FotoSoli,
            title: 'Marketing',
            name: 'Solimar Andia',
            style: 'shadow-indigo-700  md:w-2/3 w-1/1'
        },
    ];
    return (
        <div className='flex justify-center bg-gradient-to-b from-gray-800 to-black'>
            <div class="flex flex-wrap -mx-3 mb-5">
                <div class="w-full max-w-full px-3 mb-6  mx-auto">
                    <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5  cursor-pointer">
                        <div class="flex-auto block py-8 px-4">
                            <div>
                                <div class="mb-9">
                                    <p class="mb-2 text-[1.75rem] font-bold text-dark border-b-4 border-yellow-500 ">Nuestro Equipo</p>
                                    <span class="text-[1.15rem] font-medium text-muted"> Conozca a nuestro talentoso equipo, un grupo dinámico de expertos impulsados ​​por la pasión y la innovación. </span>
                                </div>
                                <div class="flex flex-wrap w-full justify-center">
                                    {
                                        team.map(({ id, src, title, style, name }) => (
                                            <div key={id} class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                                                <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                                    <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src={src} alt="avarat image" />
                                                </div>
                                                <div class="text-center">
                                                    <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">{name}</a>
                                                    <span class="block font-medium text-muted">{title}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TeamRamos