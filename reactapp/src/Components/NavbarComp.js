import React, {  useState,useEffect } from 'react'
import {Navbar,Nav,Button,Container} from 'react-bootstrap'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
    Navigate
} from 'react-router-dom';
import './NavbarComp.css';
import Cart from './Cart';
import HomePage from './HomePage';
import MyOrder from './MyOrder';
import AdminReview from './AdminReview';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddReview from "./Review/AddReview";
import EditReview from "./Review/EditReview";
import View from "./Review/view";
import  axios  from 'axios';
toast.configure()
export default function NavbarComp () {
  const [orgcartItems, setOrgcartItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [itm, setItm] = useState(0);
  const handleAddProduct =(product)=>{
    const exist = cartItems.find((x) => x.productId === product.productId);
    if(exist){
      toast.warning("item already added")
    }
    else{
    toast.success("item added to the cart");
    orgcartItems.push(product);
    product.quantity=1;
    cartItems.push(product);
    }
  }
  const onAdd = (product) => {
    
    const exist = cartItems.find((x) => x.productId === product.productId);
    // useEffect(() => {
    //   axios.get('http://localhost:8080/products/admin/findProduct/${product.productId}').then((response) => {
    //     setItm(response.data);
    //   });
    // }, []);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.productId === product.productId ? { ...exist, quantity: parseInt(exist.quantity) + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.productId === product.productId);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.productId !== product.productId));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.productId === product.productId ? { ...exist, quantity: parseInt(exist.quantity) - 1 } : x
        )
      );
    }
  };
  console.log(cartItems);
    return (
        <Router>
      <div>
      <nav
      className="Navbar"
      style={{ backgroundColor: "whitesmoke", boxShadow: 10 }}
    >
      <h1>Frozen Cup </h1>
      <ul>
        <li>
          <NavLink to="/Home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Cart" activeClassName="active">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/MyOrder" activeClassName="active">
            Order
          </NavLink>
        </li>
        <li>
        <NavLink to="/Review" activeClassName="active">
            Review
          </NavLink>
        </li>
        <div className='btn'>
        <button className='button-83'>Logout</button> 
        </div>
      </ul>
      
    </nav> 
     </div>
      <div>
      <Routes cartItems={cartItems} handleAddProduct={handleAddProduct}>
        
          <Route path="" element={<Navigate to="/Home"/>}/>
          <Route path="/MyOrder" element={< MyOrder />}/>
          <Route path="/Home" element={<HomePage handleAddProduct={handleAddProduct}/>}/>
          <Route path="/Cart" element={< Cart  cartItems={cartItems} setCartItems={setCartItems} onAdd={onAdd}
          onRemove={onRemove}/>}/>
          {/* <Route path="Review" element={<AdminReview/>}/> */}
          <Route path="/review" element={<AddReview />}></Route>
      <Route path="/editreview" element={<EditReview />}></Route>
      <Route path="/view" element={<View />}></Route>
        </Routes>
      </div>
      </Router>
    )
  }