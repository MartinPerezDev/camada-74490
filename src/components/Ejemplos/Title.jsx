import { useEffect } from "react"

const Title = () => {

  useEffect(() => {

    const mostrarAnchoVentana = () => {
      console.log("Ancho: ", window.innerWidth)
    }

    window.addEventListener("resize", mostrarAnchoVentana)

    //cleanup effect
    return () => {
      window.removeEventListener("resize", mostrarAnchoVentana)
    }
  }, [])

  return (
    <h2>Final de la clase</h2>
  )
}

export default Title