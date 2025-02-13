import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const FormatoContacto = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            const response = await axios.post('/contact.php', formData);
            if (response.status === 200) {
                setIsSubmitted(true);
                localStorage.setItem('isSubmitted', 'true');
                window.location.href = '/?confirmation=true';
            }
        } catch (error) {
            console.error('Error submitting the form', error);
        }
    };

    // Check local storage on component mount
    useEffect(() => {
        if (localStorage.getItem('isSubmitted') === 'true') {
            setIsSubmitted(true);
        }
    }, []);

    return (
        <div className="px-5 py-20 bg-gray-100" id="reservar">
            <div className="mx-auto px-5 items-center max-w-[600px]">
                <div className="text-center">
                    {isSubmitted ? (
                        <>
                            <h1 className="text-2xl md:text-3xl font-bold">
                                ¡Gracias!
                            </h1>
                            <p className="text-lg mt-5">
                                En unos momentos nos pondremos en contacto contigo.
                            </p>
                        </>
                    ) : (
                        <>
                            <h1 className="text-2xl md:text-3xl font-bold">
                                Reservar
                            </h1>
                            <p className="text-lg mt-5">
                                Déjanos tus datos y en una llamada cotizaremos tu estancia en el Hotel para comenzar tu reservación.
                            </p>
                        </>
                    )}
                </div>
                {!isSubmitted && (
                    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" required autoComplete="name" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                            <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" pattern="[0-9]{10}" title="Debe ser un número de 10 dígitos" required autoComplete="tel-national" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" autoComplete="email" />
                        </div>
                        <div>
                            <button type="submit" className="bg-nickelodeonOrange text-white font-bold text-xs md:text-base px-4 md:px-8 py-2 rounded transition-opacity hover:opacity-80">
                                Agendar recorrido
                            </button>
                        </div>
                    </form>
                )} 

            </div>
        </div>
    );
};

export default FormatoContacto;