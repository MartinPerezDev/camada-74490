const products = [
  {
    id: "Grt223",
    name: "Remera Extreme",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 400,
    stock: 10,
    image: "/img/remera-h.jpg",
    category: "remeras"
  },
  {
    id: "Grt224",
    name: "Remera Fitz Roy",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 420,
    stock: 4,
    image: "/img/remera-m.jpg",
    category: "remeras"
  },
  {
    id: "Hff556",
    name: "Pantalon Dorian",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 720,
    stock: 5,
    image: "/img/pantalon-h.jpg",
    category: "pantalones"
  },
  {
    id: "Hff557",
    name: "Pantalon Ambar",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 620,
    stock: 17,
    image: "/img/pantalon-m.jpg",
    category: "pantalones"
  },
  {
    id: "Wre442",
    name: "Zapatillas Cloudfield",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 800,
    stock: 2,
    image: "/img/zapatillas-m.jpg",
    category: "zapatillas"
  },
  {
    id: "Wre443",
    name: "Zapatillas Space",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 820,
    stock: 6,
    image: "/img/zapatillas-h.jpg",
    category: "zapatillas"
  },
]
/*
  const promesa = new Promise( (resolve, reject)=> {
    if(condicion){
      resolve("se resolvio")
    }else{
      reject("se rechazo")
    }
  })
*/

//Obtener productos
const getProducts = () => {
  return new Promise((resolve, reject) => {
    //Simulamos un retraso de red
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}

const getProduct = (idProduct) => {
  return new Promise( (resolve)=> {
    setTimeout(()=> {
      const product = products.find( (product)=> product.id === idProduct )
      resolve(product)
    }, 2000)
  })
}

export { getProducts, getProduct }