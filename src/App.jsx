import './App.css'
import Cabecera from './components/Cabecera'
import Habitaciones from './components/Habitaciones'
import TodoIncluido from './components/TodoIncluido'
import Experiencias from './components/Experiencias'
import Galeria from './components/Galeria'
import FormatoContacto from './components/FormatoContacto'
import PreguntasFrecuentes from './components/PreguntasFrecuentes'
import PiePagina from './components/PiePagina'

function App() {
  return (
    <div className='font-montserrat'>
      <Cabecera></Cabecera>
      <Habitaciones></Habitaciones>
      <TodoIncluido></TodoIncluido>
      <Experiencias></Experiencias>
      <Galeria></Galeria>
      <FormatoContacto></FormatoContacto>
      <PreguntasFrecuentes></PreguntasFrecuentes>
      <PiePagina></PiePagina>
    </div>
  )
}

export default App
