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
    { src: image1, title: 'Swim-up Oceanfront King Suite', description: 'Dormitorio principal privado con baño sofá cama y balcón con acceso directo a la piscina infinita', beds: '1 King Size, 1 murphy ', people: 'Hasta 4 adultos', size: '54m2' },
    { src: image2, title: 'Swim-up Oceanfront Queen Suite', description: 'Un suite que ofrece una sala con sofá cama, con 2 televisores, y 2 baños completos.', beds: '2 camas y 1 sofá cama', people: 'Hasta 4 adultos', size: '54m2' },
    { src: image3, title: 'Swim-up Oceanfront Connecting Suite', description: 'Una suite con dormitorio principal privado conectada a otra con dos camas Queen.', beds: 'Depende', people: 'Hasta 4 adultos', size: '54m2' },
    { src: image4, title: 'The Pineapple Suite', description: 'Inspirada en la casa de piña de Bob Esponja bajo el mar, esta lujosa villa es la residencia emblemática.', beds: '3 camas', people: 'Hasta 5 adultos', size: '220m2' },
    { src: image5, title: 'The Lair Suite', description: 'El escondite subterráneo de las Tortugas Ninja nunca ha sido tan moderno y lujoso.', beds: '3 camas', people: 'Hasta 5 adultos', size: '220m2' },
];

const Hotels = () => {
    return (
        <div className="bg-white text-black py-20">
            <div className="flex items-center max-w-[986px] mx-auto px-5 font-bold">
                <div>
                    <h1 className='mb-3 big-responsive-text text-orange-500'>Mas que habitaciones, experiencias.</h1>
                    <p className='medium-responsive-text'>Suites con balcón, piscina infinita, y una decoración única.</p>
                </div>
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
                className='max-w-[986px] mx-auto px-5 first-slider py-10'>
                    
                {imagesWithTitles.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.src} alt={`Gallery item ${index + 1}`} className="w-full h-auto" />
                        <h1 className='small-responsive-text font-bold mt-4 mr-8'>{item.title}</h1>
                        <ul className="mt-2 font-regular text-black/90 space-y-1">
                            <li><i className='fas fa-bed w-6'></i> {item.beds}</li>
                            <li><i className='fas fa-expand w-6'></i> {item.size}</li>
                            <li><i className='fas fa-people-group w-6'></i> {item.people}</li>
                        </ul>
                        <p className='text-black/90 mt-2'>{item.description}</p>
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className="flex items-center max-w-[986px] mx-auto px-5 font-bold">
                <div>
                    <a href="tel:+529842359910" className='bg-orange-500 small-responsive-text uppercase py-2 px-10 text-white flex items-center justify-center rounded-2xl'>
                        Cotizar    
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hotels;