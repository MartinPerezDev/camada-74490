//Componente contenedor
import { useState, useEffect } from "react"
import Contador from "./Contador"
import Title from "./Title"

const EjemploContador = () => {
  const [contador, setContador] = useState(1)
  const [toggle, setToggle] = useState(true)

  const aumentar = () => {
    //contador = contador + 1
    setContador(contador + 1)
  }

  const cambiarToggle = () => {
    setToggle( !toggle )
  }

  //se ejecuta solo al montar el componente
  //ej: llamadas a api, suscripciones a eventListener
  useEffect( ()=>{
    console.log("1er useEffect")
  }, [] )

  //se ejecuta en el montaje y cada vez que contador se actualice
  //ej: para realizar acciones especificas cuando una variable dependendiente cambie
  useEffect( ()=> {
    console.log("2do useEffect")
  }, [contador] )

  //se ejecuta en el montaje y cada vez que cualquier variable de estado se actualice
  //ej: operaciones globales de monitoreo o registro, actualizaciones generales del componente
  useEffect( () => {
    console.log("3er useEffect")
  })

  return (
    <>
      <Contador contador={contador} aumentar={aumentar} />
      <div>
        <p>Booleano: {toggle.toString()}</p>
        <button onClick={cambiarToggle} >Alternar valor</button>
        {
          toggle && <Title />
        }
      </div>
    </>
  )
}
export default EjemploContador