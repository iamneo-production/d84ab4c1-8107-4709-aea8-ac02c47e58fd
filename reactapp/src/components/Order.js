import React from "react";
import Data from "./Data";
import "./order.css";

const Order =()=>{
    return(
        <div>
        
        
        <table class= "table table-hover">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
    {
      Data.map(product =>{
        return(
          
          <tbody>
 <tr>
      <td>{product.ID}</td>
      <td>{product.ProductName}</td>
      <td>{product.Price}</td>
      <td>{product.Quantity}</td>
    </tr>
    </tbody>
          
        )
      })
    }
    
</table>
<button type="button" class="btn btn-lg">Pay Now</button>
   </div>
    )
}


export default Order;