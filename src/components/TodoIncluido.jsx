import image from '../assets/todo-incluido.png';

const TodoIncluido = () => {
    return (
        <div className="bg-black text-white relative">
            <div className="grid md:grid-cols-2 gap-4 max-w-[986px] mx-auto px-5 py-20">
                <div className="md:col-span-1 font-bold flex flex-col justify-center">
                    <div className='text-center space-y-8'>
                        <h1 className='mb-3 big-responsive-text text-orange-500'>Todo Incluido</h1>
                        <p className='small-responsive-text'>
                        La experiencia Gourmet Inclusive® garantiza un servicio de cinco estrellas <br></br> para todos los huéspedes. <br></br>
                        Disfruta de 6 restaurantes, bebidas premium y servicio personalizado.
                        </p>
                        <ul className='list-none space-x-3 medium-responsive-text'>
                            <li className='text-orange-500 inline-block'><i className='fas fa-burger'></i></li>
                            <li className='text-orange-500 inline-block'><i className='fas fa-utensils'></i></li>
                            <li className='text-orange-500 inline-block'><i className='fas fa-cocktail'></i></li>
                            <li className='text-orange-500 inline-block'><i className='fas fa-car'></i></li>
                        </ul>
                    </div>
                </div>
                <div className="md:col-span-1">
                    <img src={image} className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default TodoIncluido;