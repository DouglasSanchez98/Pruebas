import React from 'react'
import camarografo from '../assets/camarografos.png'

const HomeRamos = () => {
    return (
        <div  className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-28">
            <div className="w-full h-auto flex items-center justify-center">

                <img src={camarografo} alt=""
                    className="rounded-md w-full h-auto" />


            </div>
        </div>

    )
}

export default HomeRamos