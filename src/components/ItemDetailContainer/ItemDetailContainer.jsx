import { useState, useEffect } from "react"
import { getProduct } from "../../data/data.js"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { idProduct } = useParams()

  useEffect( ()=> {
    setLoading(true)

    getProduct(idProduct)
      .then((data)=> setProduct(data) )
      .finally(()=> setLoading(false))
  }, [idProduct] )

  return (
    <>
    {
      loading ? <div>Cargando...</div> : <ItemDetail product={product} />
    }    
    </>
  )
}
export default ItemDetailContainer