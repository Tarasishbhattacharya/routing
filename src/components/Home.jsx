  
import {useState} from "react"
//
import { Singleprod } from "./Singleprod";
var faker = require('faker/locale/de');
faker.seed(100)
  function Home(){
      
    
      const prod_arr=[...Array(20)].map(()=>(
        {
            id:faker.datatype.uuid(),
           prod:faker.commerce.productName(),
           price:faker.commerce.price(),
           img:faker.random.image(),
        }));

        // const[cart,setCart]=useState([])
        const[product]=useState(prod_arr)  
        return (
          <div className='prod-container'>
              {product.map((prod)=>{
                return  <Singleprod value={prod}/>
              })}
          </div>
      )
  }
  export {Home}