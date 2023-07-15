import './App.css'
import './assets/css/style.css'
//importando el componente Encabezado
import Encabezado from './components/Encabezado'
import Lista from './components/Lista'

function App() {
  let mensaje = "Estamos trabajando fuera del return";
  //return mandamos la informacion que el usuario va visualizar
  return (
    //<> contenedor padre para react
    <>
      <Encabezado name="juan"/>
      <Encabezado name="maria"/>
      <h1>Bienvenido a React</h1>
      <p>Mi primera practica</p>
      {/** con llaves {} asignamos codigo javascript */}
      <h2>{mensaje}</h2>
      <Lista />
    </>
  )
}

export default App
