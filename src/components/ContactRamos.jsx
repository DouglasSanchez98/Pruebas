import React from 'react'

const ContactRamos = () => {
    return (
        <div id="contacto"
            className="w-full h-screen bg-green-two p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-orange-one">
                        Contáctanos
                    </p>
                    <p className="py-6">
                        Queremos trabajar contigo. Puedes escribir tus consultas aquí
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <form 
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="flex flex-col w-full md:w-1/2"
                    >
                        {/* Reemplaza esto con la Access Key que te dé Web3Forms */}
                        <input 
                            type="hidden" 
                            name="access_key" 
                            value="417ef9c0-8cfc-495b-8513-cfd38d77b87e" 
                        />

                        {/* Asunto del correo que recibirás */}
                        <input 
                            type="hidden" 
                            name="subject" 
                            value="Nuevo mensaje desde la web de Fundación Danielito" 
                        />

                        {/* Nombre del sitio o formulario */}
                        <input 
                            type="hidden" 
                            name="from_name" 
                            value="Formulario Web Fundación Danielito" 
                        />

                        <input
                            type="text"
                            name="name"
                            placeholder="Ingresa tu nombre"
                            required
                            className="p-2 bg-transparent border-2 border-orange-one rounded-md text-white focus:outline-none font-medium"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Ingresa tu email"
                            required
                            className="my-4 p-2 bg-transparent border-2 border-orange-one rounded-md text-white focus:outline-none font-medium"
                        />

                        <textarea 
                            name="message"
                            placeholder="Escribe tu mensaje"
                            rows="10"
                            required
                            className="p-2 bg-transparent border-2 border-orange-one rounded-md text-white focus:outline-none font-medium"
                        ></textarea>

                        <button 
                            type="submit"
                            className="text-black font-semibold bg-gradient-to-b from-orange-one to-white px-6 py-3 mt-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300 transition-transform"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactRamos