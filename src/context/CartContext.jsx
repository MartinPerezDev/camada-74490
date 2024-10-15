import { createContext, useState } from "react";

//creamos un contexto llamado CartContext
const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] =  useState([])

  //funcion para agregar productos al carrito
  const addProductInCart = (newProduct) => {
    setCart( [ ...cart, newProduct ] )
  }

  //funcion para detectar productos duplicados
  const isInCart = () => {

  }

  //funcion para eliminar un producto del carrito, por su "id"
  const deleteProductInCart = (idProduct) => {
    const productsFilter = cart.filter( (productCart) => productCart.id !== idProduct  )
    setCart(productsFilter)
  }

  //funcion para calcular la cantidad total de productos
  const totalQuantity = () => {
    const quantity = cart.reduce( ( total, productCart) => total + productCart.quantity, 0 )
    return quantity
  }

  //funcion para calcular el precio total de toda la compra
  const totalPrice = () => {
    const price = cart.reduce( (total, productCart) => total + ( productCart.price * productCart.quantity ) , 0 )
    return price
  }

  //funcion para vaciar el carrito
  const deleteCart = () => {
    setCart([])
  }

  return(
    <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteProductInCart, deleteCart } } >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }