const getProducts = () => {
  return fetch("http://localhost:8080/api/productos")
    .then((respuesta) => respuesta.json())
    .catch((error) => console.error(error))
}

const getProductById = (idProduct) => {
  return fetch(`http://localhost:8080/api/productos/${idProduct}`)
    .then((respuesta) => respuesta.json())
    .catch((error) => console.error(error))
}

const addProduct = (newProduct) => {
  return fetch("http://localhost:8080/api/productos", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProduct)
  })
    .then((respuesta) => respuesta.json())
    .catch((error) => console.error(error))
}

const modProduct = (idProduct, mod) => {
  return fetch(`http://localhost:8080/api/productos/${idProduct}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mod)
  })
    .then((respuesta) => respuesta.json())
    .catch((error) => console.error(error))
}

const deleteProductById = (idProduct) => {
  return fetch(`http://localhost:8080/api/productos/${idProduct}`, {
    method: "DELETE"
  })
    .then((respuesta) => respuesta.json())
    .catch((error) => console.error(error))
}

export { getProducts, getProductById, addProduct, modProduct, deleteProductById }