import logoImage from '../assets/logo.png';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Slider data
import image1 from '../assets/bg-2.jpg';
import image2 from '../assets/bg.png';

const imagesWithTitles = [
    { src: image1, title: 'Disfruta tu vacaciones como nunca', subtitle: <>Junto a Bob Esponja, Las Tortugas Ninja y  <br className="hidden sm:block" />otros personajes de Nick en una escapada inolvidable.</> },
    { src: image2, title: '¡Ahorra hasta un 30% de descuento!', subtitle: <>Obtén beneficios únicos reservando ahora.<br className="hidden sm:block" />Promoción exclusiva de este sitio web.</> },
];

// Main Header Component
const Cabecera = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <header className="bg-white text-black relative px-5">
            <div className="mx-auto py-8 flex justify-between px-5 items-center max-w-[1200px]">
                <div>
                    <a href="/" title="C.G. Desarrollos - Conexión Global Desarrollos">
                        <img src={logoImage} className="w-6/12 md:w-8/12" alt="Logo" />
                    </a>
                </div>
                <div className="md:hidden">
                    <button id="menu-toggle" className="bg-black text-white px-4 py-2 rounded-full" onClick={menuToggle}>
                        <span id="menu-toggle-icon"><i className="fas fa-bars"></i></span>
                    </button>
                </div>
                <nav id="menu" className={`md:flex flex-col md:flex-row bg-white md:bg-transparent w-full md:w-auto space-y-5 md:space-y-0 md:space-x-5 font-bold items-start md:items-center p-5 md:p-0 shadow-md md:shadow-none absolute md:relative top-full left-0 md:top-0 md:left-auto z-50 ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="#" className="block">Inicio</a>
                    <a href="#nosotros" className="block">Habitaciones</a>
                    <a href="#desarrollos" className="block">Información</a>
                    <a href="#recorridos" className="block">Reservar</a>
                    <a href="#" className="block bg-black text-white px-8 py-2 rounded transition-opacity hover:opacity-80">Llamar</a>
                 </nav>
            </div>
        </header>

        <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay: 3000, // Delay between transitions in milliseconds
                disableOnInteraction: true, // Keeps autoplay running even after interaction
            }}
            loop={true}
        >
            {imagesWithTitles.map((item, index) => (    
                <SwiperSlide key={index}>
                    <div className='relative py-10 md:py-36 px-5'>
                        <div className="mx-auto px-5 items-center max-w-[1200px]">
                            <img src={item.src} alt="right" className='w-full md:w-1/3 md:absolute bottom-0 right-0 rounded-2xl md:rounded-br-none mb-10 md:mb-0'/>
                                <div className="container relative mx-auto">
                                    <h1 className="text-2xl md:text-3xl font-bold">
                                        {item.title}
                                    </h1>
                                    <p className="text-lg mt-5">
                                        {item.subtitle}
                                    </p>
                                    <div className="mt-8 flex space-x-4">
                                        <a href="#" className="bg-black text-white text-xs md:text-base px-4 md:px-8 py-2 rounded transition-opacity hover:opacity-80">Ver habitaciones</a>
                                        <a href="#" className="bg-gray-300 text-black text-xs md:text-base px-4 md:px-8 py-2 rounded transition-opacity hover:opacity-80">Reservar</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    );
};

export default Cabecera;
