import './App.css'
import Cabecera from './components/Cabecera'
import Habitaciones from './components/Habitaciones'
import FormatoContacto from './components/FormatoContacto'
import PreguntasFrecuentes from './components/PreguntasFrecuentes'
import PiePagina from './components/PiePagina'

function App() {
  return (
    <div className='font-montserrat'>
      <Cabecera></Cabecera>
      <Habitaciones></Habitaciones>
      <PreguntasFrecuentes></PreguntasFrecuentes>
      <FormatoContacto></FormatoContacto>
      <PiePagina></PiePagina>
    </div>
  )
}

export default App
