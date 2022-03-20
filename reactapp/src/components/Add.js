import React from "react";
import {Button} from "reactstrap";
import {ToastContainer,toast} from "react-toastify";

import "./Add.css";


const Add=()=>{

  const addbtn=()=>{
    toast.success("PRODUCT ADDED")
}
const updatebtn=()=>{
  toast.success("PRODUCT UPDATED")
}
const delbtn=()=>{
toast.success("PRODUCT DELETED")
}

  

    return(
        <div>
            <form className="form">
            <h1 id="head">ADD PRODUCT</h1> 
            
            <div>
            <input type="text"
            id="data"
            placeholder="ENTER NAME"
            name="pname"
            required></input><br/><br/>

            <input
            type="number"
            id="data"
            placeholder="ENTER PRICE"
            name="pprice"
            required
          ></input><br/><br/>

          <input
            type="url"
            id="data"
            placeholder="ENTER IMAG-URL"
            name="purl"
            required
          ></input><br/><br/>

          <input
            type="number"
            id="data"
            placeholder="ENTER QUANTITY"
            name="pquantity"
            required>
          </input> <br/><br/>
           <ToastContainer/>
          <Button color="success" size="sm" onClick={addbtn} >ADD</Button>{' '}
          <Button color="info " size="sm" onClick={updatebtn}>UPDATE</Button>{' '}
          <Button color="danger" size="sm" onClick={delbtn} >DELETE</Button>
          </div>

            

          
            </form>


        </div>
        

    )
}

export default Add;