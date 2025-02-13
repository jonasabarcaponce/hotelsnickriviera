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
        <div className="bg-white text-black py-20" id="cotizar">
            <div className="flex items-center max-w-[986px] mx-auto px-5 font-bold">
                <div>
                    {isSubmitted ? (
                        <>
                            <h1 className='mb-3 big-responsive-text text-orange-500'>¡Gracias por contactarnos!</h1>
                            <p className='medium-responsive-text'>Nos pondremos en contacto contigo pronto.</p>
                        </>
                    ) : (
                        <>
                            <h1 className='mb-3 big-responsive-text text-orange-500'>Tus vacaciones comienzan aquí.</h1>
                            <p className='medium-responsive-text'>Solicita una llamada y un asesor se pondrá en contacto contigo.</p>
                        </>
                    )}
                </div>
            </div>
            {!isSubmitted && (
                <div className="max-w-[986px] mx-auto px-5 font-bold small-responsive-text pt-10">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder='Nombre' className='border-2 rounded-2xl border-black mb-8 d-block w-full md:w-2/3 p-3' autoComplete="name" required />
                        <input type="text" name="phone" placeholder='Teléfono' className='border-2 rounded-2xl border-black mb-8 d-block w-full md:w-2/3 p-3' autoComplete="tel-national" required />
                        <input type="email" name="email" placeholder='Correo' className='border-2 rounded-2xl border-black mb-8 d-block w-full md:w-2/3 p-3' autoComplete="email" required />
                        <button type='submit' className='bg-orange-500 small-responsive-text uppercase py-2 px-10 text-white flex items-center justify-center rounded-2xl'>
                            Solicitar llamada    
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default FormatoContacto;