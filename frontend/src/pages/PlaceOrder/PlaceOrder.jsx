import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import "./placeOrder.css";
const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input className="name" type="text" placeholder="First name" />
            <input className="name" type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div className="multi-fields">
            <input className="name" type="text" placeholder="City" />
            <input className="name" type="text" placeholder="State" />
          </div>
          <div className="multi-fields">
            <input className="name" type="text" placeholder="Zip code" />
            <input className="name" type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
        <h2>Cart Totals</h2>
        <div>
       
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
            
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <div className="cart-total-details">
            <p>Total</p>
            <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
          </div>
        </div>
        <button onClick={()=>navigate("/order")} >PROCEED TO PAY</button>

      </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
