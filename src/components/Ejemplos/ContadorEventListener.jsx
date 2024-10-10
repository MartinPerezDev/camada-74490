import { useState, useEffect } from "react"

const ContadorEventListener = () => {
  const [contador, setContador] = useState(1)

  const handleClickButton = () => {
    setContador( (currentValue)=> currentValue + 1  )
  }

  useEffect(()=>{
    const botonSumar = document.getElementById("botonSumar")

    botonSumar.addEventListener("click", handleClickButton)
    
    //esta funcion se ejecuta cuando nuestro componente se desmonta
    return () => {
      botonSumar.removeEventListener("click", handleClickButton)
    }
  }, [])

  return (
    <div>
      <p>{contador}</p>
      <button id="botonSumar" >+</button>
    </div>
  )
}
export default ContadorEventListener