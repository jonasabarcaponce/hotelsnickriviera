import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

import image1 from '../assets/habitaciones/slider-1.png';
import image2 from '../assets/habitaciones/slider-2.png';
import image3 from '../assets/habitaciones/slider-3.png';
import image4 from '../assets/habitaciones/slider-4.png';
import image5 from '../assets/habitaciones/slider-5.png';

const imagesWithTitles = [
    { src: image1, title: 'Swim-up Oceanfront King', description: 'Dormitorio privado con baño, sofá cama y balcón con acceso a la piscina infinita.', beds: '1 King Size, 1 murphy', people: 'Hasta 4 adultos', size: '54m2' },
    { src: image2, title: 'Swim-up Oceanfront Queen', description: 'Suite con sala, sofá cama, 2 televisores y 2 baños completos.', beds: '2 camas y 1 sofá cama', people: 'Hasta 4 adultos', size: '54m2' },
    { src: image3, title: 'Swim-up Oceanfront Connecting', description: 'Suite con dormitorio privado conectada a otra con dos camas Queen.', beds: 'Depende', people: 'Hasta 4 adultos', size: '54m2' },
    { src: image4, title: 'The Pineapple Suite', description: 'Inspirada en la casa de piña de Bob Esponja, esta villa es emblemática.', beds: '3 camas', people: 'Hasta 5 adultos', size: '220m2' },
    { src: image5, title: 'The Lair Suite', description: 'El escondite de las Tortugas Ninja nunca ha sido tan moderno y lujoso.', beds: '3 camas', people: 'Hasta 5 adultos', size: '220m2' },
];

const Hotels = () => {
    return (

        <div className="px-5 py-20 shadow-cg-big">
            <div className="mx-auto px-5 items-center max-w-[1200px]" id="habitaciones">
                <div className="text-center">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        Las mejores habitaciones
                    </h1>
                    <p className="text-lg mt-5">
                        Tu estancia será una experiencia mágica y única. Conoce nuestras habitaciones y elige la que más te guste.
                    </p>
                </div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    pagination={{ clickable: true }}
                    navigation={true} modules={[Navigation,Autoplay]}
                    className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 first-slider'>

                    {imagesWithTitles.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-left pr-4">
                                <img src={item.src} alt={item.title} className="rounded" />
                                <h2 className="text-xl font-bold mt-4">{item.title}</h2>
                                <p className="mt-2">{item.description}</p>
                                <div className="mt-4 flex">
                                    <a href="#recorridos" className="bg-nickelodeonOrange text-white font-bold text-xs md:text-base px-4 md:px-8 py-2 rounded transition-opacity hover:opacity-80">Agendar recorrido</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}    
                </Swiper>
            </div>
        </div>
        
    );
};

export default Hotels;