import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

import image1 from '../assets/hotel/1.png';
import image2 from '../assets/hotel/2.png';
import image3 from '../assets/hotel/3.png';

const imagesWithTitles = [
    { src: image1, title: 'Habitación con piscina' },
    { src: image2, title: 'Estilo: Bob Esponja' },
    { src: image3, title: 'Estilo: Tortugas Ninja' },
];

const Galeria = () => {
    return (
        <div className="bg-orange-500 text-black py-20">
            <div className="flex items-center max-w-[986px] mx-auto px-5 pb-10 font-bold">
                <div className="m-auto">
                    <h1 className='mb-3 big-responsive-text text-white'>Conoce el hotel</h1>
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
                navigation={true} 
                modules={[Navigation,Autoplay]}
                className='max-w-[986px] mx-auto px-5 second-slider'>
                {imagesWithTitles.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.src} alt={item.title} title={item.title} className="w-full h-auto" />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Galeria;