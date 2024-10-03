import { BounceLoader } from "react-spinners"
import "./loading.css"

const Loading = () => {
  return (
    <div className="loading-screen">
      <BounceLoader size={50} color={"lime"} />
    </div>
  )
}
export default Loading