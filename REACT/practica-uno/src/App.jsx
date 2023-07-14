import './App.css'
import './assets/css/style.css'
//importando el componente Encabezado
import Encabezado from './components/Encabezado'

function App() {
  let mensaje = "Estamos trabajando fuera del return";
  //return mandamos la informacion que el usuario va visualizar
  return (
    //<> contenedor padre para react
    <>
      <Encabezado />
      <h1>Bienvenido a React</h1>
      <p>Mi primera practica</p>
      {/** con llaves {} asignamos codigo javascript */}
      <h2>{mensaje}</h2>
    </>
  )
}

export default App
