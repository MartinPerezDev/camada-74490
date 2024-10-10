import { useState, useEffect } from "react"
import "./styles.css"

const EjemploCambiarClassName = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY

    console.log(scrollPosition)

    if(scrollPosition > 500){
      setIsScrolled(true)
    }else{
      setIsScrolled(false)
    }
  }

  useEffect(()=> {

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [] )

  return (
    <div className={ isScrolled ? "scrolled" : "not-scrolled" }>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio ipsam architecto ex dolorum similique possimus facilis ut a veritatis? Dolorem veniam voluptas quos, officia modi natus nesciunt nobis dignissimos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio ipsam architecto ex dolorum similique possimus facilis ut a veritatis? Dolorem veniam voluptas quos, officia modi natus nesciunt nobis dignissimos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio ipsam architecto ex dolorum similique possimus facilis ut a veritatis? Dolorem veniam voluptas quos, officia modi natus nesciunt nobis dignissimos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio ipsam architecto ex dolorum similique possimus facilis ut a veritatis? Dolorem veniam voluptas quos, officia modi natus nesciunt nobis dignissimos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio ipsam architecto ex dolorum similique possimus facilis ut a veritatis? Dolorem veniam voluptas quos, officia modi natus nesciunt nobis dignissimos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio ipsam architecto ex dolorum similique possimus facilis ut a veritatis? Dolorem veniam voluptas quos, officia modi natus nesciunt nobis dignissimos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio ipsam architecto ex dolorum similique possimus facilis ut a veritatis? Dolorem veniam voluptas quos, officia modi natus nesciunt nobis dignissimos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio ipsam architecto ex dolorum similique possimus facilis ut a veritatis? Dolorem veniam voluptas quos, officia modi natus nesciunt nobis dignissimos.
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}
export default EjemploCambiarClassName