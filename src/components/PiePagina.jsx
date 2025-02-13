import logoImage from '../assets/logo.png';

const PiePagina = () => {
    return (
        <div className="bg-white text-black">
            <a href="#" className="bg-orange-500 text-2xl text-white flex items-center justify-center rounded-full min-w-12 w-12 h-12 bottom-right fixed bottom-10 right-10">
                <i className="fab fa-whatsapp"></i>
            </a>
            <div className="max-w-[986px] mx-auto py-10 px-5">
                <nav className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <img src={logoImage} className='w-6/12 md:w-8/12 m-auto md:m-0 pb-5 md:pb-0' alt="Logo" />
                    </div>
                    <div className='text-right'>
                        <a href="mailto:hola@hola.com" className='small-responsive-text'>
                            <span className='text-orange-500 font-bold fas fa-envelope mr-2'></span> 
                            hola@hola.com</a> <br></br>
                        <a href='tel:' className='small-responsive-text'>
                            <span className='text-orange-500 font-bold fas fa-phone mr-1'></span> 
                            +52 (000) 000 00 00</a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default PiePagina;