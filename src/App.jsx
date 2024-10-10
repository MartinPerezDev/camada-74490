import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import EjemploFormulario from "./components/Ejemplos/EjemploFormulario"
import EjemploCambiarClassName from "./components/Ejemplos/EjemploCambiarClassName"
import './App.css'

function App() {

  return (
    <div className="app-container" >
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos" />} />
          <Route path="/category/:idCategory" element={<ItemListContainer greeting="Bienvenidos" />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/ejemplos" element={<EjemploFormulario />} />
          <Route path="/ejemploClassName" element={<EjemploCambiarClassName />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
