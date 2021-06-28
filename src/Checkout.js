import {Link} from "react-router-dom"
import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from "react";


function Checkout(){
    
    return(
            <div className="checkout">

               <div className="checkout-container">
                <h3 className="heading-3">Credit card checkout</h3>
                <br></br>
                <label>Cardholder's Name</label>
                <input  type="text" name="name" />
                <br></br>
                <label>Card Number</label>
                <input type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
                 <div className="row">
                   <div className="col">
                   <label> Expiration Date</label>
                     <input  type="month" name="exp_date" />
                   </div>
                   <br></br>
                   <div className="col">
                   <label>CVV</label>
                     <input  type="number" name="cvv" />
                   </div>
                 </div>
                 <Link to="/Submit">
                <Button className="checkout-btn">Submit Order</Button>
                </Link>
               </div>
            </div>
           );
    
  }

  export default Checkout