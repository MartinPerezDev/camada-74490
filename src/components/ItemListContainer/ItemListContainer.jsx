import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { getProducts, getProductById, addProduct, modProduct, deleteProductById } from "../../utils/fetchApi.js"

import "./itemlistcontainer.css"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const newProduct = {
    nombre: "Pantalon Jean",
    descripcion: "pantalon nuevo",
    categoria: "pantalones",
    stock: 3,
    precio: 2000, 
    imagen: "https://th.bing.com/th/id/OIP.GKbDVS0grWumDU4BUANodAHaJ3?rs=1&pid=ImgDetMain"
  }

  const mod = {
    precio: 5200
  }

  useEffect(() => {

    getProducts()
      .then((data)=> setProducts(data) )

    getProductById(2)
      .then((data) => console.log(data))
  }, [])

  const clickEvento = () => {
    /*
    addProduct(newProduct)
      .then((data)=> setProducts(data))
    
    modProduct(3, mod)
      .then( (data) => setProducts(data) )
    */
    deleteProductById(3)
      .then( (data)=> setProducts(data) )
  }

  return (
    <div className="itemlistcontainer">
      <h1>{greeting}</h1>
      <button onClick={clickEvento} >Borrar producto</button>
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer