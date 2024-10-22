import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./itemdetail.css"

const ItemDetail = ({ product, addProduct, hideItemCount }) => {
  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images">
        </div>
        <div className="main-image">
          <img src={product.image} alt="" />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        {
          hideItemCount === true ? (
            <Link to="/cart">Terminar mi compra</Link>
          ) : (
            <ItemCount stock={product.stock} addProduct={addProduct} />
          )
        }

      </div>
    </div>
  )
}
export default ItemDetail