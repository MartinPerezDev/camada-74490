const products = [
  {
    id: "Grt223",
    name: "Remera roja",
    description: "",
    price: 400,
    stock: 10,
    image: "/img/remera.jpg",
    category: "remeras"
  },
  {
    id: "fgt332",
    name: "Pantalon de jean",
    price: 200,
    stock: 2,
    image: "/img/pantalon.jpg",
    category: "pantalones"
  },
  {
    id: "gtr221",
    name: "Zapatillas nike",
    price: 100,
    stock: 5,
    image: "/img/zapatillas.jpg",
    category: "zapatillas"
  }
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
    setTimeout( ()=>{
      resolve(products)
    }, 2000 )
  })
}

export { getProducts }