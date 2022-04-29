import {Link} from "react-router-dom"
import "./style.css"
import { useContext } from "react";
import { Cartprod} from "./Context";
function Header(){
    const [cart]=useContext(Cartprod)
    return (
        <div>
          <span>React context Api tutorial</span>
          <ul className="nav">
           <li >
               <Link to="/" >Home page</Link>
           </li>
           <li >
               <Link to="/cart" >Cart page:{cart.length}</Link>
           </li>
          </ul>
        </div>
    )
}
export {Header}