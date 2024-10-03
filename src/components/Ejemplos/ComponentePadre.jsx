import ComponenteHijo from "./ComponenteHijo"

const ComponentePadre = () => {
  
  return (
    <>
      <ComponenteHijo titulo="Mi caja">
        <p>Contenido personalizado</p>
        <button>Clickeame</button>
      </ComponenteHijo>

      <ComponenteHijo titulo="Mi caja 2">
        <button>Clickeame</button>
      </ComponenteHijo>
    </>
  )
}
export default ComponentePadre