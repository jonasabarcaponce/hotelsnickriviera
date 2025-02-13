import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
  import 'react-accessible-accordion/dist/fancy-example.css';

  /* 
  const PreguntasFrecuentes = () => {
    return (
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is React?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              React is a JavaScript library for building user interfaces.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
  
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Why use React?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              React makes it easy to create interactive UIs with component-based architecture.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
  
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How do you use React?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You build components that represent parts of the UI and manage their state and behavior.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    );
  };
  
  export default PreguntasFrecuentes; */

const PreguntasFrecuentes = () => {
    return (
        <div className="bg-orange-500 text-black py-20">
            <div className="flex items-center max-w-[986px] mx-auto px-5 mb-10 font-bold">
                <div className="m-auto">
                    <h1 className='mb-3 big-responsive-text text-white'>Preguntas frecuentes</h1>
                </div>
            </div>
            <div className="max-w-[986px] mx-auto px-5 font-bold">
                <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ¿Hay acceso directo a la playa?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                               Sí, en Nickelodeon Hotels & Resorts, disfrutarás de acceso directo a la playa. Desde tu cama, podrás llegar a la playa en solo unos pasos, haciendo que tus vacaciones junto al mar sean aún más cómodas y placenteras.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ¿Nickelodeon es todo incluido?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Sí, Nickelodeon Hotels & Resorts ofrece una experiencia todo incluido de primer nivel. Podrás disfrutar de comidas gourmet, bebidas premium, actividades emocionantes y entretenimiento para toda la familia, todo en un entorno de lujo diseñado para crear recuerdos inolvidables.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ¿Aqua Nick está incluido?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Sí, como huésped de Nickelodeon Hotels & Resorts, tendrás acceso ilimitado a Aqua Nick. Además, podrás disfrutar de acceso anticipado desde las 10:00 a.m., para que comiences la diversión antes que nadie.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default PreguntasFrecuentes;