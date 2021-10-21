import { useState } from 'react'

const Prueba = () => {

  let [show, setShow ] = useState(0)
  
  const handleShow = (cod) => {
    setShow(show = cod);
  }

  return (
    <div>
      <button class="colorRed" type="button" onClick={() => handleShow(1)} > Mostrar Rojo</button>
      <button class="colorYellow"  type="button"  onClick={ () => handleShow(2)}>Mostrar Amarillo</button>
      <button class="colorBlue"  type="button" onClick={() => handleShow(3)}>Mostrar Azul</button>

      {
          show===1 &&(
            <div class="divColor colorRed"></div>
          )
      }

      {
          show===2 &&(
            <div class="divColor colorYellow"></div>
          )
      }

      {
          show===3 &&(
            <div class="divColor colorBlue"></div>
          )
      }

    </div>
  )
}

export default Prueba
