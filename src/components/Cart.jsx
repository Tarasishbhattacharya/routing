import { Singleprod } from "./Singleprod"
import {useEffect,useState,useContext} from "react"
import { Cartprod} from "./Context";
function Cart(){
    const [cart,setCart]=useContext(Cartprod)
    const[price,setPrice]=useState()

    useEffect(()=>{
  setPrice(cart.reduce((acc,curr)=>
     acc+Number(curr.price),0
  ))
    },[cart])
    return (
        <div>
           <span>My cart:</span><br></br>

           <span>Total :{price}</span>
           <div className="prod-container">{cart.map((prod)=>{
              return <Singleprod value={prod}/>
           })}</div>
        </div>
    )
}
export {Cart}