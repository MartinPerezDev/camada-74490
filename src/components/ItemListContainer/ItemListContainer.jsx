import ItemList from "./ItemList"
import useProducts from "../../hooks/useProducts"
import Loading from "../Loading/Loading"
import "./itemlistcontainer.css"
import hocFilterProducts from "../../hoc/hocFilterProducts"

const ItemListContainer = ({ products }) => {

  return (
    <div className="itemlistcontainer">
      <ItemList products={products} />
    </div>
  )
}

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc

//export default ItemListContainer