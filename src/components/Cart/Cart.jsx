import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    let total = 0
    let totalShipping = 0;
    for (const product of cart){
        total = product.price + total;
        totalShipping = product.shipping + totalShipping;
    }

    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'> 
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total} </p>
            <p>Shipping Charge: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;