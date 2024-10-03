import NavBar from "./components/NavBar/NavBar"
import ItemListContainerWithHoc from "./components/ItemListContainer/ItemListContainer"
import ComponentePadre from "./components/Ejemplos/ComponentePadre"
import './App.css'

function App() {

  return (
    <div className="container" >
      <NavBar />
      <ItemListContainerWithHoc />

      
      <ComponentePadre />
    </div>
  )
}

export default App
