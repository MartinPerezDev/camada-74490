import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { CartContext } from "../../context/CartContext.jsx"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [hideItemCount, setHideItemCount] = useState(false)
  const { addProductInCart } = useContext(CartContext)
  const { idProduct } = useParams()

  const addProduct = (count) => {
    const productCart = { ...product, quantity : count }

    addProductInCart(productCart)
    //estado para mostrar u ocultar ItemCount
    setHideItemCount(true)
  }

  const getProduct = () => {
    const docRef = doc( db, "products", idProduct )
    getDoc(docRef)
      .then((dataDb)=> {
        const productDb = { id: dataDb.id, ...dataDb.data() }
        setProduct(productDb)
      })
  }

  useEffect( ()=> {
    getProduct()
  }, [idProduct] )

  return (
    <ItemDetail product={product} addProduct={addProduct} hideItemCount={hideItemCount} />
  )
}
export default ItemDetailContainer