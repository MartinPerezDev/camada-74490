import banner from "../assets/banner.jpg"

const Banner = () => {

  const saludar = () => {
    alert("Hola Mundo!!!")
  }

  return (
    <div onClick={ saludar } >
      <img style={{width: "100%"}} src={banner} alt="" />
       
    </div>
  )
}
export default Banner