import { useState, useEffect } from "react"
import { getProduct } from "../../data/data.js"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext.jsx"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { addProductInCart } = useContext(CartContext)
  const { idProduct } = useParams()

  const addProduct = (count) => {
    const productCart = { ...product, quantity : count }

    addProductInCart(productCart)
  }

  useEffect( ()=> {
    getProduct(idProduct)
      .then((data)=> setProduct(data) )
  }, [idProduct] )

  return (
    <ItemDetail product={product} addProduct={addProduct} />
  )
}
export default ItemDetailContainer