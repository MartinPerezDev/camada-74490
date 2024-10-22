import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, totalPrice, deleteProductInCart, deleteCart } = useContext(CartContext)

  //Early return
  if( cart.length === 0 ){
    return(
      <div>
        <h2>No hay productos en el carrito 😥</h2>
        <Link to="/" >Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div >
      <h1>Productos en el carrito</h1>
      {
        cart.map( (productCart) => (
          <div style={{ display: "flex", justifyContent: "space-around" }} key={productCart.id}>
            <img src={productCart.image} width={100} alt="" />
            <p>{productCart.name}</p>
            <p>precio c/u: {productCart.price}</p>
            <p>cantidad: {productCart.quantity}</p>
            <p>precio parcial: { productCart.price * productCart.quantity } </p>
            <button onClick={ () => deleteProductInCart(productCart.id) } >borrar producto</button>
          </div>
        ))
      }

      <div>
        <p>Precio total: {totalPrice()}</p>
        <button onClick={deleteCart} >Vaciar carrito</button>
      </div>
    </div>
  )
}
export default Cart