import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
  import 'react-accessible-accordion/dist/fancy-example.css';

const PreguntasFrecuentes = () => {
    return (
        <div className="px-5 py-20 bg-nickelodeonGreen text-white" id="preguntas">
            <div className="mx-auto px-5 items-center max-w-[600px]">
                <div className="text-center">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        Preguntas
                    </h1>
                    <p className="text-lg mt-5">
                        Encuentra la respuesta a las preguntas mas comunes sobre el hotel Nickelodeon.
                    </p>
                </div>
                <div className="mt-10 space-y-6">
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    ¿El Hotel Nickelodeon es todo incluido?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Si, todas las propiedades de Nickelodeon son resorts con todo incluido para que disfrutes de unas vacaciones sin preocupaciones.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    ¿Hay acceso directo a la playa desde el hotel?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Sí, muchos de los Nickelodeon Hotels & Resorts ofrecen acceso directo a la playa, permitiéndote disfrutar del mar y la arena a pocos pasos de tu habitación.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    ¿Qué servicios tiene el hotel Nickelodeon?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Nickelodeon Resorts ofrece una variedad de servicios, incluyendo restaurantes gourmet, bares, piscinas, spas, actividades para niños, entretenimiento en vivo y acceso a parques acuáticos como Aqua Nick.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    ¿Hay habitaciónes con piscina privada?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Sí, en Nickelodeon Resorts puedes reservar habitaciones con piscina privada para disfrutar de una experiencia más exclusiva y relajante durante tu estancia.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    ¿Está incluido el acceso a Aqua Nick en mi visita?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Sí, el acceso a Aqua Nick está incluido en tu visita a Nickelodeon Hotels & Resorts, permitiéndote disfrutar de todas las atracciones y actividades acuáticas sin costo adicional.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default PreguntasFrecuentes;

{/* <div className="bg-orange-500 text-black py-20">
            <div className="flex items-center max-w-[986px] mx-auto px-5 mb-10 font-bold">
                <div className="m-auto">
                    <h1 className='mb-3 big-responsive-text text-white'>Preguntas frecuentes</h1>
                </div>
            </div>
            <div className="max-w-[986px] mx-auto px-5 font-bold">
                
            </div>
        </div> */}
