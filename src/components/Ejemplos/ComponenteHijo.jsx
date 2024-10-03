const ComponenteHijo = ({ titulo, children }) => {

  return (
    <div>
      <h2>{titulo}</h2>
      <div>{children}</div>
    </div>
  )
}
export default ComponenteHijo