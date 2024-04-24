import { Outlet } from "react-router-dom"
import DirectorMenu from "../../component/director-menu/director-menu"
const Home=()=>{
return(
   <div>
    <Outlet />
      <DirectorMenu  />
   </div>
  )

}
export default Home