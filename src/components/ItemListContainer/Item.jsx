const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.image} alt="" width={100} />
      <p>{product.name}</p>
      <p>precio: {product.price}</p>
    </div>
  )
}
export default Item