  
 import { useContext } from "react";
import { Cartprod} from "./Context";
  function Singleprod({value}){
   const [cart,setCart]=useContext(Cartprod)
      return (
          <div className="product">
           <img src={value.img} alt={value.prod}/>
           <div className="proddesc">
           <span>{value.prod}</span>  
           <span>{value.price.substring(0,3)}</span>           
           </div>
           {cart.includes(value)?(
               <button onClick={()=>{
                setCart(cart.filter((c)=>c.id!==value.id))
            }}  className="add">Remove from cart</button>
           ):(
            <button onClick={()=>{
                setCart([...cart,value])
            }}  className="add">Add to cart</button>
           )}
          </div>
      )
  }

export {Singleprod}