import experiencias1 from '../assets/experiencias-1.png';
import experiencias2 from '../assets/experiencias-2.png';
import experiencias3 from '../assets/experiencias-3.png';

const Experiencias = () => {
    return (
        <div className="bg-white text-black py-20">
            <div className="flex items-center max-w-[986px] mx-auto px-5 pb-20 font-bold">
                <div className="m-auto">
                    <h1 className='mb-3 big-responsive-text'>Experiencias para todos</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[986px] mx-auto px-5 text-center">
                <div className="p-5">
                    <img src={experiencias1} className='m-auto pb-4' />
                    <h2 className="small-responsive-text font-bold mb-2">
                        Club para pequeños
                    </h2>
                    <p>Sus pequeños estarán felices jugando sin parar, haciendo nuevos amigos, escuchando nuevos cuentos y más.</p>
                </div>
                <div className="p-5">
                    <img src={experiencias2} className='m-auto pb-4' />
                    <h2 className="small-responsive-text font-bold mb-2">
                        Atracciones para todos
                    </h2>
                    <p>Las diversiones para todas las edades en Nick no tienen fin como Nickelodeon Place, Aqua Nick y Plaza Orange.</p>
                </div>
                <div className="p-5">
                    <img src={experiencias3} className='m-auto pb-4' />
                    <h2 className="small-responsive-text font-bold mb-2">
                        Spa y gimnasio
                    </h2>
                    <p>Deléitese con servicios de masajes y tratamientos faciales, así como con equipos de ejercicio modernos,</p>
                </div>
            </div>
        </div>
    );
};

export default Experiencias;