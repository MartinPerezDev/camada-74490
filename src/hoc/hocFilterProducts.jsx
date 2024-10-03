import useProducts from "../hooks/useProducts"
import { useState } from "react"
import "./hocFilterProducts.css"

const hocFilterProducts = (Component) => {

  return function () {
    const { products } = useProducts()
    const [query, setQuery] = useState("")
    const [typeOrder, setTypeOrder] = useState("")

    const changeInput = (event) => {
      setQuery(event.target.value.toLowerCase())
    }

    const search = () => {
      let filterProducts = products.filter((product) => (
        product.name.toLowerCase().includes(query)
      ))

      if (typeOrder === "minor") {
        filterProducts = filterProducts.sort((prevProduct, nextProduct) => {
          return prevProduct.price - nextProduct.price
        })
      } else if (typeOrder === "mayor") {
        filterProducts = filterProducts.sort((prevProduct, nextProduct) => {
          return nextProduct.price - prevProduct.price
        })
      }

      return filterProducts
    }

    return (
      <div className="filter-products">
        <div className="filters">
          <input type="text" placeholder="buscar..." onChange={changeInput} />

          <button onClick={() => setTypeOrder("minor")} >Menor Precio</button>
          <button onClick={() => setTypeOrder("mayor")} >Mayor Precio</button>
        </div>
        <Component products={search()} />
      </div>
    )
  }

}

export default hocFilterProducts