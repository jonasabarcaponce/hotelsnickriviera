import logoImage from '../assets/logo.png';

const PiePagina = () => {
    return (
        <footer className="bg-white text-black px-5 py-20">
            <div className="mx-auto px-5 items-center max-w-[1200px]">
                <div className="text-left mb-8">
                    <a href="/" title="Hotel Nick Riviera Maya">
                        <img src={logoImage} className="w-6/12 md:w-3/12" alt="Logo" />
                    </a>
                </div>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-bold">Contacto</h3>
                        <p className="mt-1">Teléfono: <a href="tel:+529843200042">+52 984 320 0042</a></p>
                        <p>Email: <a href="mailto:reservations@hotelsnickriviera.com">reservations@hotelsnickriviera.com</a></p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Dirección</h3>
                        <p className="mt-1">Carretera Cancún - Tulum Km. 45 77710, Solidaridad, Q.R., México</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Horario</h3>
                        <p className="mt-1">Departamento de reservaciones:</p>
                        <p>Abierto 24 horas, los 365 días del año.</p>
                    </div>
                    <div className="fixed bottom-10 right-10 z-50">
                        <a href="https://wa.me/5219843200042" className="bg-green-600 text-white px-8 py-2 font-bold rounded-2xl transition-opacity hover:opacity-80 flex items-center">
                            <i className="fab fa-whatsapp mr-1"></i> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PiePagina;